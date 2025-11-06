

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface Strategy {
  id: string;
  name: string;
  type: 'core' | 'tactical';
  typeName: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}

type SortField = 'name' | 'type' | 'created' | 'updated' | 'version';
type SortOrder = 'asc' | 'desc';

const StrategiesPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 模拟策略数据
  const mockStrategies: Strategy[] = [
    {
      id: 'strat-001',
      name: '沪深300定投策略',
      type: 'core',
      typeName: '核心仓',
      createdAt: '2024-01-15 10:30:00',
      updatedAt: '2024-03-20 14:15:00',
      version: 3
    },
    {
      id: 'strat-002',
      name: '行业轮动战术',
      type: 'tactical',
      typeName: '战术仓',
      createdAt: '2024-02-01 09:20:00',
      updatedAt: '2024-03-18 16:45:00',
      version: 2
    },
    {
      id: 'strat-003',
      name: '债券配置策略',
      type: 'core',
      typeName: '核心仓',
      createdAt: '2024-01-20 11:15:00',
      updatedAt: '2024-03-22 11:30:00',
      version: 1
    },
    {
      id: 'strat-004',
      name: '商品对冲策略',
      type: 'tactical',
      typeName: '战术仓',
      createdAt: '2024-02-10 15:40:00',
      updatedAt: '2024-03-19 13:20:00',
      version: 4
    },
    {
      id: 'strat-005',
      name: '价值成长平衡',
      type: 'core',
      typeName: '核心仓',
      createdAt: '2024-01-05 14:25:00',
      updatedAt: '2024-03-21 10:15:00',
      version: 2
    },
    {
      id: 'strat-006',
      name: '趋势跟踪策略',
      type: 'tactical',
      typeName: '战术仓',
      createdAt: '2024-02-15 12:30:00',
      updatedAt: '2024-03-20 09:45:00',
      version: 1
    },
    {
      id: 'strat-007',
      name: '股息分红策略',
      type: 'core',
      typeName: '核心仓',
      createdAt: '2024-01-25 16:10:00',
      updatedAt: '2024-03-17 15:30:00',
      version: 3
    },
    {
      id: 'strat-008',
      name: '量化择时策略',
      type: 'tactical',
      typeName: '战术仓',
      createdAt: '2024-02-20 10:00:00',
      updatedAt: '2024-03-22 16:00:00',
      version: 5
    }
  ];

  // 状态管理
  const [currentStrategies, setCurrentStrategies] = useState<Strategy[]>([...mockStrategies]);
  const [selectedStrategies, setSelectedStrategies] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState<SortField>('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [strategyFilter, setStrategyFilter] = useState('');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteModalData, setDeleteModalData] = useState({
    title: '',
    message: '',
    onConfirm: () => {}
  });

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 策略库';
    return () => { document.title = originalTitle; };
  }, []);

  // 筛选策略
  const filterStrategies = () => {
    let filtered = mockStrategies.filter(strategy => {
      const matchesSearch = strategy.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = !strategyFilter || strategy.type === strategyFilter;
      return matchesSearch && matchesFilter;
    });

    // 排序
    if (sortField) {
      filtered.sort((a, b) => {
        let aValue: any, bValue: any;
        
        switch (sortField) {
          case 'name':
            aValue = a.name.toLowerCase();
            bValue = b.name.toLowerCase();
            break;
          case 'type':
            aValue = a.type;
            bValue = b.type;
            break;
          case 'created':
            aValue = new Date(a.createdAt);
            bValue = new Date(b.createdAt);
            break;
          case 'updated':
            aValue = new Date(a.updatedAt);
            bValue = new Date(b.updatedAt);
            break;
          case 'version':
            aValue = a.version;
            bValue = b.version;
            break;
          default:
            return 0;
        }

        if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    setCurrentStrategies(filtered);
    setCurrentPage(1);
  };

  // 监听筛选条件变化
  useEffect(() => {
    filterStrategies();
  }, [searchTerm, strategyFilter, sortField, sortOrder]);

  // 处理排序
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // 处理全选
  const handleSelectAll = (checked: boolean) => {
    const pageStrategies = getCurrentPageStrategies();
    if (checked) {
      setSelectedStrategies(new Set([...selectedStrategies, ...pageStrategies.map(s => s.id)]));
    } else {
      const newSelected = new Set(selectedStrategies);
      pageStrategies.forEach(s => newSelected.delete(s.id));
      setSelectedStrategies(newSelected);
    }
  };

  // 处理单选
  const handleSelectStrategy = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedStrategies);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedStrategies(newSelected);
  };

  // 获取当前页策略
  const getCurrentPageStrategies = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return currentStrategies.slice(startIndex, endIndex);
  };

  // 计算总页数
  const getTotalPages = () => {
    return Math.ceil(currentStrategies.length / pageSize);
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

  // 检查是否全选
  const isAllSelected = () => {
    const pageStrategies = getCurrentPageStrategies();
    return pageStrategies.length > 0 && pageStrategies.every(s => selectedStrategies.has(s.id));
  };

  // 检查是否部分选中
  const isIndeterminate = () => {
    const pageStrategies = getCurrentPageStrategies();
    const selectedCount = pageStrategies.filter(s => selectedStrategies.has(s.id)).length;
    return selectedCount > 0 && selectedCount < pageStrategies.length;
  };

  // 显示删除模态框
  const showDeleteModalHandler = (title: string, message: string, onConfirm: () => void) => {
    setDeleteModalData({ title, message, onConfirm });
    setShowDeleteModal(true);
  };

  // 隐藏删除模态框
  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  // 处理批量删除
  const handleBatchDelete = () => {
    if (selectedStrategies.size > 0) {
      showDeleteModalHandler(
        '批量删除策略', 
        `确定要删除选中的 ${selectedStrategies.size} 个策略吗？此操作不可撤销。`,
        () => {
          // 执行批量删除
          const newMockStrategies = mockStrategies.filter(s => !selectedStrategies.has(s.id));
          Object.assign(mockStrategies, newMockStrategies);
          setSelectedStrategies(new Set());
          filterStrategies();
          hideDeleteModal();
        }
      );
    }
  };

  // 处理单个删除
  const handleDeleteStrategy = (strategy: Strategy) => {
    showDeleteModalHandler(
      '删除策略', 
      `确定要删除策略 "${strategy.name}" 吗？此操作不可撤销。`,
      () => {
        // 执行删除
        const newMockStrategies = mockStrategies.filter(s => s.id !== strategy.id);
        Object.assign(mockStrategies, newMockStrategies);
        setSelectedStrategies(new Set(selectedStrategies).delete(strategy.id));
        filterStrategies();
        hideDeleteModal();
      }
    );
  };

  const currentPageStrategies = getCurrentPageStrategies();
  const totalPages = getTotalPages();

  return (
    <div className={styles.pageWrapper}>
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-border-light h-16 z-50">
        <div className="flex items-center justify-between h-full px-6">
          {/* Logo和菜单切换 */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
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
            <h2 className="text-2xl font-bold text-text-primary">策略库</h2>
            <p className="text-text-secondary mt-1">管理您的投资策略</p>
          </div>
          <button 
            onClick={() => navigate('/add-strategy')}
            className={`${styles.btnPrimary} flex items-center space-x-2`}
          >
            <i className="fas fa-plus"></i>
            <span>新增策略</span>
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
                  placeholder="搜索策略名称..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="strategy-filter" className="text-sm font-medium text-text-secondary">策略类型:</label>
                <select 
                  id="strategy-filter" 
                  value={strategyFilter}
                  onChange={(e) => setStrategyFilter(e.target.value)}
                  className={styles.selectFilter}
                >
                  <option value="">全部</option>
                  <option value="core">核心仓</option>
                  <option value="tactical">战术仓</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={handleBatchDelete}
                disabled={selectedStrategies.size === 0}
                className={`${styles.btnDanger} flex items-center space-x-2`}
              >
                <i className="fas fa-trash"></i>
                <span>批量删除</span>
              </button>
            </div>
          </div>
        </div>

        {/* 策略列表 */}
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
                    onClick={() => handleSort('name')}
                  >
                    策略名称 <i className={`fas ${sortField === 'name' ? (sortOrder === 'asc' ? 'fa-sort-up' : 'fa-sort-down') : 'fa-sort'} ml-1`}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('type')}
                  >
                    策略类型 <i className={`fas ${sortField === 'type' ? (sortOrder === 'asc' ? 'fa-sort-up' : 'fa-sort-down') : 'fa-sort'} ml-1`}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('created')}
                  >
                    创建时间 <i className={`fas ${sortField === 'created' ? (sortOrder === 'asc' ? 'fa-sort-up' : 'fa-sort-down') : 'fa-sort'} ml-1`}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('updated')}
                  >
                    最后更新 <i className={`fas ${sortField === 'updated' ? (sortOrder === 'asc' ? 'fa-sort-up' : 'fa-sort-down') : 'fa-sort'} ml-1`}></i>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer hover:text-text-primary"
                    onClick={() => handleSort('version')}
                  >
                    版本号 <i className={`fas ${sortField === 'version' ? (sortOrder === 'asc' ? 'fa-sort-up' : 'fa-sort-down') : 'fa-sort'} ml-1`}></i>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-border-light">
                {currentPageStrategies.map(strategy => (
                  <tr key={strategy.id} className={styles.tableRow}>
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        value={strategy.id}
                        checked={selectedStrategies.has(strategy.id)}
                        onChange={(e) => handleSelectStrategy(strategy.id, e.target.checked)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <Link 
                        to={`/strategy-detail?strategyId=${strategy.id}`}
                        className="text-primary hover:text-blue-700 font-medium"
                      >
                        {strategy.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${strategy.type === 'core' ? styles.strategyTypeCore : styles.strategyTypeTactical}`}>
                        {strategy.typeName}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{strategy.createdAt}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{strategy.updatedAt}</td>
                    <td className="px-6 py-4 text-sm text-text-primary">v{strategy.version}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => navigate('/edit-strategy')}
                          className={`${styles.btnSecondary}`} 
                          title="编辑策略"
                        >
                          <i className="fas fa-edit text-sm"></i>
                        </button>
                        <button 
                          onClick={() => navigate(`/journal?strategyId=${strategy.id}`)}
                          className={`${styles.btnSecondary}`} 
                          title="查看执行历史"
                        >
                          <i className="fas fa-history text-sm"></i>
                        </button>
                        <button 
                          onClick={() => handleDeleteStrategy(strategy)}
                          className={`${styles.btnDanger}`} 
                          title="删除策略"
                        >
                          <i className="fas fa-trash text-sm"></i>
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
                  onChange={(e) => {
                    setPageSize(parseInt(e.target.value));
                    setCurrentPage(1);
                  }}
                  className={styles.selectFilter}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
                <span className="text-sm text-text-secondary">条，共 <span>{currentStrategies.length}</span> 条记录</span>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={styles.btnSecondary}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="flex space-x-1">
                  {generatePageNumbers().map(pageNum => (
                    <button 
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-1 text-sm rounded ${currentPage === pageNum ? 'bg-primary text-white' : styles.btnSecondary}`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(currentPage + 1)}
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
                  <h3 className="text-lg font-semibold text-text-primary">{deleteModalData.title}</h3>
                </div>
                <p className="text-text-secondary mb-6" dangerouslySetInnerHTML={{ __html: deleteModalData.message }}></p>
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={hideDeleteModal}
                    className={styles.btnSecondary}
                  >
                    取消
                  </button>
                  <button 
                    onClick={() => {
                      deleteModalData.onConfirm();
                    }}
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

export default StrategiesPage;

