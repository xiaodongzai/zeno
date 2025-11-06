

import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';

interface ETFData {
  name: string;
  currentPosition: number;
  strategyType: 'core' | 'tactical';
}

interface ConstraintStatus {
  isValid: boolean;
  statusText: string;
  tooltipText: string;
}

const AdjustTargetPositionPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // 状态管理
  const [etfCode, setEtfCode] = useState<string>('510300');
  const [etfName, setEtfName] = useState<string>('沪深300ETF');
  const [currentPosition, setCurrentPosition] = useState<number>(15.00);
  const [newPosition, setNewPosition] = useState<number>(15.00);
  const [strategyType, setStrategyType] = useState<'core' | 'tactical'>('core');
  const [isPositionValid, setIsPositionValid] = useState<boolean>(true);
  const [positionErrorMessage, setPositionErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // 约束检查状态
  const [constraintStatuses, setConstraintStatuses] = useState({
    strategyType: { isValid: true, statusText: '正常', tooltipText: '' } as ConstraintStatus,
    totalPosition: { isValid: true, statusText: '正常', tooltipText: '' } as ConstraintStatus,
    singleETF: { isValid: true, statusText: '正常', tooltipText: '' } as ConstraintStatus
  });

  // 模拟ETF数据
  const etfDataMap: Record<string, ETFData> = {
    '510300': { name: '沪深300ETF', currentPosition: 15.00, strategyType: 'core' },
    '510500': { name: '中证500ETF', currentPosition: 12.50, strategyType: 'tactical' },
    '159915': { name: '创业板ETF', currentPosition: 8.75, strategyType: 'core' },
    '510050': { name: '上证50ETF', currentPosition: 10.25, strategyType: 'core' },
    '513050': { name: '中概互联网ETF', currentPosition: 6.50, strategyType: 'tactical' }
  };

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = '调整目标仓位 - ETF Lab';
    return () => { document.title = originalTitle; };
  }, []);

  // 加载ETF信息
  useEffect(() => {
    const urlEtfCode = searchParams.get('etfCode') || '510300';
    const etfData = etfDataMap[urlEtfCode] || etfDataMap['510300'];
    
    setEtfCode(urlEtfCode);
    setEtfName(etfData.name);
    setCurrentPosition(etfData.currentPosition);
    setNewPosition(etfData.currentPosition);
    setStrategyType(etfData.strategyType);
  }, [searchParams]);

  // 约束检查
  useEffect(() => {
    checkConstraints();
  }, [newPosition, strategyType, currentPosition]);

  // 约束检查函数
  const checkConstraints = () => {
    // 模拟当前仓位数据
    const currentCorePosition = 45.00;
    const currentTacticalPosition = 25.00;
    const currentTotalPosition = 70.00;
    
    // 计算新的仓位
    const positionChange = newPosition - currentPosition;
    const newCorePosition = strategyType === 'core' ? currentCorePosition + positionChange : currentCorePosition;
    const newTacticalPosition = strategyType === 'tactical' ? currentTacticalPosition + positionChange : currentTacticalPosition;
    const newTotalPosition = currentTotalPosition + positionChange;
    
    // 检查策略类型比例约束
    const strategyTypeValid = newCorePosition <= 80 && newTacticalPosition <= 50;
    
    // 检查总仓位约束
    const totalPositionValid = newTotalPosition <= 100;
    
    // 检查单只ETF仓位约束
    const singleETFValid = newPosition <= 30;
    
    // 更新策略类型检查状态
    const strategyTypeStatus = {
      isValid: strategyTypeValid,
      statusText: strategyTypeValid ? '正常' : '超限',
      tooltipText: strategyTypeValid 
        ? `核心仓: ${newCorePosition.toFixed(2)}% / 战术仓: ${newTacticalPosition.toFixed(2)}%`
        : '核心仓或战术仓比例超限'
    };
    
    // 更新总仓位检查状态
    let totalPositionStatusText = '正常';
    if (newTotalPosition > 100) {
      totalPositionStatusText = '超限';
    } else if (newTotalPosition > 95) {
      totalPositionStatusText = '接近上限';
    }
    
    const totalPositionStatus = {
      isValid: totalPositionValid,
      statusText: totalPositionStatusText,
      tooltipText: `总仓位: ${newTotalPosition.toFixed(2)}% / 100%`
    };
    
    // 更新单只ETF检查状态
    const singleETFStatus = {
      isValid: singleETFValid,
      statusText: singleETFValid ? '正常' : '超限',
      tooltipText: singleETFValid 
        ? `仓位: ${newPosition.toFixed(2)}% / 30%`
        : '单只ETF仓位超限'
    };
    
    setConstraintStatuses({
      strategyType: strategyTypeStatus,
      totalPosition: totalPositionStatus,
      singleETF: singleETFStatus
    });
  };

  // 表单验证
  const validateForm = (): boolean => {
    if (isNaN(newPosition) || newPosition < 0 || newPosition > 100) {
      setIsPositionValid(false);
      setPositionErrorMessage('请输入有效的仓位比例');
      return false;
    } else if (newPosition === currentPosition) {
      setIsPositionValid(false);
      setPositionErrorMessage('新仓位与当前仓位相同');
      return false;
    } else {
      setIsPositionValid(true);
      setPositionErrorMessage('');
      return true;
    }
  };

  // 处理新仓位输入
  const handleNewPositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setNewPosition(value);
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const allConstraintsValid = constraintStatuses.strategyType.isValid && 
                               constraintStatuses.totalPosition.isValid && 
                               constraintStatuses.singleETF.isValid;
    
    if (!allConstraintsValid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // 模拟保存操作
    setTimeout(() => {
      navigate('/portfolio');
    }, 1000);
  };

  // 处理关闭弹窗
  const handleClose = () => {
    navigate('/portfolio');
  };

  // 处理背景点击
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // 处理ESC键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 检查是否可以提交
  const canSubmit = isPositionValid && 
                   constraintStatuses.strategyType.isValid && 
                   constraintStatuses.totalPosition.isValid && 
                   constraintStatuses.singleETF.isValid && 
                   newPosition !== currentPosition;

  return (
    <div className={styles.pageWrapper}>
      {/* 模态弹窗背景 */}
      <div 
        className={`fixed inset-0 ${styles.modalBackdrop} flex items-center justify-center z-50 p-4`}
        onClick={handleBackdropClick}
      >
        {/* 调整目标仓位弹窗 */}
        <div className={`bg-white rounded-xl shadow-modal w-full max-w-md ${styles.modalEnter}`}>
          {/* 弹窗头部 */}
          <div className="flex items-center justify-between p-6 border-b border-border-light">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-pie text-primary text-sm"></i>
              </div>
              <h2 className="text-lg font-semibold text-text-primary">调整目标仓位</h2>
            </div>
            <button 
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <i className="fas fa-times text-gray-400 hover:text-gray-600"></i>
            </button>
          </div>

          {/* 弹窗内容区 */}
          <div className="p-6">
            {/* ETF信息展示 */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-text-secondary mb-3">ETF信息</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-secondary">ETF代码</span>
                  <span className="text-sm font-medium text-text-primary">{etfCode}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">ETF名称</span>
                  <span className="text-sm font-medium text-text-primary">{etfName}</span>
                </div>
              </div>
            </div>

            {/* 仓位调整表单 */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 当前目标仓位 */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">当前目标仓位</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={currentPosition.toFixed(2)} 
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-text-primary font-medium"
                    step="0.01" 
                    min="0" 
                    max="100"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary text-sm">%</span>
                </div>
              </div>

              {/* 新目标仓位 */}
              <div>
                <label htmlFor="new-position" className="block text-sm font-medium text-text-secondary mb-2">新目标仓位 *</label>
                <div className="relative">
                  <input 
                    type="number" 
                    id="new-position" 
                    name="new-position" 
                    value={newPosition.toFixed(2)}
                    onChange={handleNewPositionChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${styles.inputFocus}`}
                    step="0.01" 
                    min="0" 
                    max="100" 
                    required
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary text-sm">%</span>
                </div>
                {!isPositionValid && (
                  <p className="text-xs text-danger mt-1">
                    {positionErrorMessage}
                  </p>
                )}
                {isPositionValid && (
                  <p className="text-xs text-text-secondary mt-1">
                    请输入0-100之间的数值，精确到小数点后两位
                  </p>
                )}
              </div>

              {/* 系统约束提示 */}
              <div>
                <h3 className="text-sm font-medium text-text-secondary mb-3">系统约束检查</h3>
                <div className="space-y-3">
                  {/* 核心仓/战术仓比例检查 */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <i className={`fas ${constraintStatuses.strategyType.isValid ? 'fa-check-circle' : 'fa-exclamation-circle'} ${styles.constraintValid}`}></i>
                      <span className="text-sm text-text-secondary">策略类型比例</span>
                    </div>
                    <span 
                      className={`text-sm font-medium ${styles.constraintValid}`}
                      title={constraintStatuses.strategyType.tooltipText}
                    >
                      {constraintStatuses.strategyType.statusText}
                    </span>
                  </div>

                  {/* 总仓位检查 */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <i className={`fas ${constraintStatuses.totalPosition.isValid ? 'fa-exclamation-triangle' : 'fa-exclamation-circle'} ${constraintStatuses.totalPosition.statusText === '接近上限' ? styles.constraintWarning : styles.constraintValid}`}></i>
                      <span className="text-sm text-text-secondary">总仓位限制</span>
                    </div>
                    <span 
                      className={`text-sm font-medium ${constraintStatuses.totalPosition.statusText === '接近上限' ? styles.constraintWarning : styles.constraintValid}`}
                      title={constraintStatuses.totalPosition.tooltipText}
                    >
                      {constraintStatuses.totalPosition.statusText}
                    </span>
                  </div>

                  {/* 单只ETF仓位限制 */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <i className={`fas ${constraintStatuses.singleETF.isValid ? 'fa-check-circle' : 'fa-exclamation-circle'} ${styles.constraintValid}`}></i>
                      <span className="text-sm text-text-secondary">单只ETF限制</span>
                    </div>
                    <span 
                      className={`text-sm font-medium ${styles.constraintValid}`}
                      title={constraintStatuses.singleETF.tooltipText}
                    >
                      {constraintStatuses.singleETF.statusText}
                    </span>
                  </div>
                </div>
                
                {/* 详细约束说明 */}
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <i className="fas fa-info-circle text-info text-sm mt-0.5"></i>
                    <div className="text-sm text-text-secondary space-y-1">
                      <p>• 核心仓总仓位不得超过80%</p>
                      <p>• 单只ETF仓位不得超过30%</p>
                      <p>• 所有ETF仓位总和不得超过100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* 弹窗底部操作按钮 */}
          <div className="flex items-center justify-end space-x-3 p-6 border-t border-border-light bg-gray-50 rounded-b-xl">
            <button 
              type="button" 
              onClick={handleClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-text-secondary hover:bg-gray-100 transition-colors"
            >
              取消
            </button>
            <button 
              type="submit" 
              form="position-adjustment-form"
              onClick={handleSubmit}
              disabled={!canSubmit || isSubmitting}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  保存中...
                </>
              ) : (
                <>
                  <i className="fas fa-save mr-2"></i>
                  保存
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustTargetPositionPage;

