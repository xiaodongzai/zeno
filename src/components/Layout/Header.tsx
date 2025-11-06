import React from 'react';

export default function Header() {
  return (
    <div className="flex items-center justify-between h-full px-6">
      {/* Logo和菜单切换 */}
      <div className="flex items-center space-x-4">
        <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
          <i className="fas fa-bars text-gray-600"></i>
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <i className="fas fa-chart-line text-white text-sm"></i>
          </div>
          <h1 className="text-xl font-bold text-text-primary">ETF Lab</h1>
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
          <span className="hidden md:block text-sm font-medium text-text-primary">
            投资者
          </span>
          <i className="fas fa-chevron-down text-xs text-gray-400"></i>
        </div>
      </div>
    </div>
  );
}
