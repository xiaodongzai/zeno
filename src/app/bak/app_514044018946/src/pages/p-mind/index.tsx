

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface MindNote {
  id: number;
  date: string;
  score: number;
  notes: string;
}

const MindPage: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalScore, setModalScore] = useState(7);
  const [modalNotes, setModalNotes] = useState('');
  const [todayScore, setTodayScore] = useState(8.2);
  const [todayNotes, setTodayNotes] = useState('市场波动较大，但保持了冷静，坚持了既定策略。');
  const [impulseAlert, setImpulseAlert] = useState(true);
  const [emotionAlert, setEmotionAlert] = useState(true);
  const [coolingAlert, setCoolingAlert] = useState(false);
  const [notesSearch, setNotesSearch] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const [mindNotes, setMindNotes] = useState<MindNote[]>([
    {
      id: 1,
      date: '2024-01-15',
      score: 8.2,
      notes: '市场波动较大，但保持了冷静，坚持了既定策略。'
    },
    {
      id: 2,
      date: '2024-01-14',
      score: 7.8,
      notes: '今天有些焦虑，担心市场回调，但还是按照计划操作。'
    },
    {
      id: 3,
      date: '2024-01-13',
      score: 9.0,
      notes: '心态很好，完全按照策略执行，没有受到情绪影响。'
    },
    {
      id: 4,
      date: '2024-01-12',
      score: 6.5,
      notes: '有点冲动，差点进行了计划外的交易，及时克制住了。'
    },
    {
      id: 5,
      date: '2024-01-11',
      score: 8.5,
      notes: '冷静分析市场，做出了理性的投资决策。'
    }
  ]);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 心理追踪';
    return () => { document.title = originalTitle; };
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const generateHeatmap = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 29);

    const scores = [8.2, 7.8, 9.0, 6.5, 8.5, 7.2, 8.8, 9.2, 7.0, 6.8, 8.0, 8.5, 7.5, 9.1, 8.3, 7.7, 8.9, 9.4, 7.1, 6.9, 8.1, 8.6, 7.6, 9.2, 8.4, 7.8, 9.0, 6.6, 8.2, 7.9];

    const cells = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const score = scores[i] || null;
      
      let colorClass = 'bg-gray-200';
      if (score) {
        if (score >= 9) colorClass = 'bg-blue-200';
        else if (score >= 7) colorClass = 'bg-green-200';
        else if (score >= 5) colorClass = 'bg-yellow-200';
        else if (score >= 3) colorClass = 'bg-orange-200';
        else colorClass = 'bg-red-200';
      } else {
        colorClass = 'bg-gray-100';
      }
      
      cells.push(
        <div
          key={i}
          className={`${styles.heatmapCell} w-8 h-8 rounded cursor-pointer relative ${colorClass}`}
        >
          {score && (
            <div className="absolute -top-10 -left-12 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {date.toLocaleDateString()} - 评分: {score}
            </div>
          )}
        </div>
      );
    }
    return cells;
  };

  const handleShowModal = () => {
    setModalScore(7);
    setModalNotes('');
    setEditingNoteId(null);
    setIsModalVisible(true);
  };

  const handleEditNote = (noteId: number) => {
    const note = mindNotes.find(n => n.id === noteId);
    if (note) {
      setModalScore(note.score);
      setModalNotes(note.notes);
      setEditingNoteId(noteId);
      setIsModalVisible(true);
    }
  };

  const handleDeleteNote = (noteId: number) => {
    if (confirm('确定要删除这条笔记吗？')) {
      setMindNotes(prev => prev.filter(n => n.id !== noteId));
    }
  };

  const handleSaveModal = () => {
    const today = new Date().toISOString().split('T')[0];
    
    if (editingNoteId) {
      setMindNotes(prev => 
        prev.map(note => 
          note.id === editingNoteId 
            ? { ...note, score: modalScore, notes: modalNotes }
            : note
        )
      );
    } else {
      const existingIndex = mindNotes.findIndex(n => n.date === today);
      if (existingIndex !== -1) {
        setMindNotes(prev => 
          prev.map((note, index) => 
            index === existingIndex 
              ? { ...note, score: modalScore, notes: modalNotes }
              : note
          )
        );
        setTodayScore(modalScore);
        setTodayNotes(modalNotes);
      } else {
        setMindNotes(prev => [
          {
            id: Math.max(...prev.map(n => n.id)) + 1,
            date: today,
            score: modalScore,
            notes: modalNotes
          },
          ...prev
        ]);
        setTodayScore(modalScore);
        setTodayNotes(modalNotes);
      }
    }
    
    setIsModalVisible(false);
  };

  const handleSaveTodayScore = () => {
    const today = new Date().toISOString().split('T')[0];
    const existingIndex = mindNotes.findIndex(n => n.date === today);
    
    if (existingIndex !== -1) {
      setMindNotes(prev => 
        prev.map((note, index) => 
          index === existingIndex 
            ? { ...note, score: todayScore, notes: todayNotes }
            : note
        )
      );
    } else {
      setMindNotes(prev => [
        {
          id: Math.max(...prev.map(n => n.id)) + 1,
          date: today,
          score: todayScore,
          notes: todayNotes
        },
        ...prev
      ]);
    }
  };

  const handleSaveAlertSettings = () => {
    console.log('保存提醒设置:', { impulseAlert, emotionAlert, coolingAlert });
    // 这里可以添加保存到后端的逻辑
  };

  const handleNotesSearch = (value: string) => {
    setNotesSearch(value);
    // 这里可以实现搜索过滤逻辑
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
                src="https://s.coze.cn/image/k22xPxoVQl4/" 
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
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
          >
            <i className="fas fa-chart-bar w-5"></i>
            {!isSidebarCollapsed && <span>复盘系统</span>}
          </Link>
          <div className={`${styles.navItem} ${styles.navItemActive} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium`}>
            <i className="fas fa-heart w-5"></i>
            {!isSidebarCollapsed && <span>心理追踪</span>}
          </div>
        </nav>
      </aside>

      {/* 主内容区 */}
      <main className={`${isSidebarCollapsed ? 'ml-16' : 'ml-64'} mt-16 p-6 min-h-screen`}>
        {/* 页面头部 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">心理追踪</h2>
            <p className="text-text-secondary mt-1">记录和分析投资心态变化</p>
          </div>
          <button 
            onClick={handleShowModal}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <i className="fas fa-plus"></i>
            <span className="text-sm font-medium">今日心态打分</span>
          </button>
        </div>

        {/* 心态热力图 */}
        <section className="bg-white rounded-xl shadow-card p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text-primary">心态热力图</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">最近30天</span>
                <i className="fas fa-calendar-alt text-primary"></i>
              </div>
            </div>
          </div>
          
          {/* 热力图日历 */}
          <div className="mb-6">
            <div className="grid grid-cols-7 gap-1 mb-2">
              <div className="text-center text-sm font-medium text-text-secondary py-2">日</div>
              <div className="text-center text-sm font-medium text-text-secondary py-2">一</div>
              <div className="text-center text-sm font-medium text-text-secondary py-2">二</div>
              <div className="text-center text-sm font-medium text-text-secondary py-2">三</div>
              <div className="text-center text-sm font-medium text-text-secondary py-2">四</div>
              <div className="text-center text-sm font-medium text-text-secondary py-2">五</div>
              <div className="text-center text-sm font-medium text-text-secondary py-2">六</div>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {generateHeatmap()}
            </div>
          </div>
          
          {/* 图例 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <span className="text-sm text-text-secondary">未记录</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-200 rounded"></div>
                <span className="text-sm text-text-secondary">较差 (1-2)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-200 rounded"></div>
                <span className="text-sm text-text-secondary">一般 (3-4)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-200 rounded"></div>
                <span className="text-sm text-text-secondary">良好 (5-6)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-200 rounded"></div>
                <span className="text-sm text-text-secondary">优秀 (7-8)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-200 rounded"></div>
                <span className="text-sm text-text-secondary">极佳 (9-10)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 今日心态打分和异常提醒设置 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 今日心态打分 */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">今日心态</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{todayScore}</div>
                <div className="text-sm text-text-secondary">今日评分</div>
                <div className="text-sm text-success mt-1">冷静且理性</div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-medium text-text-primary">情绪状态</label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">冷静</span>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={todayScore}
                    onChange={(e) => setTodayScore(parseFloat(e.target.value))}
                    className={`w-32 ${styles.emotionSlider}`}
                  />
                  <span className="text-sm text-text-secondary">冲动</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="today-notes" className="block text-sm font-medium text-text-primary">今日笔记</label>
                <textarea 
                  id="today-notes" 
                  rows={3}
                  value={todayNotes}
                  onChange={(e) => setTodayNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="记录今天的投资心态和感受..."
                />
              </div>
              
              <button 
                onClick={handleSaveTodayScore}
                className="w-full py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                保存今日心态
              </button>
            </div>
          </div>

          {/* 异常提醒设置 */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">异常提醒设置</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text-primary">冲动交易提醒</p>
                  <p className="text-sm text-text-secondary">当检测到可能的冲动交易时提醒</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={impulseAlert}
                    onChange={(e) => setImpulseAlert(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text-primary">情绪波动提醒</p>
                  <p className="text-sm text-text-secondary">当心态评分连续下降时提醒</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={emotionAlert}
                    onChange={(e) => setEmotionAlert(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text-primary">交易冷却提醒</p>
                  <p className="text-sm text-text-secondary">短时间内多次交易时提醒</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={coolingAlert}
                    onChange={(e) => setCoolingAlert(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={handleSaveAlertSettings}
                  className="w-full py-2 bg-gray-100 text-text-primary rounded-lg hover:bg-gray-200 transition-colors"
                >
                  保存设置
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 心理笔记列表 */}
        <section className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text-primary">心理笔记</h3>
            <div className="flex items-center space-x-3">
              <input 
                type="text" 
                placeholder="搜索笔记内容..."
                value={notesSearch}
                onChange={(e) => handleNotesSearch(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button 
                onClick={handleShowModal}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">日期</th>
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">心态打分</th>
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">笔记内容</th>
                  <th className="text-left py-3 px-4 font-medium text-text-secondary">操作</th>
                </tr>
              </thead>
              <tbody>
                {mindNotes.map(note => (
                  <tr key={note.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{note.date}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-green-800">{note.score}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{note.notes}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEditNote(note.id)}
                          className="text-primary hover:text-blue-600"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          onClick={() => handleDeleteNote(note.id)}
                          className="text-danger hover:text-red-600"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* 分页 */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-text-secondary">
              显示 1-10 条，共 25 条记录
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="px-3 py-1 bg-primary text-white rounded-lg">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 今日心态打分弹窗 */}
      {isModalVisible && (
        <div className="fixed inset-0 z-50">
          <div className={`${styles.modalBackdrop} absolute inset-0`}></div>
          <div className="relative flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-text-primary">今日心态打分</h3>
                  <button 
                    onClick={() => setIsModalVisible(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{modalScore}</div>
                    <div className="text-sm text-text-secondary">当前评分</div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-text-primary">情绪状态</label>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">冷静</span>
                      <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value={modalScore}
                        onChange={(e) => setModalScore(parseFloat(e.target.value))}
                        className={`w-32 ${styles.emotionSlider}`}
                      />
                      <span className="text-sm text-text-secondary">冲动</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="modal-notes" className="block text-sm font-medium text-text-primary">今日笔记</label>
                    <textarea 
                      id="modal-notes" 
                      rows={3}
                      value={modalNotes}
                      onChange={(e) => setModalNotes(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="记录今天的投资心态和感受..."
                    />
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <button 
                      onClick={() => setIsModalVisible(false)}
                      className="flex-1 py-2 border border-gray-300 text-text-primary rounded-lg hover:bg-gray-50"
                    >
                      取消
                    </button>
                    <button 
                      onClick={handleSaveModal}
                      className="flex-1 py-2 bg-primary text-white rounded-lg hover:bg-blue-600"
                    >
                      保存
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

export default MindPage;

