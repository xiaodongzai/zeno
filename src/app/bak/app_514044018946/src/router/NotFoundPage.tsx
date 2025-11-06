// src/pages/NotFoundPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

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
    fontSize: '10rem',
    fontWeight: '900',
    margin: '0',
    color: '#4a5568',
    textShadow: '0 4px 8px rgba(0,0,0,0.05)',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '500',
    marginTop: '-2rem',
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
      <h1 style={headingStyle}>404</h1>
      <p style={textStyle}>页面未找到</p>
      <p style={subTextStyle}>
        抱歉！您访问的页面不存在，当前页面功能待完善。
      </p>
      <button onClick={goBack} style={buttonStyle}>
        返回上一页
      </button>
    </div>
  );
};

export default NotFoundPage;