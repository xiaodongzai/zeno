

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

declare global {
  interface Window {
    Chart: any;
  }
}

const Dashboard: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const strategyChartRef = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 仪表盘';
    return () => { document.title = originalTitle; };
  }, []);

  useEffect(() => {
    // 策略分布饼图
    const ctx = document.querySelector('#strategyChart')?.getContext('2d');
    if (ctx) {
      strategyChartRef.current = new window.Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['核心仓', '战术仓'],
          datasets: [{
            data: [70, 30],
            backgroundColor: ['#3B82F6', '#10B981'],
            borderWidth: 0,
            cutout: '70%'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    return () => {
      if (strategyChartRef.current) {
        strategyChartRef.current.destroy();
        strategyChartRef.current = null;
      }
    };
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handleQuickAddTrade = () => {
    console.log('打开新增交易弹窗');
    alert('打开新增交易弹窗');
  };

  const handleNotificationClick = () => {
    console.log('打开通知面板');
  };

  const handleUserMenuClick = () => {
    console.log('打开用户菜单');
  };

  const handleGlobalSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      console.log('执行搜索:', target.value);
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
                onKeyPress={handleGlobalSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          
          {/* 右侧操作区 */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleNotificationClick}
              className="relative p-2 rounded-lg hover:bg-gray-100"
            >
              <i className="fas fa-bell text-gray-600"></i>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-danger rounded-full"></span>
            </button>
            <div 
              onClick={handleUserMenuClick}
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2"
            >
              <img 
                src="https://s.coze.cn/image/7hbj9nra03M/" 
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
            className={`${styles.navItem} ${styles.navItemActive} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium`}
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
          <Link 
            to="/mind" 
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
          >
            <i className="fas fa-heart w-5"></i>
            {!isSidebarCollapsed && <span>心理追踪</span>}
          </Link>
          <Link 
            to="/etf-pool-management" 
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
          >
            <i className="fas fa-tint w-5"></i>
            {!isSidebarCollapsed && <span>ETF池子管理</span>}
          </Link>
        </nav>
      </aside>

      {/* 主内容区 */}
      <main className={`${isSidebarCollapsed ? 'ml-16' : 'ml-64'} mt-16 p-6 min-h-screen`}>
        {/* 页面头部 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">仪表盘</h2>
            <p className="text-text-secondary mt-1">投资概览与市场信号</p>
          </div>
          <button 
            onClick={handleRefresh}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-border-light rounded-lg hover:bg-gray-50"
          >
            <i className={`fas fa-sync-alt text-primary ${isRefreshing ? 'fa-spin' : ''}`}></i>
            <span className="text-sm font-medium text-text-primary">刷新数据</span>
          </button>
        </div>

        {/* 资产总览卡片 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`bg-white rounded-xl shadow-card p-6 ${styles.cardHover}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">总资产</p>
                <p className="text-2xl font-bold text-text-primary mt-1">¥128,560</p>
                <p className="text-sm text-success mt-1">
                  <i className="fas fa-arrow-up"></i> +5.2%
                </p>
              </div>
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-wallet text-primary text-xl"></i>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-xl shadow-card p-6 ${styles.cardHover}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">已投入</p>
                <p className="text-2xl font-bold text-text-primary mt-1">¥122,200</p>
                <p className="text-sm text-text-secondary mt-1">
                  累计投入
                </p>
              </div>
              <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-piggy-bank text-secondary text-xl"></i>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-xl shadow-card p-6 ${styles.cardHover}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">当前价值</p>
                <p className="text-2xl font-bold text-text-primary mt-1">¥128,560</p>
                <p className="text-sm text-text-secondary mt-1">
                  实时估值
                </p>
              </div>
              <div className="w-12 h-12 bg-tertiary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-tertiary text-xl"></i>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-xl shadow-card p-6 ${styles.cardHover}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">总盈亏</p>
                <p className="text-2xl font-bold text-success mt-1">+¥6,360</p>
                <p className="text-sm text-success mt-1">
                  <i className="fas fa-arrow-up"></i> +5.2%
                </p>
              </div>
              <div className="w-12 h-12 bg-success bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-trending-up text-success text-xl"></i>
              </div>
            </div>
          </div>
        </section>

        {/* 策略分布图和信号面板 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* 策略分布图 */}
          <div 
            onClick={() => navigate('/strategies')}
            className="lg:col-span-1 bg-white rounded-xl shadow-card p-6 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">策略分布</h3>
            <div className="relative h-64">
              <canvas id="strategyChart"></canvas>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm text-text-secondary">核心仓</span>
                </div>
                <span className="text-sm font-medium text-text-primary">70%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm text-text-secondary">战术仓</span>
                </div>
                <span className="text-sm font-medium text-text-primary">30%</span>
              </div>
            </div>
          </div>

          {/* 信号面板 */}
          <div 
            onClick={() => navigate('/strategies')}
            className="lg:col-span-2 bg-white rounded-xl shadow-card p-6 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">市场信号</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-info bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-pie text-info"></i>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">估值信号</p>
                    <p className="text-sm text-text-secondary">当前市场估值水平</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-success">合理</p>
                  <p className="text-sm text-success">
                    <i className="fas fa-arrow-up"></i> 7.2
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-tertiary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-area text-tertiary"></i>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">趋势信号</p>
                    <p className="text-sm text-text-secondary">市场整体趋势</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-success">上升</p>
                  <p className="text-sm text-success">
                    <i className="fas fa-arrow-up"></i> 8.5
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-danger bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-heart text-danger"></i>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">情绪信号</p>
                    <p className="text-sm text-text-secondary">市场情绪指标</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-warning">谨慎</p>
                  <p className="text-sm text-warning">
                    <i className="fas fa-minus"></i> 5.1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 心理状态提醒和快捷操作 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* 心理状态提醒 */}
          <div 
            onClick={() => navigate('/mind')}
            className="lg:col-span-1 bg-white rounded-xl shadow-card p-6 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">心理状态</h3>
            <div className="space-y-4">
              <div className="p-4 bg-success bg-opacity-10 rounded-lg border-l-4 border-success">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="fas fa-check-circle text-success"></i>
                  <span className="font-medium text-success">状态良好</span>
                </div>
                <p className="text-sm text-text-secondary">今日心态评分：8.2/10</p>
                <p className="text-sm text-text-secondary mt-1">冷静且理性</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-text-primary mb-2">最近7天趋势</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">周一</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">周二</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">周三</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 快捷操作区 */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">快捷操作</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button 
                onClick={handleQuickAddTrade}
                className="p-4 bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-lg hover:bg-primary hover:bg-opacity-10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-plus text-primary"></i>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-text-primary">快速交易</p>
                    <p className="text-sm text-text-secondary">记录新交易</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => navigate('/review')}
                className="p-4 bg-secondary bg-opacity-5 border border-secondary border-opacity-20 rounded-lg hover:bg-secondary hover:bg-opacity-10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-bar text-secondary"></i>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-text-primary">查看复盘</p>
                    <p className="text-sm text-text-secondary">分析投资表现</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => navigate('/strategies')}
                className="p-4 bg-tertiary bg-opacity-5 border border-tertiary border-opacity-20 rounded-lg hover:bg-tertiary hover:bg-opacity-10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-tertiary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-lightbulb text-tertiary"></i>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-text-primary">策略库</p>
                    <p className="text-sm text-text-secondary">管理投资策略</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => navigate('/portfolio')}
                className="p-4 bg-info bg-opacity-5 border border-info border-opacity-20 rounded-lg hover:bg-info hover:bg-opacity-10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-info bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-briefcase text-info"></i>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-text-primary">仓位追踪</p>
                    <p className="text-sm text-text-secondary">查看持仓情况</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => navigate('/journal')}
                className="p-4 bg-danger bg-opacity-5 border border-danger border-opacity-20 rounded-lg hover:bg-danger hover:bg-opacity-10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-danger bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-book text-danger"></i>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-text-primary">交易日志</p>
                    <p className="text-sm text-text-secondary">查看交易记录</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => navigate('/mind')}
                className="p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-heart text-purple-600"></i>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-text-primary">心理追踪</p>
                    <p className="text-sm text-text-secondary">记录心态变化</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

