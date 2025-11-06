

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 登录';
    return () => { document.title = originalTitle; };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 简单的表单验证
    if (!formData.username || !formData.password) {
      alert('请输入用户名和密码');
      return;
    }
    
    // 模拟登录请求
    console.log('登录请求:', formData);
    
    // 登录成功后跳转到仪表盘页面
    navigate('/dashboard');
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('忘记密码功能暂未实现');
  };

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('注册功能暂未实现');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className="w-full max-w-md">
        {/* 登录卡片 */}
        <div className={`${styles.loginCard} bg-white rounded-2xl p-8`}>
          {/* Logo和标题 */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-text-primary">ETF Lab</h1>
            <p className="text-text-secondary mt-2">专业的ETF投资分析平台</p>
          </div>
          
          {/* 登录表单 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 用户名/邮箱输入框 */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-text-primary">
                用户名或邮箱
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input 
                  type="text" 
                  id="username" 
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`${styles.inputFocus} block w-full pl-10 pr-3 py-3 border border-border-light rounded-lg`}
                  placeholder="请输入用户名或邮箱" 
                  required 
                />
              </div>
            </div>
            
            {/* 密码输入框 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-text-primary">
                  密码
                </label>
                <button 
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  忘记密码？
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  id="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`${styles.inputFocus} block w-full pl-10 pr-10 py-3 border border-border-light rounded-lg`}
                  placeholder="请输入密码" 
                  required 
                />
                <button 
                  type="button" 
                  onClick={handleTogglePassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-400`}></i>
                </button>
              </div>
            </div>
            
            {/* 记住我选项 */}
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="rememberMe" 
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary border-border-light rounded" 
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-text-secondary">
                记住我
              </label>
            </div>
            
            {/* 登录按钮 */}
            <button 
              type="submit" 
              className={`${styles.btnPrimary} w-full py-3 px-4 rounded-lg font-medium`}
            >
              登录
            </button>
          </form>
          
          {/* 注册账号链接 */}
          <div className="text-center mt-6">
            <p className="text-text-secondary text-sm">
              还没有账号？
              <button 
                type="button"
                onClick={handleRegister}
                className="text-primary font-medium hover:text-primary/80 ml-1"
              >
                立即注册
              </button>
            </p>
          </div>
        </div>
        
        {/* 页脚 */}
        <div className="text-center mt-8 text-text-secondary text-xs">
          <p>© 2023 ETF Lab. 保留所有权利</p>
          <div className="mt-2 space-x-4">
            <button className="hover:text-primary">隐私政策</button>
            <button className="hover:text-primary">服务条款</button>
            <button className="hover:text-primary">帮助中心</button>
          </div>
        </div>
      </div>
    </div>
  );
}

