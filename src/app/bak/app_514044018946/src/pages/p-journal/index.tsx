

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface TradeRecord {
  id: string;
  date: string;
  etfCode: string;
  etfName: string;
  action: 'buy' | 'sell';
  amount: number;
  quantity: number;
  price: number;
  reason: string;
  strategy: string;
  strategyName: string;
  emotion: number;
  reviewed: boolean;
}

type SortField = 'date' | 'etf' | 'action' | 'amount' | 'strategy' | 'emotion' | 'reviewed';
type SortDirection = 'asc' | 'desc';

const JournalPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 模拟交易数据
  const mockTrades: TradeRecord[] = [
    {
      id: 'trade-001',
      date: '2024-01-15 14:30:25',
      etfCode: '510300',
      etfName: '沪深300ETF',
      action: 'buy',
      amount: 15000,
      quantity: 1485,
      price: 10.10,
      reason: '市场回调，估值合理',
      strategy: 'core-strategy',
      strategyName: '核心策略',
      emotion: 4,
      reviewed: true
    },
    {
      id: 'trade-002',
      date: '2024-01-14 09:45:12',
      etfCode: '510500',
      etfName: '中证500ETF',
      action: 'sell',
      amount: 8000,
      quantity: 785,
      price: 10.19,
      reason: '达到目标收益',
      strategy: 'tactical-strategy',
      strategyName: '战术策略',
      emotion: 5,
      reviewed: true
    },
    {
      id: 'trade-003',
      date: '2024-01-13 15:20:30',
      etfCode: '159915',
      etfName: '创业板ETF',
      action: 'buy',
      amount: 12000,
      quantity: 1180,
      price: 10.17,
      reason: '技术突破，趋势向好',
      strategy: 'tactical-strategy',
      strategyName: '战术策略',
      emotion: 3,
      reviewed: false
    },
    {
      id: 'trade-004',
      date: '2024-01-12 10:15:45',
      etfCode: '510050',
      etfName: '上证50ETF',
      action: 'buy',
      amount: 20000,
      quantity: 1965,
      price: 10.18,
      reason: '价值投资，长期持有',
      strategy: 'value-investing',
      strategyName: '价值投资',
      emotion: 4,
      reviewed: true
    },
    {
      id: 'trade-005',
      date: '2024-01-11 13:50:18',
      etfCode: '510300',
      etfName: '沪深300ETF',
      action: 'sell',
      amount: 10000,
      quantity: 985,
      price: 10.15,
      reason: '仓位调整',
      strategy: 'core-strategy',
      strategyName: '核心策略',
      emotion: 2,
      reviewed: false
    }
  ];

  // 状态管理
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [etfFilter, setEtfFilter] = useState('');
  const [strategyFilter, setStrategyFilter] = useState('');
  const [reviewStatusFilter, setReviewStatusFilter] = useState('');
  const [emotionFilter, setEmotionFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [selectedTradeIds, setSelectedTradeIds] = useState<string[]>([]);

  // 筛选后的数据
  const filteredTrades = React.useMemo(() => {
    let filtered = [...mockTrades];

    // 应用搜索筛选
    if (searchTerm) {
      filtered = filtered.filter(trade =>
        trade.etfCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trade.etfName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trade.strategyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 应用ETF筛选
    if (etfFilter) {
      filtered = filtered.filter(trade => trade.etfCode === etfFilter);
    }

    // 应用策略筛选
    if (strategyFilter) {
      filtered = filtered.filter(trade => trade.strategy === strategyFilter);
    }

    // 应用复盘状态筛选
    if (reviewStatusFilter) {
      filtered = filtered.filter(trade =>
        (reviewStatusFilter === 'reviewed' && trade.reviewed) ||
        (reviewStatusFilter === 'pending' && !trade.reviewed)
      );
    }

    // 应用情绪筛选
    if (emotionFilter) {
      filtered = filtered.filter(trade => trade.emotion === parseInt(emotionFilter));
    }

    // 应用排序
    filtered.sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      if (sortField === 'date') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [mockTrades, searchTerm, etfFilter, strategyFilter, reviewStatusFilter, emotionFilter, sortField, sortDirection]);

  // 分页数据
  const totalPages = Math.ceil(filteredTrades.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageTrades = filteredTrades.slice(startIndex, endIndex);

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 交易日志';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // 处理侧边栏切换
  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // 处理排序
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // 处理全选
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTradeIds(currentPageTrades.map(trade => trade.id));
    } else {
      setSelectedTradeIds([]);
    }
  };

  // 处理单选
  const handleSelectTrade = (tradeId: string, checked: boolean) => {
    if (checked) {
      setSelectedTradeIds([...selectedTradeIds, tradeId]);
    } else {
      setSelectedTradeIds(selectedTradeIds.filter(id => id !== tradeId));
    }
  };

  // 处理分页
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 处理页面大小变化
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // 生成情绪星级
  const generateEmotionStars = (score: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star text-xs ${i < score ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  // 处理策略链接点击
  const handleStrategyClick = (strategyId: string) => {
    navigate(`/strategy-detail?strategyId=${strategyId}`);
  };

  // 处理新增交易
  const handleAddTrade = () => {
    navigate('/add-trade');
  };

  // 处理编辑交易
  const handleEditTrade = (tradeId: string) => {
    console.log('编辑交易:', tradeId);
    // 实际实现中会打开编辑弹窗
  };

  // 处理删除交易
  const handleDeleteTrade = (tradeId: string) => {
    if (confirm('确定要删除这笔交易吗？')) {
      console.log('删除交易:', tradeId);
      // 实际实现中会处理删除逻辑
    }
  };

  // 处理复盘交易
  const handleReviewTrade = (tradeId: string) => {
    console.log('复盘交易:', tradeId);
    // 实际实现中会打开复盘模板弹窗
  };

  // 处理批量导出
  const handleBatchExport = () => {
    console.log('批量导出交易记录');
    // 实际实现中会处理导出逻辑
  };

  // 渲染排序图标
  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <i className="fas fa-sort ml-1"></i>;
    }
    return <i className={`fas fa-sort-${sortDirection} ml-1`}></i>;
  };

  // 渲染页码
  const renderPageNumbers = () => {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 border border-border-light rounded ${
            i === currentPage
              ? 'bg-primary text-white border-primary'
              : 'hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
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
                src="https://s.coze.cn/image/Dl3nuBK_PP8/"
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
            className={`${styles.navItem} ${styles.navItemActive} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium`}
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
            <h2 className="text-2xl font-bold text-text-primary">交易日志</h2>
            <p className="text-text-secondary mt-1">记录和管理所有交易记录</p>
          </div>
          <button onClick={handleAddTrade} className={`${styles.btnPrimary} flex items-center space-x-2`}>
            <i className="fas fa-plus"></i>
            <span>新增交易</span>
          </button>
        </div>

        {/* 工具栏区域 */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* 搜索框 */}
            <div className="md:col-span-1">
              <label htmlFor="search-input" className="block text-sm font-medium text-text-secondary mb-2">
                搜索
              </label>
              <input
                type="text"
                id="search-input"
                placeholder="搜索ETF代码或策略..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.formInput}
              />
            </div>

            {/* ETF筛选 */}
            <div className="md:col-span-1">
              <label htmlFor="etf-filter" className="block text-sm font-medium text-text-secondary mb-2">
                ETF
              </label>
              <select
                id="etf-filter"
                value={etfFilter}
                onChange={(e) => setEtfFilter(e.target.value)}
                className={styles.filterDropdown}
              >
                <option value="">全部ETF</option>
                <option value="510300">510300 - 沪深300ETF</option>
                <option value="510500">510500 - 中证500ETF</option>
                <option value="159915">159915 - 创业板ETF</option>
                <option value="510050">510050 - 上证50ETF</option>
              </select>
            </div>

            {/* 策略筛选 */}
            <div className="md:col-span-1">
              <label htmlFor="strategy-filter" className="block text-sm font-medium text-text-secondary mb-2">
                策略
              </label>
              <select
                id="strategy-filter"
                value={strategyFilter}
                onChange={(e) => setStrategyFilter(e.target.value)}
                className={styles.filterDropdown}
              >
                <option value="">全部策略</option>
                <option value="core-strategy">核心策略</option>
                <option value="tactical-strategy">战术策略</option>
                <option value="value-investing">价值投资</option>
              </select>
            </div>

            {/* 复盘状态筛选 */}
            <div className="md:col-span-1">
              <label htmlFor="review-status-filter" className="block text-sm font-medium text-text-secondary mb-2">
                复盘状态
              </label>
              <select
                id="review-status-filter"
                value={reviewStatusFilter}
                onChange={(e) => setReviewStatusFilter(e.target.value)}
                className={styles.filterDropdown}
              >
                <option value="">全部状态</option>
                <option value="reviewed">已复盘</option>
                <option value="pending">待复盘</option>
              </select>
            </div>
          </div>

          {/* 批量操作 */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-light">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedTradeIds.length === currentPageTrades.length && currentPageTrades.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-text-secondary">全选</span>
              </label>
              <button onClick={handleBatchExport} className={`${styles.btnSecondary} ${styles.btnSm}`}>
                <i className="fas fa-download mr-1"></i>导出
              </button>
            </div>

            {/* 情绪筛选 */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary">情绪:</span>
              <select
                value={emotionFilter}
                onChange={(e) => setEmotionFilter(e.target.value)}
                className={styles.filterDropdown}
              >
                <option value="">全部</option>
                <option value="1">1 - 冲动</option>
                <option value="2">2 - 紧张</option>
                <option value="3">3 - 平静</option>
                <option value="4">4 - 理性</option>
                <option value="5">5 - 冷静</option>
              </select>
            </div>
          </div>
        </div>

        {/* 交易记录表 */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-border-light">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider w-12">
                    <input
                      type="checkbox"
                      checked={selectedTradeIds.length === currentPageTrades.length && currentPageTrades.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('date')}
                  >
                    交易时间 {renderSortIcon('date')}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('etf')}
                  >
                    ETF代码 {renderSortIcon('etf')}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('action')}
                  >
                    操作类型 {renderSortIcon('action')}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('amount')}
                  >
                    金额 {renderSortIcon('amount')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    数量
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    价格
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    交易理由
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('strategy')}
                  >
                    关联策略 {renderSortIcon('strategy')}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('emotion')}
                  >
                    情绪打分 {renderSortIcon('emotion')}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('reviewed')}
                  >
                    复盘状态 {renderSortIcon('reviewed')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-border-light">
                {currentPageTrades.map((trade) => (
                  <tr key={trade.id} className={styles.tableRow}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedTradeIds.includes(trade.id)}
                        onChange={(e) => handleSelectTrade(trade.id, e.target.checked)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">
                      {trade.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-text-primary">{trade.etfCode}</div>
                        <div className="text-sm text-text-secondary">{trade.etfName}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${trade.action === 'buy' ? styles.actionBuy : styles.actionSell}`}>
                        {trade.action === 'buy' ? '买入' : '卖出'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary font-medium">
                      ¥{trade.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">
                      {trade.quantity.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">
                      ¥{trade.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary max-w-xs truncate" title={trade.reason}>
                      {trade.reason}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleStrategyClick(trade.strategy)}
                        className="text-sm text-primary hover:underline"
                      >
                        {trade.strategyName}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex space-x-1">
                          {generateEmotionStars(trade.emotion)}
                        </div>
                        <span className="ml-2 text-sm text-text-secondary">{trade.emotion}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`${styles[`status${trade.reviewed ? 'Reviewed' : 'Pending'}`]}`}>
                        {trade.reviewed ? '已复盘' : '待复盘'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleEditTrade(trade.id)}
                        className="text-primary hover:text-blue-700"
                        title="编辑"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteTrade(trade.id)}
                        className="text-danger hover:text-red-700"
                        title="删除"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      {!trade.reviewed && (
                        <button
                          onClick={() => handleReviewTrade(trade.id)}
                          className="text-secondary hover:text-green-700"
                          title="复盘"
                        >
                          <i className="fas fa-chart-line"></i>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 分页区域 */}
          <div className="px-6 py-4 border-t border-border-light flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <span>共 <span>{filteredTrades.length}</span> 条记录</span>
              <span>每页显示</span>
              <select
                value={pageSize}
                onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
                className="border border-border-light rounded px-2 py-1"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
              <span>条</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-border-light rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="flex items-center space-x-1">
                {renderPageNumbers()}
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-border-light rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JournalPage;

