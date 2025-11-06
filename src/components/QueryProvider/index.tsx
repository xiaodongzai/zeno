'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 当窗口重新获得焦点时，不自动重新获取数据
            refetchOnWindowFocus: false,
            // 当重新连接时，不自动重新获取数据
            refetchOnReconnect: false,
            // 数据缓存时间（毫秒），默认为 5 分钟
            staleTime: 5 * 60 * 1000,
            // 数据在缓存中保留的时间（毫秒），默认为无限
            gcTime: 10 * 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
