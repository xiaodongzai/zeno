// @ts-nocheck
// src/components/ErrorBoundary.tsx

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null; // 保存错误对象本身
}

export class ErrorBoundary extends Component<Props, State> {
  // 1. 初始化 state
  public state: State = {
    hasError: false,
    error: null,
  };

  // 2. 当子组件抛出错误时，这个静态方法会被调用来更新 state
  public static getDerivedStateFromError(error: Error): State {
    // 更新 state，这会导致 UI 重新渲染
    return { hasError: true, error };
  }

  // 3. 在错误被捕获后，这个生命周期方法被调用，适合执行“副作用”，比如记日志
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (!import.meta.env.DEV) {
      return;
    }
    console.log('ErrorBoundary 成功捕获错误，准备发送日志...');
    
    // 将错误发送到 Vite 终端（我们的后端接收站）
    fetch('/log-error-from-frontend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      }),
    }).catch(e => console.error('发送错误日志到 Vite 终端失败', e));
  }

  public render() {
    // 在所有其他情况下（没有错误，或者在开发环境中发生错误），
    // 都继续渲染子组件。
    // - 在开发环境下出错时，重新渲染子组件会让错误再次抛出，从而被 Vite 的浮层捕获。
    // - 在没有错误时，这是正常的渲染路径。
    return this.props.children;
  }
}