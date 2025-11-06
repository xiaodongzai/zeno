

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface EtfHolding {
  id: number;
  code: string;
  name: string;
  amount: number;
  quantity: number;
  costPrice: number;
  currentPrice: number;
  pnl: number;
  targetAllocation: number;
  actualAllocation: number;
  strategyType: 'core' | 'tactical';
}

interface AdjustmentRecord {
  id: number;
  type: 'buy' | 'sell';
  etfCode: string;
  etfName: string;
  amount: number;
  date: string;
  time: string;
  allocationChange: string;
}

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 状态管理
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [etfSearchTerm, setEtfSearchTerm] = useState('');
  const [strategyFilter, setStrategyFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isAdjustmentExpanded, setIsAdjustmentExpanded] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  
  // 图表引用
  const etfChartRef = useRef<HTMLCanvasElement>(null);
  const strategyTypeChartRef = useRef<HTMLCanvasElement>(null);
  const etfChartInstanceRef = useRef<any>(null);
  const strategyTypeChartInstanceRef = useRef<any>(null);
  
  // 模拟数据
  const etfHoldings: EtfHolding[] = [
    {
      id: 1,
      code: '510300',
      name: '沪深300ETF',
      amount: 44996,
      quantity: 15200,
      costPrice: 2.95,
      currentPrice: 3.02,
      pnl: 1064,
      targetAllocation: 35,
      actualAllocation: 35,
      strategyType: 'core'
    },
    {
      id: 2,
      code: '510500',
      name: '中证500ETF',
      amount: 32140,
      quantity: 28000,
      costPrice: 1.12,
      currentPrice: 1.15,
      pnl: 840,
      targetAllocation: 25,
      actualAllocation: 25,
      strategyType: 'core'
    },
    {
      id: 3,
      code: '159915',
      name: '创业板ETF',
      amount: 25712,
      quantity: 18800,
      costPrice: 1.35,
      currentPrice: 1.37,
      pnl: 376,
      targetAllocation: 20,
      actualAllocation: 20,
      strategyType: 'tactical'
    },
    {
      id: 4,
      code: '588000',
      name: '科创50ETF',
      amount: 25712,
      quantity: 12400,
      costPrice: 2.05,
      currentPrice: 2.07,
      pnl: 248,
      targetAllocation: 20,
      actualAllocation: 20,
      strategyType: 'tactical'
    }
  ];

  const adjustmentRecords: AdjustmentRecord[] = [
    {
      id: 1,
      type: 'buy',
      etfCode: '510300',
      etfName: '沪深300ETF',
      amount: 15000,
      date: '2024-01-15',
      time: '14:30',
      allocationChange: '30% → 35%'
    },
    {
      id: 2,
      type: 'sell',
      etfCode: '510500',
      etfName: '中证500ETF',
      amount: 8000,
      date: '2024-01-12',
      time: '09:45',
      allocationChange: '30% → 25%'
    },
    {
      id: 3,
      type: 'buy',
      etfCode: '588000',
      etfName: '科创50ETF',
      amount: 25000,
      date: '2024-01-10',
      time: '11:20',
      allocationChange: '新增持仓，目标仓位: 20%'
    }
  ];

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 仓位追踪';
    return () => { document.title = originalTitle; };
  }, []);

  // 初始化图表
  useEffect(() => {
    const Chart = (window as any).Chart;
    if (!Chart) return;

    // 初始化ETF仓位分布图表
    if (etfChartRef.current && !etfChartInstanceRef.current) {
      const etfCtx = etfChartRef.current.getContext('2d');
      if (etfCtx) {
        etfChartInstanceRef.current = new Chart(etfCtx, {
          type: 'doughnut',
          data: {
            labels: ['沪深300ETF (510300)', '中证500ETF (510500)', '创业板ETF (159915)', '科创50ETF (588000)'],
            datasets: [{
              data: [35, 25, 20, 20],
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
                display: false
              }
            }
          }
        });
      }
    }

    // 初始化策略类型分布图表
    if (strategyTypeChartRef.current && !strategyTypeChartInstanceRef.current) {
      const strategyTypeCtx = strategyTypeChartRef.current.getContext('2d');
      if (strategyTypeCtx) {
        strategyTypeChartInstanceRef.current = new Chart(strategyTypeCtx, {
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
    }

    // 清理函数
    return () => {
      if (etfChartInstanceRef.current) {
        etfChartInstanceRef.current.destroy();
        etfChartInstanceRef.current = null;
      }
      if (strategyTypeChartInstanceRef.current) {
        strategyTypeChartInstanceRef.current.destroy();
        strategyTypeChartInstanceRef.current = null;
      }
    };
  }, []);

  // 筛选和排序数据
  const filteredAndSortedData = React.useMemo(() => {
    let filteredData = etfHoldings.filter(etf => {
      const matchesSearch = etf.code.toLowerCase().includes(etfSearchTerm.toLowerCase()) || 
                          etf.name.toLowerCase().includes(etfSearchTerm.toLowerCase());
      const matchesStrategy = !strategyFilter || etf.strategyType === strategyFilter;
      return matchesSearch && matchesStrategy;
    });

    if (sortField) {
      filteredData.sort((a, b) => {
        let aValue = a[sortField as keyof EtfHolding];
        let bValue = b[sortField as keyof EtfHolding];
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          aValue = aValue.toLowerCase() as any;
          bValue = bValue.toLowerCase() as any;
        }
        
        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }

    return filteredData;
  }, [etfHoldings, etfSearchTerm, strategyFilter, sortField, sortDirection]);

  // 分页数据
  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredAndSortedData.slice(startIndex, endIndex);
  }, [filteredAndSortedData, currentPage, pageSize]);

  const totalPages = Math.ceil(filteredAndSortedData.length / pageSize);

  // 事件处理函数
  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(paginatedData.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleItemSelect = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  const handleToggleAdjustment = () => {
    setIsAdjustmentExpanded(!isAdjustmentExpanded);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handleAdjustPosition = (etfCode: string) => {
    console.log(`打开调整目标仓位弹窗，ETF代码: ${etfCode}`);
    // 实际实现中会打开 P-ADJUST_TARGET_POSITION 弹窗
  };

  const handleViewAllAdjustments = () => {
    navigate('/journal');
  };

  const getSortIndicator = (field: string) => {
    if (sortField !== field) {
      return 'fas fa-sort sort-indicator';
    }
    return `fas fa-sort-${sortDirection} sort-indicator active`;
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
                src="https://s.coze.cn/image/R4JGdgV8ZBM/" 
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
            className={`${styles.navItem} ${styles.navItemActive} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium`}
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
            <h2 className="text-2xl font-bold text-text-primary">仓位追踪</h2>
            <p className="text-text-secondary mt-1">ETF持仓概览与调仓记录</p>
          </div>
          <button 
            onClick={handleRefresh}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-border-light rounded-lg hover:bg-gray-50"
          >
            <i className={`fas fa-sync-alt text-primary ${isRefreshing ? 'fa-spin' : ''}`}></i>
            <span className="text-sm font-medium text-text-primary">刷新数据</span>
          </button>
        </div>

        {/* 仓位分布图 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* ETF仓位分布 */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">ETF仓位分布</h3>
            <div className="relative h-64">
              <canvas ref={etfChartRef}></canvas>
            </div>
            <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">沪深300ETF (510300)</span>
                </div>
                <span className="font-medium text-text-primary">35%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-text-secondary">中证500ETF (510500)</span>
                </div>
                <span className="font-medium text-text-primary">25%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-tertiary rounded-full"></div>
                  <span className="text-text-secondary">创业板ETF (159915)</span>
                </div>
                <span className="font-medium text-text-primary">20%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-info rounded-full"></div>
                  <span className="text-text-secondary">科创50ETF (588000)</span>
                </div>
                <span className="font-medium text-text-primary">20%</span>
              </div>
            </div>
          </div>

          {/* 策略类型分布 */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">策略类型分布</h3>
            <div className="relative h-64">
              <canvas ref={strategyTypeChartRef}></canvas>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">核心仓</span>
                </div>
                <span className="font-medium text-text-primary">70%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-text-secondary">战术仓</span>
                </div>
                <span className="font-medium text-text-primary">30%</span>
              </div>
            </div>
          </div>
        </section>

        {/* ETF持仓列表 */}
        <section className="bg-white rounded-xl shadow-card mb-8">
          {/* 工具栏 */}
          <div className="p-6 border-b border-border-light">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="搜索ETF代码或名称..." 
                    value={etfSearchTerm}
                    onChange={(e) => setEtfSearchTerm(e.target.value)}
                    className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
                <select 
                  value={strategyFilter}
                  onChange={(e) => setStrategyFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">全部策略</option>
                  <option value="core">核心仓</option>
                  <option value="tactical">战术仓</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">共 <span className="font-medium text-text-primary">{filteredAndSortedData.length}</span> 个ETF</span>
              </div>
            </div>
          </div>

          {/* 持仓表格 */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input 
                      type="checkbox" 
                      checked={paginatedData.length > 0 && selectedItems.length === paginatedData.length}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </th>
                  <th 
                    className={`px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider ${styles.sortableHeader}`}
                    onClick={() => handleSort('code')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>ETF代码</span>
                      <i className={getSortIndicator('code')}></i>
                    </div>
                  </th>
                  <th 
                    className={`px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider ${styles.sortableHeader}`}
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>ETF名称</span>
                      <i className={getSortIndicator('name')}></i>
                    </div>
                  </th>
                  <th 
                    className={`px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider ${styles.sortableHeader}`}
                    onClick={() => handleSort('amount')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>持仓金额</span>
                      <i className={getSortIndicator('amount')}></i>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">份额</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">成本价</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">当前价</th>
                  <th 
                    className={`px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider ${styles.sortableHeader}`}
                    onClick={() => handleSort('pnl')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>浮动盈亏</span>
                      <i className={getSortIndicator('pnl')}></i>
                    </div>
                  </th>
                  <th 
                    className={`px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider ${styles.sortableHeader}`}
                    onClick={() => handleSort('targetAllocation')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>目标仓位</span>
                      <i className={getSortIndicator('targetAllocation')}></i>
                    </div>
                  </th>
                  <th 
                    className={`px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider ${styles.sortableHeader}`}
                    onClick={() => handleSort('actualAllocation')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>实际仓位</span>
                      <i className={getSortIndicator('actualAllocation')}></i>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map(etf => (
                  <tr key={etf.id} className={styles.tableRow}>
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        checked={selectedItems.includes(etf.id)}
                        onChange={(e) => handleItemSelect(etf.id, e.target.checked)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{etf.code}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">{etf.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">¥{etf.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{etf.quantity.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">¥{etf.costPrice.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">¥{etf.currentPrice.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="text-success font-medium">+¥{etf.pnl.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{etf.targetAllocation}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{etf.actualAllocation}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button 
                        onClick={() => handleAdjustPosition(etf.code)}
                        className="text-primary hover:text-blue-700"
                      >
                        <i className="fas fa-edit mr-1"></i>调整
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 分页 */}
          <div className="px-6 py-4 border-t border-border-light">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">每页显示</span>
                <select 
                  value={pageSize}
                  onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
                  className="px-2 py-1 border border-gray-300 rounded text-sm"
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
                <span className="text-sm text-text-secondary">条</span>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <span className="text-sm text-text-secondary">第 <span>{currentPage}</span> 页，共 <span>{totalPages}</span> 页</span>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 调仓记录 */}
        <section className="bg-white rounded-xl shadow-card">
          <div className="p-6 border-b border-border-light">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text-primary">调仓记录</h3>
              <button 
                onClick={handleToggleAdjustment}
                className="flex items-center space-x-1 text-sm text-primary hover:text-blue-700"
              >
                <span>{isAdjustmentExpanded ? '收起' : '展开'}</span>
                <i className={`fas fa-chevron-${isAdjustmentExpanded ? 'up' : 'down'}`}></i>
              </button>
            </div>
          </div>
          
          {isAdjustmentExpanded && (
            <div className="p-6">
              <div className="space-y-4">
                {adjustmentRecords.map(record => (
                  <div key={record.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 ${record.type === 'buy' ? 'bg-success' : 'bg-danger'} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                        <i className={`fas fa-arrow-${record.type === 'buy' ? 'up' : 'down'} ${record.type === 'buy' ? 'text-success' : 'text-danger'}`}></i>
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{record.type === 'buy' ? '买入' : '卖出'} {record.etfName} ({record.etfCode})</p>
                        <p className="text-sm text-text-secondary">{record.date} {record.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${record.type === 'buy' ? 'text-success' : 'text-danger'}`}>
                        {record.type === 'buy' ? '+' : '-'}¥{record.amount.toLocaleString()}
                      </p>
                      <p className="text-sm text-text-secondary">目标仓位调整: {record.allocationChange}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button 
                  onClick={handleViewAllAdjustments}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 text-sm"
                >
                  查看全部调仓记录
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;

