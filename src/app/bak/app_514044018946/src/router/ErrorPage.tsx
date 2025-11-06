// src/pages/ErrorPage.tsx
import { useRouteError, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function ErrorPage() {
  const error = useRouteError() as any; // 类型可以更具体
  const navigate = useNavigate();
  console.error(error);

  useEffect(() => {
    if (!import.meta.env.DEV) {
      return;
    }
    console.log('ErrorPage 成功捕获错误，准备发送日志...');
    // 将错误发送到 Vite 终端（我们的后端接收站）
    fetch('/log-error-from-frontend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: error.message || error.statusText,
        stack: error.stack,
      }),
    }).catch(e => console.error('发送错误日志到 Vite 终端失败', e));
  }, [error]);

  const goBack = () => {
    navigate(-1);
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    background: 'linear-gradient(180deg, #f3f5ff 0%, #ffffff 100%)',
    color: '#2d3748',
    textAlign: 'center',
    padding: '1rem',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '8rem',
    fontWeight: '900',
    margin: '0',
    color: '#4a5568',
    textShadow: '0 4px 8px rgba(0,0,0,0.05)',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '500',
    marginTop: '-1rem',
    marginBottom: '1rem',
    color: '#4a5568',
  };

  const subTextStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#718096',
    marginBottom: '2rem',
    maxWidth: '400px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#6366f1',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  };


  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>出错了!</h1>
      <p style={textStyle}>抱歉，发生了错误，页面无法显示。</p>
      <p style={subTextStyle}>
        {error.statusText || error.message}
      </p>
      <button onClick={goBack} style={buttonStyle}>
        返回上一页
      </button>
    </div>
  );
}