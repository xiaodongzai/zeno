// @ts-nocheck

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import './index.css';

window.onerror = function(message, source, lineno, colno, error) {
  console.log('全局 onerror 捕获到错误:', {
    message, // 错误信息 (string)
    source,  // 发生错误的脚本 URL (string)
    lineno,  // 发生错误的行号 (number)
    colno,   // 发生错误的列号 (number)
    error    // 错误对象 (Error)
  });

  if (!import.meta.env.DEV) {
    return;
  }
  // 将错误发送到 Vite 终端（我们的后端接收站）
  fetch('/log-error-from-frontend', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: message,
      stack: `    at: ${source}:${lineno}:${colno}`,
      // componentStack: errorInfo.componentStack,
    }),
  }).catch(e => console.error('发送错误日志到 Vite 终端失败', e));
  return true; 
};

window.addEventListener('unhandledrejection', function(event) {
  // event.reason 通常是导致拒绝的错误对象或值
  console.log('全局 unhandledrejection 捕获到 Promise 错误:', event.reason);

  if (!import.meta.env.DEV) {
    return;
  }
  // 在这里也可以将错误上报
  // fetch('/log-promise-rejection', { body: JSON.stringify({ reason: event.reason.message, stack: event.reason.stack }) });
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
