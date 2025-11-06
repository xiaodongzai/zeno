

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';

// 模拟策略数据类型
interface StrategyData {
  name: string;
  type: string;
  created: string;
  updated: string;
  version: string;
  description: string;
}

// 版本历史数据类型
interface VersionHistoryItem {
  version: string;
  date: string;
  author: string;
  changes: string;
}

// 版本详情数据类型
interface VersionDetail {
  title: string;
  changes: string[];
}

const StrategyDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showVersionModal, setShowVersionModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentVersionDetail, setCurrentVersionDetail] = useState<VersionDetail | null>(null);
  const [strategyData, setStrategyData] = useState<StrategyData>({
    name: '沪深300价值策略',
    type: '核心仓',
    created: '2024-01-15',
    updated: '2024-03-20',
    version: 'v3.2',
    description: '这是一个基于沪深300指数的价值投资策略，主要投资于沪深300指数中具有价值属性的成分股。'
  });

  // 图表引用
  const allocationChartRef = useRef<any>(null);
  const performanceChartRef = useRef<any>(null);

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 策略详情';
    return () => { document.title = originalTitle; };
  }, []);

  // 加载策略数据
  useEffect(() => {
    const strategyId = searchParams.get('strategyId') || 'strategy1';
    
    // 模拟策略数据
    const mockStrategies: Record<string, StrategyData> = {
      'strategy1': {
        name: '沪深300价值策略',
        type: '核心仓',
        created: '2024-01-15',
        updated: '2024-03-20',
        version: 'v3.2',
        description: '这是一个基于沪深300指数的价值投资策略，主要投资于沪深300指数中具有价值属性的成分股。'
      },
      'strategy2': {
        name: '科技成长策略',
        type: '战术仓',
        created: '2024-02-10',
        updated: '2024-03-18',
        version: 'v1.1',
        description: '专注于科技板块的成长型ETF投资策略，追求长期成长收益。'
      }
    };

    const strategy = mockStrategies[strategyId];
    if (strategy) {
      setStrategyData(strategy);
    }
  }, [searchParams]);

  // 初始化图表
  useEffect(() => {
    // 确保Chart.js已加载
    const loadChartJS = async () => {
      if (typeof window.Chart === 'undefined') {
        const { Chart } = await import('chart.js');
        window.Chart = Chart;
      }

      // 仓位分配饼图
      const allocationCtx = document.querySelector('#allocationChart')?.getContext('2d');
      if (allocationCtx && !allocationChartRef.current) {
        allocationChartRef.current = new window.Chart(allocationCtx, {
          type: 'doughnut',
          data: {
            labels: ['沪深300ETF', '中证500ETF', '创业板ETF', '现金储备'],
            datasets: [{
              data: [38, 29, 18, 15],
              backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#06B6D4'],
              borderWidth: 0,
              cutout: '70%'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  padding: 20,
                  usePointStyle: true
                }
              }
            }
          }
        });
      }

      // 策略表现折线图
      const performanceCtx = document.querySelector('#performanceChart')?.getContext('2d');
      if (performanceCtx && !performanceChartRef.current) {
        performanceChartRef.current = new window.Chart(performanceCtx, {
          type: 'line',
          data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
            datasets: [{
              label: '策略收益',
              data: [0, 2.1, 4.5, 7.8, 10.2, 12.5],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderWidth: 2,
              fill: true,
              tension: 0.4
            }, {
              label: '沪深300',
              data: [0, 1.5, 3.2, 5.8, 8.1, 9.8],
              borderColor: '#6B7280',
              backgroundColor: 'rgba(107, 114, 128, 0.1)',
              borderWidth: 2,
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function(value: any) {
                    return value + '%';
                  }
                }
              }
            }
          }
        });
      }
    };

    loadChartJS();

    // 清理函数
    return () => {
      if (allocationChartRef.current) {
        allocationChartRef.current.destroy();
        allocationChartRef.current = null;
      }
      if (performanceChartRef.current) {
        performanceChartRef.current.destroy();
        performanceChartRef.current = null;
      }
    };
  }, []);

  // 处理侧边栏切换
  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // 处理编辑策略
  const handleEditStrategy = () => {
    const strategyId = searchParams.get('strategyId') || 'strategy1';
    navigate(`/edit-strategy?strategyId=${strategyId}`);
  };

  // 处理删除策略
  const handleDeleteStrategy = () => {
    setShowDeleteModal(true);
  };

  // 确认删除
  const handleConfirmDelete = () => {
    const strategyId = searchParams.get('strategyId') || 'strategy1';
    console.log('删除策略:', strategyId);
    setShowDeleteModal(false);
    navigate('/strategies');
  };

  // 查看全部交易
  const handleViewAllTrades = () => {
    const strategyId = searchParams.get('strategyId') || 'strategy1';
    navigate(`/journal?strategyId=${strategyId}`);
  };

  // 查看版本详情
  const handleViewVersion = (version: string) => {
    const versionData: Record<string, VersionDetail> = {
      '3.2': {
        title: '版本 v3.2 (2024-03-20)',
        changes: [
          '调整估值买入阈值从PE < 11 改为 PE < 10',
          '优化趋势信号判断逻辑',
          '增加情绪指标权重',
          '修复了仓位计算的小bug'
        ]
      },
      '3.1': {
        title: '版本 v3.1 (2024-02-15)',
        changes: [
          '增加创业板ETF配置比例至20%',
          '调整现金储备比例至10%',
          '完善策略说明文档'
        ]
      },
      '3.0': {
        title: '版本 v3.0 (2024-01-20)',
        changes: [
          '初始版本发布',
          '建立基础策略框架',
          '设置核心ETF配置'
        ]
      }
    };

    const data = versionData[version] || { title: `版本 v${version}`, changes: ['无详细信息'] };
    setCurrentVersionDetail(data);
    setShowVersionModal(true);
  };

  // 版本历史数据
  const versionHistoryData: VersionHistoryItem[] = [
    {
      version: 'v3.2',
      date: '2024-03-20 14:30',
      author: '投资者',
      changes: '调整估值阈值，优化买入信号'
    },
    {
      version: 'v3.1',
      date: '2024-02-15 09:15',
      author: '投资者',
      changes: '增加创业板ETF配置比例'
    },
    {
      version: 'v3.0',
      date: '2024-01-20 16:45',
      author: '投资者',
      changes: '初始版本，建立基础策略框架'
    }
  ];

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
                src="https://s.coze.cn/image/tIuDEKAJnhA/" 
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
            className={`${styles.navItem} ${styles.navItemActive} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium`}
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
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
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
            <nav className="text-sm text-text-secondary mb-2">
              <Link to="/strategies" className="hover:text-primary">策略库</Link>
              <span className="mx-2">/</span>
              <span>{strategyData.name}</span>
            </nav>
            <h2 className="text-2xl font-bold text-text-primary">{strategyData.name}</h2>
            <p className="text-text-secondary mt-1">详细策略信息与执行历史</p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleEditStrategy}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600"
            >
              <i className="fas fa-edit"></i>
              <span className="text-sm font-medium">编辑策略</span>
            </button>
            <button 
              onClick={handleDeleteStrategy}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-border-light rounded-lg hover:bg-gray-50"
            >
              <i className="fas fa-trash text-danger"></i>
              <span className="text-sm font-medium text-text-primary">删除策略</span>
            </button>
          </div>
        </div>

        {/* 策略基本信息 */}
        <section className="bg-white rounded-xl shadow-card p-6 mb-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">基本信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-tag text-primary"></i>
              </div>
              <div>
                <p className="text-sm text-text-secondary">策略类型</p>
                <p className="font-medium text-text-primary">{strategyData.type}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-calendar text-secondary"></i>
              </div>
              <div>
                <p className="text-sm text-text-secondary">创建时间</p>
                <p className="font-medium text-text-primary">{strategyData.created}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-tertiary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-sync-alt text-tertiary"></i>
              </div>
              <div>
                <p className="text-sm text-text-secondary">最后更新</p>
                <p className="font-medium text-text-primary">{strategyData.updated}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-info bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-code-branch text-info"></i>
              </div>
              <div>
                <p className="text-sm text-text-secondary">版本号</p>
                <p className="font-medium text-text-primary">{strategyData.version}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 策略规则说明 */}
        <section className="bg-white rounded-xl shadow-card p-6 mb-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">策略规则说明</h3>
          <div className="prose max-w-none">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-text-primary leading-relaxed">
                这是一个基于沪深300指数的价值投资策略，主要投资于沪深300指数中具有价值属性的成分股。策略采用以下规则：
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-text-primary">
                <li>当沪深300指数PE低于10倍时，开始分批建仓</li>
                <li>当PE在10-12倍时，维持现有仓位</li>
                <li>当PE高于12倍时，开始分批减仓</li>
                <li>单只ETF仓位不超过总仓位的15%</li>
                <li>每月进行一次调仓，根据估值变化调整仓位</li>
              </ul>
              <p className="text-text-primary leading-relaxed mt-3">
                该策略旨在通过价值投资理念，在市场低估时买入，高估时卖出，实现长期稳定的投资回报。
              </p>
            </div>
          </div>
        </section>

        {/* 信号阈值配置 */}
        <section className="bg-white rounded-xl shadow-card p-6 mb-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">信号阈值配置</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border-light rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <i className="fas fa-chart-pie text-info"></i>
                <h4 className="font-medium text-text-primary">估值信号</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">买入阈值:</span>
                  <span className="font-medium text-success">PE {'<'} 10</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">持有阈值:</span>
                  <span className="font-medium text-warning">10 {'≤'} PE {'≤'} 12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">卖出阈值:</span>
                  <span className="font-medium text-danger">PE {'>'} 12</span>
                </div>
              </div>
            </div>
            <div className="border border-border-light rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <i className="fas fa-chart-area text-tertiary"></i>
                <h4 className="font-medium text-text-primary">趋势信号</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">上升趋势:</span>
                  <span className="font-medium text-success">MA20 {'>'} MA60</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">下降趋势:</span>
                  <span className="font-medium text-danger">MA20 {'<'} MA60</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">横盘趋势:</span>
                  <span className="font-medium text-warning">±1% 波动</span>
                </div>
              </div>
            </div>
            <div className="border border-border-light rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <i className="fas fa-heart text-danger"></i>
                <h4 className="font-medium text-text-primary">情绪信号</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">极度恐慌:</span>
                  <span className="font-medium text-success">恐惧指数 {'>'} 80</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">中性情绪:</span>
                  <span className="font-medium text-warning">40-60</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">极度贪婪:</span>
                  <span className="font-medium text-danger">恐惧指数 {'<'} 20</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 仓位比例设置 */}
        <section className="bg-white rounded-xl shadow-card p-6 mb-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">仓位比例设置</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-text-primary mb-3">目标仓位分配</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-medium text-text-primary">沪深300ETF (510300)</span>
                  </div>
                  <span className="font-semibold text-text-primary">40%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="font-medium text-text-primary">中证500ETF (510500)</span>
                  </div>
                  <span className="font-semibold text-text-primary">30%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-tertiary rounded-full"></div>
                    <span className="font-medium text-text-primary">创业板ETF (159915)</span>
                  </div>
                  <span className="font-semibold text-text-primary">20%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-info rounded-full"></div>
                    <span className="font-medium text-text-primary">现金储备</span>
                  </div>
                  <span className="font-semibold text-text-primary">10%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-3">当前实际仓位</h4>
              <div className="relative h-48">
                <canvas id="allocationChart"></canvas>
              </div>
            </div>
          </div>
        </section>

        {/* 策略执行历史 */}
        <section className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text-primary">策略执行历史</h3>
            <button 
              onClick={handleViewAllTrades}
              className="text-primary hover:text-blue-600 text-sm font-medium"
            >
              查看全部交易 <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-text-primary mb-3">历史表现</h4>
              <div className="relative h-64">
                <canvas id="performanceChart"></canvas>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-3">关键指标</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-success">+12.5%</p>
                  <p className="text-sm text-text-secondary">总收益率</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-primary">85%</p>
                  <p className="text-sm text-text-secondary">策略遵守率</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-tertiary">18</p>
                  <p className="text-sm text-text-secondary">交易次数</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-info">6</p>
                  <p className="text-sm text-text-secondary">连续盈利月数</p>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="font-medium text-text-primary mb-2">最近交易</h5>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm p-2 hover:bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <span className="px-2 py-1 bg-success bg-opacity-10 text-success rounded text-xs">买入</span>
                      <span className="text-text-primary">510300</span>
                    </div>
                    <span className="text-text-secondary">2024-03-15</span>
                  </div>
                  <div className="flex items-center justify-between text-sm p-2 hover:bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <span className="px-2 py-1 bg-danger bg-opacity-10 text-danger rounded text-xs">卖出</span>
                      <span className="text-text-primary">159915</span>
                    </div>
                    <span className="text-text-secondary">2024-03-10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm p-2 hover:bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <span className="px-2 py-1 bg-success bg-opacity-10 text-success rounded text-xs">买入</span>
                      <span className="text-text-primary">510500</span>
                    </div>
                    <span className="text-text-secondary">2024-03-05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 版本历史 */}
        <section className="bg-white rounded-xl shadow-card p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">版本历史</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">版本号</th>
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">更新时间</th>
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">更新人</th>
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">变更说明</th>
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">操作</th>
                </tr>
              </thead>
              <tbody>
                {versionHistoryData.map((item, index) => (
                  <tr key={index} className={`${styles.versionItem} border-b border-border-light`}>
                    <td className="py-3 px-4 font-medium text-text-primary">{item.version}</td>
                    <td className="py-3 px-4 text-text-secondary">{item.date}</td>
                    <td className="py-3 px-4 text-text-secondary">{item.author}</td>
                    <td className="py-3 px-4 text-text-secondary">{item.changes}</td>
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => handleViewVersion(item.version.replace('v', ''))}
                        className="text-primary hover:text-blue-600 text-sm"
                      >
                        查看
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* 版本详情模态框 */}
      {showVersionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-96 overflow-y-auto">
              <div className="p-6 border-b border-border-light">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-text-primary">版本详情</h3>
                  <button 
                    onClick={() => setShowVersionModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="p-6">
                {currentVersionDetail && (
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">{currentVersionDetail.title}</h4>
                    <div className="space-y-2">
                      {currentVersionDetail.changes.map((change, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <i className="fas fa-circle text-primary text-xs mt-1.5"></i>
                          <span className="text-text-secondary">{change}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 删除确认模态框 */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-danger bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-exclamation-triangle text-danger text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">确认删除</h3>
                  <p className="text-text-secondary mb-6">删除后将无法恢复，确定要删除这个策略吗？</p>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setShowDeleteModal(false)}
                      className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                      取消
                    </button>
                    <button 
                      onClick={handleConfirmDelete}
                      className="flex-1 px-4 py-2 bg-danger text-white rounded-lg hover:bg-red-600"
                    >
                      删除
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StrategyDetailPage;

