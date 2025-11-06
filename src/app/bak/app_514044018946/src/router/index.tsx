import { createBrowserRouter, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';

import P_dashboard from '../pages/p-dashboard';
import P_strategies from '../pages/p-strategies';
import P_strategy_detail from '../pages/p-strategy_detail';
import P_portfolio from '../pages/p-portfolio';
import P_journal from '../pages/p-journal';
import P_review from '../pages/p-review';
import P_mind from '../pages/p-mind';
import P_add_trade from '../pages/p-add_trade';
import P_add_strategy from '../pages/p-add_strategy';
import P_edit_strategy from '../pages/p-edit_strategy';
import P_review_template from '../pages/p-review_template';
import P_adjust_target_position from '../pages/p-adjust_target_position';
import P_login from '../pages/p-login';
import P_etf_pool_management from '../pages/p-etf_pool_management';
import NotFoundPage from './NotFoundPage';
import ErrorPage from './ErrorPage';

function Listener() {
  const location = useLocation();
  useEffect(() => {
    const pageId = 'P-' + location.pathname.replace('/', '').toUpperCase();
    console.log('当前pageId:', pageId, ', pathname:', location.pathname, ', search:', location.search);
    if (typeof window === 'object' && window.parent && window.parent.postMessage) {
      window.parent.postMessage({
        type: 'chux-path-change',
        pageId: pageId,
        pathname: location.pathname,
        search: location.search,
      }, '*');
    }
  }, [location]);

  return <Outlet />;
}

// 使用 createBrowserRouter 创建路由实例
const router = createBrowserRouter([
  {
    path: '/',
    element: <Listener />,
    children: [
      {
    path: '/',
    element: <Navigate to='/dashboard' replace={true} />,
  },
      {
    path: '/dashboard',
    element: (
      <ErrorBoundary>
        <P_dashboard />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/strategies',
    element: (
      <ErrorBoundary>
        <P_strategies />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/strategy-detail',
    element: (
      <ErrorBoundary>
        <P_strategy_detail />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/portfolio',
    element: (
      <ErrorBoundary>
        <P_portfolio />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/journal',
    element: (
      <ErrorBoundary>
        <P_journal />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/review',
    element: (
      <ErrorBoundary>
        <P_review />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/mind',
    element: (
      <ErrorBoundary>
        <P_mind />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/add-trade',
    element: (
      <ErrorBoundary>
        <P_add_trade />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/add-strategy',
    element: (
      <ErrorBoundary>
        <P_add_strategy />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/edit-strategy',
    element: (
      <ErrorBoundary>
        <P_edit_strategy />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/review-template',
    element: (
      <ErrorBoundary>
        <P_review_template />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/adjust-target-position',
    element: (
      <ErrorBoundary>
        <P_adjust_target_position />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/login',
    element: (
      <ErrorBoundary>
        <P_login />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '/etf-pool-management',
    element: (
      <ErrorBoundary>
        <P_etf_pool_management />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
      {
    path: '*',
    element: <NotFoundPage />,
  },
    ]
  }
]);

export default router;