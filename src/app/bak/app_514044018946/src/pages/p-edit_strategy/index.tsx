

import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';

interface SignalThresholds {
  valuation: {
    low: number;
    normal: number;
    high: number;
  };
  trend: {
    down: number;
    neutral: number;
    up: number;
  };
  emotion: {
    fear: number;
    cautious: number;
    optimistic: number;
  };
}

interface StrategyData {
  strategyId: string;
  name: string;
  type: 'core' | 'tactical';
  description: string;
  targetAllocation: number;
  signalThresholds: SignalThresholds;
}

interface FormErrors {
  strategyName: boolean;
  strategyType: boolean;
  targetAllocation: boolean;
  strategyDescription: boolean;
}

const EditStrategyPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const strategyId = searchParams.get('strategyId') || 'strategy1';

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const [formData, setFormData] = useState<StrategyData>({
    strategyId,
    name: '',
    type: 'core',
    description: '',
    targetAllocation: 0,
    signalThresholds: {
      valuation: { low: 5.0, normal: 7.0, high: 8.5 },
      trend: { down: 4.0, neutral: 6.0, up: 8.0 },
      emotion: { fear: 3.0, cautious: 5.5, optimistic: 7.5 }
    }
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    strategyName: false,
    strategyType: false,
    targetAllocation: false,
    strategyDescription: false
  });

  // 模拟策略数据
  const mockStrategies: Record<string, Omit<StrategyData, 'strategyId'>> = {
    strategy1: {
      name: '沪深300核心配置',
      type: 'core',
      description: '以沪深300指数为核心的长期配置策略，采用定投方式，在估值较低时增加投入，估值较高时减少投入。\n\n入场条件：PE估值低于历史70%分位\n出场条件：PE估值高于历史90%分位\n风险控制：单月最大投入不超过总资金的10%',
      targetAllocation: 60,
      signalThresholds: {
        valuation: { low: 5.0, normal: 7.0, high: 8.5 },
        trend: { down: 4.0, neutral: 6.0, up: 8.0 },
        emotion: { fear: 3.0, cautious: 5.5, optimistic: 7.5 }
      }
    },
    strategy2: {
      name: '科技板块轮动',
      type: 'tactical',
      description: '基于科技板块景气度的战术轮动策略，关注半导体、5G、人工智能等细分领域。\n\n入场条件：板块指数突破20日均线\n出场条件：板块指数跌破20日均线\n风险控制：单个板块配置不超过战术仓的30%',
      targetAllocation: 25,
      signalThresholds: {
        valuation: { low: 4.5, normal: 6.5, high: 8.0 },
        trend: { down: 3.5, neutral: 5.5, up: 7.5 },
        emotion: { fear: 2.5, cautious: 5.0, optimistic: 7.0 }
      }
    }
  };

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 编辑策略';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // 加载策略数据
  useEffect(() => {
    const strategy = mockStrategies[strategyId];
    if (strategy) {
      setFormData(prev => ({
        ...prev,
        ...strategy,
        strategyId
      }));
    }
  }, [strategyId]);

  // ESC键关闭弹窗
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCloseModal = () => {
    navigate(-1);
  };

  const handleInputChange = (field: keyof StrategyData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // 清除错误状态
    if (field in formErrors) {
      setFormErrors(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const handleSignalThresholdChange = (
    category: keyof SignalThresholds,
    subfield: string,
    value: number
  ) => {
    setFormData(prev => ({
      ...prev,
      signalThresholds: {
        ...prev.signalThresholds,
        [category]: {
          ...prev.signalThresholds[category],
          [subfield]: value
        }
      }
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      strategyName: !formData.name.trim(),
      strategyType: !formData.type,
      targetAllocation: !formData.targetAllocation || formData.targetAllocation < 0 || formData.targetAllocation > 100,
      strategyDescription: !formData.description.trim()
    };

    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // 模拟保存过程
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('保存策略数据:', formData);
      
      setShowSuccessMessage(true);
      
      // 2秒后关闭弹窗
      setTimeout(() => {
        handleCloseModal();
      }, 2000);
    } catch (error) {
      console.error('保存失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputBlur = (field: keyof FormErrors) => {
    let hasError = false;

    switch (field) {
      case 'strategyName':
        hasError = !formData.name.trim();
        break;
      case 'targetAllocation':
        hasError = !formData.targetAllocation || formData.targetAllocation < 0 || formData.targetAllocation > 100;
        break;
      case 'strategyDescription':
        hasError = !formData.description.trim();
        break;
    }

    setFormErrors(prev => ({
      ...prev,
      [field]: hasError
    }));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* 模态弹窗背景 */}
      <div 
        className={`fixed inset-0 ${styles.modalBackdrop} flex items-center justify-center z-50 p-4`}
        onClick={handleBackdropClick}
      >
        {/* 编辑策略弹窗 */}
        <div className="bg-white rounded-xl shadow-modal w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* 弹窗头部 */}
          <div className="flex items-center justify-between p-6 border-b border-border-light">
            <div>
              <h2 className="text-xl font-semibold text-text-primary">编辑策略</h2>
              <p className="text-sm text-text-secondary mt-1">修改投资策略的基本信息和配置</p>
            </div>
            <button 
              onClick={handleCloseModal}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-times text-gray-400 hover:text-gray-600"></i>
            </button>
          </div>

          {/* 弹窗内容区 */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 基本信息区域 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary border-b border-border-light pb-2">基本信息</h3>
                
                {/* 策略名称 */}
                <div className="space-y-2">
                  <label htmlFor="strategy-name" className="block text-sm font-medium text-text-primary">策略名称 *</label>
                  <input 
                    type="text" 
                    id="strategy-name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onBlur={() => handleInputBlur('strategyName')}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${styles.formInputFocus} ${formErrors.strategyName ? 'border-red-500' : ''}`}
                    placeholder="请输入策略名称" 
                    required 
                  />
                  {formErrors.strategyName && (
                    <div className={styles.errorMessage}>策略名称不能为空</div>
                  )}
                </div>

                {/* 策略类型 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-primary">策略类型 *</label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="strategy-type-core" 
                        name="strategy-type" 
                        value="core"
                        checked={formData.type === 'core'}
                        onChange={(e) => handleInputChange('type', e.target.value)}
                        className={`${styles.radioOption} sr-only`} 
                        required 
                      />
                      <label 
                        htmlFor="strategy-type-core"
                        className={`${styles.radioLabel} flex items-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-colors`}
                      >
                        <i className="fas fa-shield-alt text-primary mr-2"></i>
                        <span>核心仓</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="strategy-type-tactical" 
                        name="strategy-type" 
                        value="tactical"
                        checked={formData.type === 'tactical'}
                        onChange={(e) => handleInputChange('type', e.target.value)}
                        className={`${styles.radioOption} sr-only`} 
                        required 
                      />
                      <label 
                        htmlFor="strategy-type-tactical"
                        className={`${styles.radioLabel} flex items-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-colors`}
                      >
                        <i className="fas fa-rocket text-secondary mr-2"></i>
                        <span>战术仓</span>
                      </label>
                    </div>
                  </div>
                  {formErrors.strategyType && (
                    <div className={styles.errorMessage}>请选择策略类型</div>
                  )}
                </div>

                {/* 目标仓位比例 */}
                <div className="space-y-2">
                  <label htmlFor="target-allocation" className="block text-sm font-medium text-text-primary">目标仓位比例 *</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      id="target-allocation"
                      value={formData.targetAllocation}
                      onChange={(e) => handleInputChange('targetAllocation', parseFloat(e.target.value) || 0)}
                      onBlur={() => handleInputBlur('targetAllocation')}
                      className={`w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg ${styles.formInputFocus} ${formErrors.targetAllocation ? 'border-red-500' : ''}`}
                      placeholder="请输入目标仓位比例" 
                      min="0" 
                      max="100" 
                      step="0.1" 
                      required 
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary">%</span>
                  </div>
                  {formErrors.targetAllocation && (
                    <div className={styles.errorMessage}>请输入有效的仓位比例（0-100）</div>
                  )}
                </div>
              </div>

              {/* 策略规则说明 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary border-b border-border-light pb-2">策略规则说明</h3>
                <div className="space-y-2">
                  <label htmlFor="strategy-description" className="block text-sm font-medium text-text-primary">详细规则说明 *</label>
                  <textarea 
                    id="strategy-description"
                    rows={6}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    onBlur={() => handleInputBlur('strategyDescription')}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${styles.formInputFocus} resize-none ${formErrors.strategyDescription ? 'border-red-500' : ''}`}
                    placeholder="请详细描述策略的投资逻辑、入场条件、出场条件、风险控制等规则..." 
                    required
                  />
                  {formErrors.strategyDescription && (
                    <div className={styles.errorMessage}>策略规则说明不能为空</div>
                  )}
                  <div className="text-xs text-text-secondary">
                    <i className="fas fa-info-circle mr-1"></i>
                    建议包含：投资逻辑、入场条件、出场条件、风险控制、适用市场环境等
                  </div>
                </div>
              </div>

              {/* 信号阈值配置 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary border-b border-border-light pb-2">信号阈值配置</h3>
                
                {/* 估值信号 */}
                <div className={`${styles.signalConfigItem} p-4 bg-gray-50 rounded-lg`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-info bg-opacity-10 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chart-pie text-info text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">估值信号</h4>
                        <p className="text-sm text-text-secondary">市场估值水平判断</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-text-secondary">低估阈值</label>
                      <input 
                        type="number"
                        value={formData.signalThresholds.valuation.low}
                        onChange={(e) => handleSignalThresholdChange('valuation', 'low', parseFloat(e.target.value) || 0)}
                        className={`w-full px-3 py-1 border border-gray-300 rounded-md ${styles.formInputFocus} text-sm`}
                        placeholder="5.0" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-text-secondary">合理范围</label>
                      <input 
                        type="number"
                        value={formData.signalThresholds.valuation.normal}
                        onChange={(e) => handleSignalThresholdChange('valuation', 'normal', parseFloat(e.target.value) || 0)}
                        className={`w-full px-3 py-1 border border-gray-300 rounded-md ${styles.formInputFocus} text-sm`}
                        placeholder="7.0" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-text-secondary">高估阈值</label>
                      <input 
                        type="number"
                        value={formData.signalThresholds.valuation.high}
                        onChange={(e) => handleSignalThresholdChange('valuation', 'high', parseFloat(e.target.value) || 0)}
                        className={`w-full px-3 py-1 border border-gray-300 rounded-md ${styles.formInputFocus} text-sm`}
                        placeholder="8.5" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                      />
                    </div>
                  </div>
                </div>

                {/* 趋势信号 */}
                <div className={`${styles.signalConfigItem} p-4 bg-gray-50 rounded-lg`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-tertiary bg-opacity-10 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chart-area text-tertiary text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">趋势信号</h4>
                        <p className="text-sm text-text-secondary">市场整体趋势判断</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-text-secondary">下降趋势</label>
                      <input 
                        type="number"
                        value={formData.signalThresholds.trend.down}
                        onChange={(e) => handleSignalThresholdChange('trend', 'down', parseFloat(e.target.value) || 0)}
                        className={`w-full px-3 py-1 border border-gray-300 rounded-md ${styles.formInputFocus} text-sm`}
                        placeholder="4.0" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-text-secondary">横盘整理</label>
                      <input 
                        type="number"
                        value={formData.signalThresholds.trend.neutral}
                        onChange={(e) => handleSignalThresholdChange('trend', 'neutral', parseFloat(e.target.value) || 0)}
                        className={`w-full px-3 py-1 border border-gray-300 rounded-md ${styles.formInputFocus} text-sm`}
                        placeholder="6.0" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-text-secondary">上升趋势</label>
                      <input 
                        type="number"
                        value={formData.signalThresholds.trend.up}
                        onChange={(e) => handleSignalThresholdChange('trend', 'up', parseFloat(e.target.value) || 0)}
                        className={`w-full px-3 py-1 border border-gray-300 rounded-md ${styles.formInputFocus} text-sm`}
                        placeholder="8.0" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                      />
                    </div>
                  </div>
                </div>

                {/* 情绪信号 */}
                <div className={`${styles.signalConfigItem} p-4 bg-gray-50 rounded-lg`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-danger bg-opacity-10 rounded-lg flex items-center justify-center">
                        <i className="fas fa-heart text-danger text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">情绪信号</h4>
                        <p className="text-sm text-text-secondary">市场情绪指标判断</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-text-secondary">恐慌情绪</label>
                      <input 
                        type="number"
                        value={formData.signalThresholds.emotion.fear}
                        onChange={(e) => handleSignalThresholdChange('emotion', 'fear', parseFloat(e.target.value) || 0)}
                        className={`w-full px-3 py-1 border border-gray-300 rounded-md ${styles.formInputFocus} text-sm`}
                        placeholder="3.0" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-text-secondary">谨慎情绪</label>
                      <input 
                        type="number"
                        value={formData.signalThresholds.emotion.cautious}
                        onChange={(e) => handleSignalThresholdChange('emotion', 'cautious', parseFloat(e.target.value) || 0)}
                        className={`w-full px-3 py-1 border border-gray-300 rounded-md ${styles.formInputFocus} text-sm`}
                        placeholder="5.5" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-text-secondary">乐观情绪</label>
                      <input 
                        type="number"
                        value={formData.signalThresholds.emotion.optimistic}
                        onChange={(e) => handleSignalThresholdChange('emotion', 'optimistic', parseFloat(e.target.value) || 0)}
                        className={`w-full px-3 py-1 border border-gray-300 rounded-md ${styles.formInputFocus} text-sm`}
                        placeholder="7.5" 
                        step="0.1" 
                        min="0" 
                        max="10" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>

            {/* 成功消息 */}
            {showSuccessMessage && (
              <div className={styles.successMessage}>
                <i className="fas fa-check-circle"></i> 策略保存成功！
              </div>
            )}
          </div>

          {/* 弹窗底部 */}
          <div className="flex items-center justify-end space-x-3 p-6 border-t border-border-light bg-gray-50 rounded-b-xl">
            <button 
              type="button"
              onClick={handleCloseModal}
              className="px-6 py-2 border border-gray-300 rounded-lg text-text-primary hover:bg-gray-100 transition-colors"
            >
              取消
            </button>
            <button 
              type="submit"
              form="edit-strategy-form"
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>保存中...</span>
                </>
              ) : (
                <>
                  <i className="fas fa-save"></i>
                  <span>保存策略</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStrategyPage;

