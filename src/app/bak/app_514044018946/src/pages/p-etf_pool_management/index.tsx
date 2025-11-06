

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface EtfData {
  id: string;
  code: string;
  name: string;
  category: 'stock' | 'bond' | 'commodity' | 'mixed';
  categoryName: string;
  market: 'sh' | 'sz' | 'hk' | 'us';
  marketName: string;
  price: number;
  change: number;
  volume: number;
}

type SortField = 'code' | 'name' | 'category' | 'market' | 'price' | 'change' | 'volume';
type SortOrder = 'asc' | 'desc';

const EtfPoolManagement: React.FC = () => {
  const navigate = useNavigate();
  
  // 模拟ETF数据
  const mockEtfs: EtfData[] = [
    {
      id: 'etf-001',
      code: '510300',
      name: '沪深300ETF',
      category: 'stock',
      categoryName: '股票型',
      market: 'sh',
      marketName: '上海',
      price: 4.256,
      change: 1.25,
      volume: 12560
    },
    {
      id: 'etf-002',
      code: '159915',
      name: '创业板ETF',
      category: 'stock',
      categoryName: '股票型',
      market: 'sz',
      marketName: '深圳',
      price: 2.875,
      change: -0.82,
      volume: 8750
    },
    {
      id: 'etf-003',
      code: '511220',
      name: '国债ETF',
      category: 'bond',
      categoryName: '债券型',
      market: 'sh',
      marketName: '上海',
      price: 101.25,
      change: 0.15,
      volume: 3250
    },
    {
      id: 'etf-004',
      code: '159934',
      name: '黄金ETF',
      category: 'commodity',
      categoryName: '商品型',
      market: 'sz',
      marketName: '深圳',
      price: 3.852,
      change: 0.68,
      volume: 5680
    },
    {
      id: 'etf-005',
      code: '510500',
      name: '500ETF',
      category: 'stock',
      categoryName: '股票型',
      market: 'sh',
      marketName: '上海',
      price: 6.785,
      change: 1.56,
      volume: 9850
    },
    {
      id: 'etf-006',
      code: '511880',
      name: '银华日利',
      category: 'bond',
      categoryName: '债券型',
      market: 'sh',
      marketName: '上海',
      price: 100.02,
      change: 0.01,
      volume: 15620
    },
    {
      id: 'etf-007',
      code: '159928',
      name: '消费ETF',
      category: 'stock',
      categoryName: '股票型',
      market: 'sz',
      marketName: '深圳',
      price: 1.256,
      change: 0.98,
      volume: 7850
    },
    {
      id: 'etf-008',
      code: '512880',
      name: '证券ETF',
      category: 'stock',
      categoryName: '股票型',
      market: 'sh',
      marketName: '上海',
      price: 1.025,
      change: -1.25,
      volume: 18950
    },
    {
      id: 'etf-009',
      code: '512690',
      name: '酒ETF',
      category: 'stock',
      categoryName: '股票型',
      market: 'sh',
      marketName: '上海',
      price: 1.568,
      change: 2.35,
      volume: 6520
    },
    {
      id: 'etf-010',
      code: '512400',
      name: '有色金属ETF',
      category: 'commodity',
      categoryName: '商品型',
      market: 'sh',
      marketName: '上海',
      price: 1.895,
      change: 1.78,
      volume: 4520
    }
  ];

  // 状态管理
  const [currentEtfs, setCurrentEtfs] = useState<EtfData[]>([...mockEtfs]);
  const [selectedEtfs, setSelectedEtfs] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortField, setSortField] = useState<SortField>('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [etfSearchTerm, setEtfSearchTerm] = useState<string>('');
  const [etfCategoryFilter, setEtfCategoryFilter] = useState<string>('');
  const [etfMarketFilter, setEtfMarketFilter] = useState<string>('');
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [deleteModalData, setDeleteModalData] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - ETF池子管理';
    return () => { document.title = originalTitle; };
  }, []);

  // 筛选ETF
  const filterEtfs = () => {
    let filteredEtfs = [...mockEtfs];

    // 搜索筛选
    if (etfSearchTerm) {
      filteredEtfs = filteredEtfs.filter(etf => 
        etf.code.toLowerCase().includes(etfSearchTerm.toLowerCase()) || 
        etf.name.toLowerCase().includes(etfSearchTerm.toLowerCase())
      );
    }

    // 类别筛选
    if (etfCategoryFilter) {
      filteredEtfs = filteredEtfs.filter(etf => etf.category === etfCategoryFilter);
    }

    // 市场筛选
    if (etfMarketFilter) {
      filteredEtfs = filteredEtfs.filter(etf => etf.market === etfMarketFilter);
    }

    setCurrentEtfs(filteredEtfs);
    setCurrentPage(1);
  };

  // 应用筛选
  useEffect(() => {
    filterEtfs();
  }, [etfSearchTerm, etfCategoryFilter, etfMarketFilter]);

  // 排序ETF
  const sortEtfs = (field: SortField) => {
    const newSortOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(newSortOrder);

    const sortedEtfs = [...currentEtfs].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;
      
      switch (field) {
        case 'code':
          aValue = a.code;
          bValue = b.code;
          break;
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'category':
          aValue = a.category;
          bValue = b.category;
          break;
        case 'market':
          aValue = a.market;
          bValue = b.market;
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'change':
          aValue = a.change;
          bValue = b.change;
          break;
        case 'volume':
          aValue = a.volume;
          bValue = b.volume;
          break;
        default:
          return 0;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return newSortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return newSortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });

    setCurrentEtfs(sortedEtfs);
  };

  // 处理全选
  const handleSelectAll = (checked: boolean) => {
    const currentPageEtfs = getCurrentPageEtfs();
    if (checked) {
      setSelectedEtfs(new Set([...selectedEtfs, ...currentPageEtfs.map(etf => etf.id)]));
    } else {
      const newSelected = new Set(selectedEtfs);
      currentPageEtfs.forEach(etf => newSelected.delete(etf.id));
      setSelectedEtfs(newSelected);
    }
  };

  // 处理单项选择
  const handleSelectEtf = (etfId: string, checked: boolean) => {
    const newSelected = new Set(selectedEtfs);
    if (checked) {
      newSelected.add(etfId);
    } else {
      newSelected.delete(etfId);
    }
    setSelectedEtfs(newSelected);
  };

  // 获取当前页的ETF
  const getCurrentPageEtfs = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return currentEtfs.slice(startIndex, endIndex);
  };

  // 检查是否全选
  const isAllSelected = () => {
    const currentPageEtfs = getCurrentPageEtfs();
    return currentPageEtfs.length > 0 && currentPageEtfs.every(etf => selectedEtfs.has(etf.id));
  };

  // 检查是否部分选中
  const isIndeterminate = () => {
    const currentPageEtfs = getCurrentPageEtfs();
    const selectedCount = currentPageEtfs.filter(etf => selectedEtfs.has(etf.id)).length;
    return selectedCount > 0 && selectedCount < currentPageEtfs.length;
  };

  // 处理分页
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // 计算总页数
  const getTotalPages = () => {
    return Math.ceil(currentEtfs.length / pageSize);
  };

  // 生成页码
  const generatePageNumbers = () => {
    const totalPages = getTotalPages();
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  // 显示删除模态框
  const showDeleteModalHandler = (title: string, message: string, onConfirm: () => void) => {
    setDeleteModalData({ title, message, onConfirm });
    setShowDeleteModal(true);
  };

  // 隐藏删除模态框
  const hideDeleteModalHandler = () => {
    setShowDeleteModal(false);
    setDeleteModalData(null);
  };

  // 处理删除确认
  const handleConfirmDelete = () => {
    if (deleteModalData?.onConfirm) {
      deleteModalData.onConfirm();
    }
    hideDeleteModalHandler();
  };

  // 批量删除
  const handleBatchDelete = () => {
    if (selectedEtfs.size > 0) {
      showDeleteModalHandler(
        '批量删除ETF', 
        `确定要删除选中的 ${selectedEtfs.size} 个ETF吗？此操作不可撤销。`,
        () => {
          // 执行批量删除
          const newMockEtfs = mockEtfs.filter(etf => !selectedEtfs.has(etf.id));
          Object.assign(mockEtfs, newMockEtfs);
          setSelectedEtfs(new Set());
          filterEtfs();
        }
      );
    }
  };

  // 单个删除
  const handleDeleteEtf = (etfId: string, etfName: string) => {
    showDeleteModalHandler(
      '删除ETF', 
      `确定要删除ETF "${etfName}" 吗？此操作不可撤销。`,
      () => {
        // 执行删除
        const newMockEtfs = mockEtfs.filter(etf => etf.id !== etfId);
        Object.assign(mockEtfs, newMockEtfs);
        setSelectedEtfs(new Set(selectedEtfs).delete(etfId) ? new Set(selectedEtfs) : selectedEtfs);
        filterEtfs();
      }
    );
  };

  // 侧边栏切换
  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // 获取排序图标
  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return 'fas fa-sort ml-1';
    }
    return `fas fa-sort-${sortOrder === 'asc' ? 'up' : 'down'} ml-1`;
  };

  const currentPageEtfs = getCurrentPageEtfs();
  const totalPages = getTotalPages();

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
                src="https://s.coze.cn/image/mW4RpqCVnNs/" 
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
          <Link 
            to="/mind" 
            className={`${styles.navItem} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary`}
          >
            <i className="fas fa-heart w-5"></i>
            {!isSidebarCollapsed && <span>心理追踪</span>}
          </Link>
          <div className={`${styles.navItem} ${styles.navItemActive} flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium`}>
            <i className="fas fa-tint w-5"></i>
            {!isSidebarCollapsed && <span>ETF池子管理</span>}
          </div>
        </nav>
      </aside>

      {/* 主内容区 */}
      <main className={`${isSidebarCollapsed ? 'ml-16' : 'ml-64'} mt-16 p-6 min-h-screen`}>
        {/* 页面头部 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">ETF池子管理</h2>
            <p className="text-text-secondary mt-1">管理您的ETF投资标的池</p>
          </div>
          <button 
            onClick={() => alert('打开添加ETF弹窗 (P-ADD_ETF)')}
            className={`${styles.btnPrimary} flex items-center space-x-2`}
          >
            <i className="fas fa-plus"></i>
            <span>添加ETF</span>
          </button>
        </div>

        {/* 工具栏区域 */}
        <div className="bg-white rounded-xl shadow-card p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <i className="fas fa-search text-gray-400"></i>
                <input 
                  type="text" 
                  placeholder="搜索ETF代码或名称..." 
                  value={etfSearchTerm}
                  onChange={(e) => setEtfSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="etf-category-filter" className="text-sm font-medium text-text-secondary">ETF类别:</label>
                <select 
                  id="etf-category-filter" 
                  value={etfCategoryFilter}
                  onChange={(e) => setEtfCategoryFilter(e.target.value)}
                  className={styles.selectFilter}
                >
                  <option value="">全部</option>
                  <option value="stock">股票型</option>
                  <option value="bond">债券型</option>
                  <option value="commodity">商品型</option>
                  <option value="mixed">混合型</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="etf-market-filter" className="text-sm font-medium text-text-secondary">市场:</label>
                <select 
                  id="etf-market-filter" 
                  value={etfMarketFilter}
                  onChange={(e) => setEtfMarketFilter(e.target.value)}
                  className={styles.selectFilter}
                >
                  <option value="">全部</option>
                  <option value="sh">上海</option>
                  <option value="sz">深圳</option>
                  <option value="hk">香港</option>
                  <option value="us">美国</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={handleBatchDelete}
                disabled={selectedEtfs.size === 0}
                className={`${styles.btnDanger} flex items-center space-x-2`}
              >
                <i className="fas fa-trash"></i>
                <span>批量删除</span>
              </button>
            </div>
          </div>
        </div>

        {/* ETF列表 */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-border-light">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input 
                      type="checkbox" 
                      checked={isAllSelected()}
                      ref={(input) => {
                        if (input) input.indeterminate = isIndeterminate();
                      }}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => sortEtfs('code')}
                  >
                    ETF代码 <i className={getSortIcon('code')}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => sortEtfs('name')}
                  >
                    ETF名称 <i className={getSortIcon('name')}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => sortEtfs('category')}
                  >
                    类别 <i className={getSortIcon('category')}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => sortEtfs('market')}
                  >
                    市场 <i className={getSortIcon('market')}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => sortEtfs('price')}
                  >
                    最新价 <i className={getSortIcon('price')}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => sortEtfs('change')}
                  >
                    涨跌幅 <i className={getSortIcon('change')}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => sortEtfs('volume')}
                  >
                    成交量(万) <i className={getSortIcon('volume')}></i>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-border-light">
                {currentPageEtfs.map(etf => (
                  <tr key={etf.id} className={styles.tableRow}>
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        checked={selectedEtfs.has(etf.id)}
                        onChange={(e) => handleSelectEtf(etf.id, e.target.checked)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="px-6 py-4 font-medium text-text-primary">{etf.code}</td>
                    <td className="px-6 py-4">
                      <Link 
                        to={`/etf-detail?etfId=${etf.id}`}
                        className="text-primary hover:text-blue-700 font-medium"
                      >
                        {etf.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[`etfCategory${etf.category.charAt(0).toUpperCase() + etf.category.slice(1)}`]}`}>
                        {etf.categoryName}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{etf.marketName}</td>
                    <td className="px-6 py-4 text-sm text-text-primary">{etf.price.toFixed(3)}</td>
                    <td className="px-6 py-4">
                      <span className={`text-sm ${etf.change >= 0 ? styles.signalUp : styles.signalDown}`}>
                        {etf.change >= 0 ? '+' : ''}{etf.change.toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{etf.volume}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => alert('打开编辑ETF弹窗 (P-EDIT_ETF)')}
                          className={`${styles.btnSecondary} text-sm`}
                          title="编辑ETF"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <Link 
                          to={`/etf-detail?etfId=${etf.id}`}
                          className={`${styles.btnSecondary} text-sm`}
                          title="查看详情"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>
                        <button 
                          onClick={() => handleDeleteEtf(etf.id, etf.name)}
                          className={`${styles.btnDanger} text-sm`}
                          title="删除ETF"
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

          {/* 分页区域 */}
          <div className="px-6 py-4 border-t border-border-light bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">每页显示</span>
                <select 
                  value={pageSize}
                  onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
                  className={styles.selectFilter}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
                <span className="text-sm text-text-secondary">条，共 <span>{currentEtfs.length}</span> 条记录</span>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={styles.btnSecondary}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="flex space-x-1">
                  {generatePageNumbers().map(page => (
                    <button 
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 text-sm rounded ${page === currentPage ? 'bg-primary text-white' : styles.btnSecondary}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={styles.btnSecondary}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 确认删除对话框 */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-danger bg-opacity-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-exclamation-triangle text-danger"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">{deleteModalData?.title}</h3>
                </div>
                <p className="text-text-secondary mb-6" dangerouslySetInnerHTML={{ __html: deleteModalData?.message || '' }}></p>
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={hideDeleteModalHandler}
                    className={styles.btnSecondary}
                  >
                    取消
                  </button>
                  <button 
                    onClick={handleConfirmDelete}
                    className={styles.btnDanger}
                  >
                    删除
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EtfPoolManagement;

