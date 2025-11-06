

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';
import styles from './styles.module.css';

Chart.register(...registerables);

interface Task {
  id: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  notes?: string;
}

const ReviewPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'quarter'>('month');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('');
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 'task-1',
      description: '减少冲动交易',
      priority: 'high',
      completed: false,
      notes: '连续3天出现因情绪波动导致的非策略交易，需要加强心理控制'
    },
    {
      id: 'task-2',
      description: '优化核心仓策略',
      priority: 'medium',
      completed: false,
      notes: '核心仓表现良好，但可适当调整权重分配以提高稳定性'
    },
    {
      id: 'task-3',
      description: '完善交易记录模板',
      priority: 'medium',
      completed: true,
      notes: '已添加更详细的情绪记录字段，有助于更好地分析交易心理'
    },
    {
      id: 'task-4',
      description: '学习新的技术指标',
      priority: 'low',
      completed: false,
      notes: '计划学习RSI和MACD指标，以丰富策略分析工具'
    }
  ]);

  const complianceChartRef = useRef<HTMLCanvasElement>(null);
  const pnlChartRef = useRef<HTMLCanvasElement>(null);
  const complianceChartInstanceRef = useRef<Chart | null>(null);
  const pnlChartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 复盘系统';
    return () => { document.title = originalTitle; };
  }, []);

  useEffect(() => {
    // 遵守率趋势图
    if (complianceChartRef.current) {
      const complianceCtx = complianceChartRef.current.getContext('2d');
      if (complianceCtx) {
        complianceChartInstanceRef.current = new Chart(complianceCtx, {
          type: 'line',
          data: {
            labels: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周'],
            datasets: [{
              label: '遵守率 (%)',
              data: [75, 82, 78, 88, 85, 89, 85.2],
              borderColor: '#10B981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              tension: 0.4,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: false,
                min: 70,
                max: 100,
                ticks: {
                  callback: function(value) {
                    return value + '%';
                  }
                }
              }
            }
          }
        });
      }
    }

    // 盈亏趋势图
    if (pnlChartRef.current) {
      const pnlCtx = pnlChartRef.current.getContext('2d');
      if (pnlCtx) {
        pnlChartInstanceRef.current = new Chart(pnlCtx, {
          type: 'bar',
          data: {
            labels: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周'],
            datasets: [{
              label: '盈亏 (¥)',
              data: [1200, -800, 2100, 1500, -500, 3200, 4280],
              backgroundColor: function(context) {
                const value = context.dataset.data[context.dataIndex];
                // 处理可能的null值和数组值
                if (value === null || value === undefined) {
                  return '#EF4444';
                }
                // 处理数组情况，取第一个值
                const numericValue = Array.isArray(value) ? value[0] : value;
                return numericValue >= 0 ? '#10B981' : '#EF4444';
              }
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                ticks: {
                  callback: function(value) {
                    return '¥' + value.toLocaleString();
                  }
                }
              }
            }
          }
        });
      }
    }

    return () => {
      if (complianceChartInstanceRef.current) {
        complianceChartInstanceRef.current.destroy();
        complianceChartInstanceRef.current = null;
      }
      if (pnlChartInstanceRef.current) {
        pnlChartInstanceRef.current.destroy();
        pnlChartInstanceRef.current = null;
      }
    };
  }, []);

  const handlePeriodChange = (period: 'week' | 'month' | 'quarter') => {
    setSelectedPeriod(period);
    console.log('切换周期:', period);
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleTaskComplete = (taskId: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const handleTaskUndo = (taskId: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, completed: false } : task
      )
    );
  };

  const handleTaskDelete = (taskId: string) => {
    if (confirm('确定要删除这个任务吗？')) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }
  };

  const handleAddTask = () => {
    setShowAddTaskModal(true);
  };

  const handleCloseAddTaskModal = () => {
    setShowAddTaskModal(false);
    setNewTaskDescription('');
    setNewTaskPriority('');
  };

  const handleAddTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newTaskDescription || !newTaskPriority) {
      alert('请填写完整的任务信息');
      return;
    }
    
    const newTask: Task = {
      id: 'task-' + Date.now(),
      description: newTaskDescription,
      priority: newTaskPriority as 'high' | 'medium' | 'low',
      completed: false,
      notes: '新添加的改进任务'
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
    handleCloseAddTaskModal();
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-danger bg-opacity-10 text-danger';
      case 'medium':
        return 'bg-tertiary bg-opacity-10 text-tertiary';
      case 'low':
        return 'bg-info bg-opacity-10 text-info';
      default:
        return '';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high':
        return '高优先级';
      case 'medium':
        return '中优先级';
      case 'low':
        return '低优先级';
      default:
        return '';
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-border-light h-16 z-50">
        <div className="flex items-center justify-between h-full px-6">
          {/* Logo和菜单切换 */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleSidebarToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <i className="fas fa-bars text-gray-600"></i>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-white text-sm"></i>
              </div>
              <h1 className="text-xl font-bold text-text-primary">ETF Lab</h1>
            </div>
          </div>
          
          {/* 搜索框 */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="搜索策略、ETF..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          
          {/* 右侧操作区 */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <i className="fas fa-bell text-gray-600"></i>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-danger rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2">
              <img 
                src="https://s.coze.cn/image/CkgW-VA74zk/" 
                alt="用户头像" 
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block text-sm font-medium text-text-primary">投资者</span>
              <i className="fas fa-chevron-down text-xs text-gray-400"></i>
            </div>
          </div>
        </div>
      </header>

      {/* 左侧菜单 */}
      <aside className={`fixed left-0 top-16 bottom-0 ${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-border-light z-40 ${styles.sidebarTransition}`}>
        <nav className="p-4 space-y-2">
          <Link 
            to="/dashboard" 
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
          >
            <i className="fas fa-tachometer-alt w-5"></i>
            {!isSidebarCollapsed && <span>仪表盘</span>}
          </Link>
          <Link 
            to="/strategies" 
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
          >
            <i className="fas fa-lightbulb w-5"></i>
            {!isSidebarCollapsed && <span>策略库</span>}
          </Link>
          <Link 
            to="/portfolio" 
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
          >
            <i className="fas fa-briefcase w-5"></i>
            {!isSidebarCollapsed && <span>仓位追踪</span>}
          </Link>
          <Link 
            to="/journal" 
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
          >
            <i className="fas fa-book w-5"></i>
            {!isSidebarCollapsed && <span>交易日志</span>}
          </Link>
          <Link 
            to="/review" 
            className={`${styles.navItem} ${styles.navItemActive} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium`}
          >
            <i className="fas fa-chart-bar w-5"></i>
            {!isSidebarCollapsed && <span>复盘系统</span>}
          </Link>
          <Link 
            to="/mind" 
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
          >
            <i className="fas fa-heart w-5"></i>
            {!isSidebarCollapsed && <span>心理追踪</span>}
          </Link>
        </nav>
      </aside>

      {/* 主内容区 */}
      <main className={`${isSidebarCollapsed ? 'ml-16' : 'ml-64'} mt-16 p-6 min-h-screen`}>
        {/* 页面头部 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">复盘系统</h2>
            <p className="text-text-secondary mt-1">投资表现分析与改进</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => handlePeriodChange('week')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${selectedPeriod === 'week' ? styles.periodTabActive : styles.periodTabInactive}`}
            >
              周
            </button>
            <button 
              onClick={() => handlePeriodChange('month')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${selectedPeriod === 'month' ? styles.periodTabActive : styles.periodTabInactive}`}
            >
              月
            </button>
            <button 
              onClick={() => handlePeriodChange('quarter')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${selectedPeriod === 'quarter' ? styles.periodTabActive : styles.periodTabInactive}`}
            >
              季
            </button>
          </div>
        </div>

        {/* 复盘指标区 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`bg-white rounded-xl shadow-card p-6 ${styles.cardHover}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">系统遵守率</p>
                <p className="text-2xl font-bold text-text-primary mt-1">85.2%</p>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-text-secondary mb-1">
                    <span>目标: 90%</span>
                    <span className="text-success">+2.1%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`bg-success h-2 rounded-full ${styles.progressBar}`} style={{width: '85.2%'}}></div>
                  </div>
                </div>
              </div>
              <div className="w-12 h-12 bg-success bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-check-circle text-success text-xl"></i>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-xl shadow-card p-6 ${styles.cardHover}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">盈亏贡献</p>
                <p className="text-2xl font-bold text-success mt-1">+¥4,280</p>
                <p className="text-sm text-text-secondary mt-1">
                  核心仓贡献 78%
                </p>
              </div>
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-pie text-primary text-xl"></i>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-xl shadow-card p-6 ${styles.cardHover}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">平均情绪分</p>
                <p className="text-2xl font-bold text-text-primary mt-1">7.8/10</p>
                <p className="text-sm text-text-secondary mt-1">
                  较上期 +0.3
                </p>
              </div>
              <div className="w-12 h-12 bg-tertiary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-heart text-tertiary text-xl"></i>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-xl shadow-card p-6 ${styles.cardHover}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">偏离行为</p>
                <p className="text-2xl font-bold text-warning mt-1">3次</p>
                <p className="text-sm text-text-secondary mt-1">
                  较上期 -1次
                </p>
              </div>
              <div className="w-12 h-12 bg-warning bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-exclamation-triangle text-warning text-xl"></i>
              </div>
            </div>
          </div>
        </section>

        {/* 趋势对比图 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">遵守率趋势</h3>
            <div className="relative h-64">
              <canvas ref={complianceChartRef}></canvas>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">盈亏趋势</h3>
            <div className="relative h-64">
              <canvas ref={pnlChartRef}></canvas>
            </div>
          </div>
        </section>

        {/* 改进任务清单 */}
        <section className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text-primary">改进任务清单</h3>
            <button 
              onClick={handleAddTask}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600"
            >
              <i className="fas fa-plus text-sm"></i>
              <span className="text-sm">添加任务</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`p-4 border border-border-light rounded-lg hover:bg-gray-50 ${task.completed ? styles.taskCompleted : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {!task.completed && (
                        <span className={`px-2 py-1 ${getPriorityClass(task.priority)} text-xs font-medium rounded-full`}>
                          {getPriorityText(task.priority)}
                        </span>
                      )}
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        task.completed 
                          ? 'bg-secondary bg-opacity-10 text-secondary' 
                          : 'bg-warning bg-opacity-10 text-warning'
                      }`}>
                        {task.completed ? '已完成' : '待完成'}
                      </span>
                    </div>
                    <h4 className="font-medium text-text-primary mb-1">{task.description}</h4>
                    <p className="text-sm text-text-secondary">{task.notes}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    {task.completed ? (
                      <button 
                        onClick={() => handleTaskUndo(task.id)}
                        className="p-2 text-secondary hover:bg-secondary hover:bg-opacity-10 rounded-lg"
                      >
                        <i className="fas fa-undo text-sm"></i>
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleTaskComplete(task.id)}
                        className="p-2 text-success hover:bg-success hover:bg-opacity-10 rounded-lg"
                      >
                        <i className="fas fa-check text-sm"></i>
                      </button>
                    )}
                    <button 
                      onClick={() => handleTaskDelete(task.id)}
                      className="p-2 text-danger hover:bg-danger hover:bg-opacity-10 rounded-lg"
                    >
                      <i className="fas fa-trash text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 添加任务弹窗 */}
      {showAddTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-text-primary">添加改进任务</h3>
                  <button 
                    onClick={handleCloseAddTaskModal}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                <form onSubmit={handleAddTaskSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="task-description" className="block text-sm font-medium text-text-primary mb-2">
                      任务描述
                    </label>
                    <textarea 
                      id="task-description" 
                      rows={3}
                      value={newTaskDescription}
                      onChange={(e) => setNewTaskDescription(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="请输入任务描述..." 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="task-priority" className="block text-sm font-medium text-text-primary mb-2">
                      优先级
                    </label>
                    <select 
                      id="task-priority"
                      value={newTaskPriority}
                      onChange={(e) => setNewTaskPriority(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      required
                    >
                      <option value="">请选择优先级</option>
                      <option value="high">高优先级</option>
                      <option value="medium">中优先级</option>
                      <option value="low">低优先级</option>
                    </select>
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <button 
                      type="button" 
                      onClick={handleCloseAddTaskModal}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-text-secondary hover:bg-gray-50"
                    >
                      取消
                    </button>
                    <button 
                      type="submit" 
                      className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600"
                    >
                      添加
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;

