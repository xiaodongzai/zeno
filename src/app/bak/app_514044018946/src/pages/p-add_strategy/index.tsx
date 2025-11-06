

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface SignalThresholds {
  valuation: {
    low: number | null;
    normal: number | null;
    high: number | null;
  };
  trend: {
    upThreshold: number | null;
    downThreshold: number | null;
  };
  emotion: {
    fearThreshold: number | null;
    greedThreshold: number | null;
  };
}

interface FormData {
  strategyName: string;
  strategyType: 'core' | 'tactical' | '';
  targetAllocation: string;
  strategyDescription: string;
  signalThresholds: SignalThresholds;
}

interface FormErrors {
  strategyName: boolean;
  strategyType: boolean;
  targetAllocation: boolean;
  strategyDescription: boolean;
}

const AddStrategyPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 表单数据状态
  const [formData, setFormData] = useState<FormData>({
    strategyName: '',
    strategyType: '',
    targetAllocation: '',
    strategyDescription: '',
    signalThresholds: {
      valuation: {
        low: null,
        normal: null,
        high: null
      },
      trend: {
        upThreshold: null,
        downThreshold: null
      },
      emotion: {
        fearThreshold: null,
        greedThreshold: null
      }
    }
  });

  // 表单错误状态
  const [formErrors, setFormErrors] = useState<FormErrors>({
    strategyName: false,
    strategyType: false,
    targetAllocation: false,
    strategyDescription: false
  });

  // 信号配置展开状态
  const [expandedSections, setExpandedSections] = useState({
    valuation: false,
    trend: false,
    emotion: false
  });

  // 保存状态
  const [isSaving, setIsSaving] = useState(false);

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 新增策略';
    return () => { document.title = originalTitle; };
  }, []);

  // 处理输入变化
  const handleInputChange = (field: keyof FormData, value: string) => {
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

  // 处理信号阈值变化
  const handleSignalThresholdChange = (
    category: keyof SignalThresholds,
    field: string,
    value: string
  ) => {
    const numValue = value ? parseFloat(value) : null;
    setFormData(prev => ({
      ...prev,
      signalThresholds: {
        ...prev.signalThresholds,
        [category]: {
          ...prev.signalThresholds[category],
          [field]: numValue
        }
      }
    }));
  };

  // 处理输入框失焦验证
  const handleInputBlur = (field: keyof FormErrors) => {
    let hasError = false;

    switch (field) {
      case 'strategyName':
        hasError = !formData.strategyName.trim();
        break;
      case 'strategyType':
        hasError = !formData.strategyType;
        break;
      case 'targetAllocation':
        const allocation = parseFloat(formData.targetAllocation);
        hasError = !formData.targetAllocation || allocation < 1 || allocation > 100;
        break;
      case 'strategyDescription':
        hasError = !formData.strategyDescription.trim();
        break;
    }

    setFormErrors(prev => ({
      ...prev,
      [field]: hasError
    }));
  };

  // 验证表单
  const validateForm = (): boolean => {
    const errors: FormErrors = {
      strategyName: !formData.strategyName.trim(),
      strategyType: !formData.strategyType,
      targetAllocation: !formData.targetAllocation || 
                       parseFloat(formData.targetAllocation) < 1 || 
                       parseFloat(formData.targetAllocation) > 100,
      strategyDescription: !formData.strategyDescription.trim()
    };

    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSaving(true);

    // 构建策略数据
    const strategyData = {
      name: formData.strategyName.trim(),
      type: formData.strategyType,
      description: formData.strategyDescription.trim(),
      targetAllocation: parseFloat(formData.targetAllocation),
      signalThresholds: formData.signalThresholds
    };

    // 模拟保存过程
    setTimeout(() => {
      console.log('策略保存成功:', strategyData);
      navigate('/strategies');
    }, 1500);
  };

  // 关闭模态框
  const handleClose = () => {
    // 检查是否有未保存的更改
    const hasUnsavedChanges = formData.strategyName.trim() ||
                             formData.strategyDescription.trim() ||
                             formData.targetAllocation ||
                             formData.strategyType;

    if (hasUnsavedChanges) {
      if (window.confirm('您有未保存的更改，确定要关闭吗？')) {
        navigate('/strategies');
      }
    } else {
      navigate('/strategies');
    }
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
  }, [formData]);

  // 切换信号配置展开状态
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* 模态弹窗背景 */}
      <div 
        className={`fixed inset-0 ${styles.modalBackdrop} flex items-center justify-center z-50 p-4`}
        onClick={handleBackdropClick}
      >
        {/* 弹窗容器 */}
        <div 
          className="bg-white rounded-xl shadow-modal w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 弹窗头部 */}
          <div className="flex items-center justify-between p-6 border-b border-border-light">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-plus text-primary"></i>
              </div>
              <h2 className="text-xl font-semibold text-text-primary">新增策略</h2>
            </div>
            <button 
              onClick={handleClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-times text-gray-400 hover:text-gray-600"></i>
            </button>
          </div>

          {/* 弹窗内容区 */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 基本信息 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary border-b border-border-light pb-2">基本信息</h3>
                
                {/* 策略名称 */}
                <div className="space-y-2">
                  <label htmlFor="strategy-name" className="block text-sm font-medium text-text-primary">
                    策略名称 <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="strategy-name" 
                    name="strategy-name" 
                    value={formData.strategyName}
                    onChange={(e) => handleInputChange('strategyName', e.target.value)}
                    onBlur={() => handleInputBlur('strategyName')}
                    className={`w-full px-4 py-3 border rounded-lg ${styles.formInputFocus} ${
                      formErrors.strategyName ? 'border-danger' : 'border-gray-300'
                    }`}
                    placeholder="请输入策略名称"
                    required
                  />
                  {formErrors.strategyName && (
                    <div className={styles.errorMessage}>策略名称不能为空</div>
                  )}
                </div>

                {/* 策略类型 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-primary">
                    策略类型 <span className="text-danger">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={styles.radioOption}>
                      <input 
                        type="radio" 
                        id="strategy-type-core" 
                        name="strategy-type" 
                        value="core" 
                        checked={formData.strategyType === 'core'}
                        onChange={(e) => handleInputChange('strategyType', e.target.value)}
                        onBlur={() => handleInputBlur('strategyType')}
                        className="sr-only"
                        required
                      />
                      <label htmlFor="strategy-type-core" className={`${styles.radioLabel} flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer`}>
                        <div className={`${styles.radioIndicator} relative w-5 h-5 border-2 border-gray-300 rounded-full mr-3`}></div>
                        <div className="flex-1">
                          <div className="font-medium text-text-primary">核心仓</div>
                          <div className="text-sm text-text-secondary">长期持有的基础配置</div>
                        </div>
                        <div className="w-8 h-8 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                          <i className="fas fa-home text-primary"></i>
                        </div>
                      </label>
                    </div>
                    
                    <div className={styles.radioOption}>
                      <input 
                        type="radio" 
                        id="strategy-type-tactical" 
                        name="strategy-type" 
                        value="tactical" 
                        checked={formData.strategyType === 'tactical'}
                        onChange={(e) => handleInputChange('strategyType', e.target.value)}
                        onBlur={() => handleInputBlur('strategyType')}
                        className="sr-only"
                        required
                      />
                      <label htmlFor="strategy-type-tactical" className={`${styles.radioLabel} flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer`}>
                        <div className={`${styles.radioIndicator} relative w-5 h-5 border-2 border-gray-300 rounded-full mr-3`}></div>
                        <div className="flex-1">
                          <div className="font-medium text-text-primary">战术仓</div>
                          <div className="text-sm text-text-secondary">短期机会的灵活配置</div>
                        </div>
                        <div className="w-8 h-8 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center">
                          <i className="fas fa-rocket text-secondary"></i>
                        </div>
                      </label>
                    </div>
                  </div>
                  {formErrors.strategyType && (
                    <div className={styles.errorMessage}>请选择策略类型</div>
                  )}
                </div>

                {/* 目标仓位比例 */}
                <div className="space-y-2">
                  <label htmlFor="target-allocation" className="block text-sm font-medium text-text-primary">
                    目标仓位比例 <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="number" 
                      id="target-allocation" 
                      name="target-allocation" 
                      value={formData.targetAllocation}
                      onChange={(e) => handleInputChange('targetAllocation', e.target.value)}
                      onBlur={() => handleInputBlur('targetAllocation')}
                      className={`w-full px-4 py-3 pr-12 border rounded-lg ${styles.formInputFocus} ${
                        formErrors.targetAllocation ? 'border-danger' : 'border-gray-300'
                      }`}
                      placeholder="请输入目标仓位比例"
                      min="1"
                      max="100"
                      step="0.1"
                      required
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary">%</span>
                  </div>
                  {formErrors.targetAllocation && (
                    <div className={styles.errorMessage}>请输入1-100之间的有效数字</div>
                  )}
                  <div className="text-sm text-text-secondary">
                    <i className="fas fa-info-circle mr-1"></i>
                    所有策略的目标仓位比例总和不应超过100%
                  </div>
                </div>
              </div>

              {/* 策略规则说明 */}
              <div className="space-y-2">
                <label htmlFor="strategy-description" className="block text-sm font-medium text-text-primary">
                  策略规则说明 <span className="text-danger">*</span>
                </label>
                <textarea 
                  id="strategy-description" 
                  name="strategy-description" 
                  rows={6}
                  value={formData.strategyDescription}
                  onChange={(e) => handleInputChange('strategyDescription', e.target.value)}
                  onBlur={() => handleInputBlur('strategyDescription')}
                  className={`w-full px-4 py-3 border rounded-lg ${styles.formInputFocus} resize-none ${
                    formErrors.strategyDescription ? 'border-danger' : 'border-gray-300'
                  }`}
                  placeholder="请详细描述策略的投资逻辑、入场条件、出场条件、风险控制等规则..."
                  required
                />
                {formErrors.strategyDescription && (
                  <div className={styles.errorMessage}>策略规则说明不能为空</div>
                )}
                <div className="text-sm text-text-secondary">
                  <i className="fas fa-lightbulb mr-1"></i>
                  建议包含：投资逻辑、入场信号、出场信号、仓位管理、止损止盈等要素
                </div>
              </div>

              {/* 信号阈值配置 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-text-primary border-b border-border-light pb-2">
                  信号阈值配置
                </h3>
                
                {/* 估值信号 */}
                <div className={`${styles.signalConfigItem} pl-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-info bg-opacity-10 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chart-pie text-info"></i>
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">估值信号</div>
                        <div className="text-sm text-text-secondary">PE、PB等估值指标</div>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => toggleSection('valuation')}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <i className={`fas ${expandedSections.valuation ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-400 transform transition-transform`}
                         style={{ transform: expandedSections.valuation ? 'rotate(180deg)' : 'rotate(0deg)' }}></i>
                    </button>
                  </div>
                  
                  {expandedSections.valuation && (
                    <div className="space-y-3 pl-4 border-l-2 border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="valuation-low" className="block text-sm font-medium text-text-secondary mb-1">低估阈值</label>
                          <input 
                            type="number" 
                            id="valuation-low" 
                            name="valuation-low" 
                            value={formData.signalThresholds.valuation.low || ''}
                            onChange={(e) => handleSignalThresholdChange('valuation', 'low', e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${styles.formInputFocus}`}
                            placeholder="5.0"
                            step="0.1"
                            min="0"
                          />
                        </div>
                        <div>
                          <label htmlFor="valuation-normal" className="block text-sm font-medium text-text-secondary mb-1">合理阈值</label>
                          <input 
                            type="number" 
                            id="valuation-normal" 
                            name="valuation-normal" 
                            value={formData.signalThresholds.valuation.normal || ''}
                            onChange={(e) => handleSignalThresholdChange('valuation', 'normal', e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${styles.formInputFocus}`}
                            placeholder="15.0"
                            step="0.1"
                            min="0"
                          />
                        </div>
                        <div>
                          <label htmlFor="valuation-high" className="block text-sm font-medium text-text-secondary mb-1">高估阈值</label>
                          <input 
                            type="number" 
                            id="valuation-high" 
                            name="valuation-high" 
                            value={formData.signalThresholds.valuation.high || ''}
                            onChange={(e) => handleSignalThresholdChange('valuation', 'high', e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${styles.formInputFocus}`}
                            placeholder="25.0"
                            step="0.1"
                            min="0"
                          />
                        </div>
                      </div>
                      <div className="text-sm text-text-secondary">
                        <i className="fas fa-info-circle mr-1"></i>
                        当估值低于"低估阈值"时发出买入信号，高于"高估阈值"时发出卖出信号
                      </div>
                    </div>
                  )}
                </div>

                {/* 趋势信号 */}
                <div className={`${styles.signalConfigItem} pl-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-tertiary bg-opacity-10 rounded-lg flex items-center justify-center">
                        <i className="fas fa-chart-area text-tertiary"></i>
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">趋势信号</div>
                        <div className="text-sm text-text-secondary">移动平均线、MACD等趋势指标</div>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => toggleSection('trend')}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <i className={`fas ${expandedSections.trend ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-400 transform transition-transform`}
                         style={{ transform: expandedSections.trend ? 'rotate(180deg)' : 'rotate(0deg)' }}></i>
                    </button>
                  </div>
                  
                  {expandedSections.trend && (
                    <div className="space-y-3 pl-4 border-l-2 border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="trend-up-threshold" className="block text-sm font-medium text-text-secondary mb-1">上升信号阈值</label>
                          <input 
                            type="number" 
                            id="trend-up-threshold" 
                            name="trend-up-threshold" 
                            value={formData.signalThresholds.trend.upThreshold || ''}
                            onChange={(e) => handleSignalThresholdChange('trend', 'upThreshold', e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${styles.formInputFocus}`}
                            placeholder="8.0"
                            step="0.1"
                            min="0"
                          />
                        </div>
                        <div>
                          <label htmlFor="trend-down-threshold" className="block text-sm font-medium text-text-secondary mb-1">下降信号阈值</label>
                          <input 
                            type="number" 
                            id="trend-down-threshold" 
                            name="trend-down-threshold" 
                            value={formData.signalThresholds.trend.downThreshold || ''}
                            onChange={(e) => handleSignalThresholdChange('trend', 'downThreshold', e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${styles.formInputFocus}`}
                            placeholder="3.0"
                            step="0.1"
                            min="0"
                          />
                        </div>
                      </div>
                      <div className="text-sm text-text-secondary">
                        <i className="fas fa-info-circle mr-1"></i>
                        趋势指标高于"上升阈值"时发出买入信号，低于"下降阈值"时发出卖出信号
                      </div>
                    </div>
                  )}
                </div>

                {/* 情绪信号 */}
                <div className={`${styles.signalConfigItem} pl-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-danger bg-opacity-10 rounded-lg flex items-center justify-center">
                        <i className="fas fa-heart text-danger"></i>
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">情绪信号</div>
                        <div className="text-sm text-text-secondary">市场情绪、恐惧贪婪指数等</div>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => toggleSection('emotion')}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <i className={`fas ${expandedSections.emotion ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-400 transform transition-transform`}
                         style={{ transform: expandedSections.emotion ? 'rotate(180deg)' : 'rotate(0deg)' }}></i>
                    </button>
                  </div>
                  
                  {expandedSections.emotion && (
                    <div className="space-y-3 pl-4 border-l-2 border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="emotion-fear-threshold" className="block text-sm font-medium text-text-secondary mb-1">恐惧阈值</label>
                          <input 
                            type="number" 
                            id="emotion-fear-threshold" 
                            name="emotion-fear-threshold" 
                            value={formData.signalThresholds.emotion.fearThreshold || ''}
                            onChange={(e) => handleSignalThresholdChange('emotion', 'fearThreshold', e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${styles.formInputFocus}`}
                            placeholder="3.0"
                            step="0.1"
                            min="0"
                          />
                        </div>
                        <div>
                          <label htmlFor="emotion-greed-threshold" className="block text-sm font-medium text-text-secondary mb-1">贪婪阈值</label>
                          <input 
                            type="number" 
                            id="emotion-greed-threshold" 
                            name="emotion-greed-threshold" 
                            value={formData.signalThresholds.emotion.greedThreshold || ''}
                            onChange={(e) => handleSignalThresholdChange('emotion', 'greedThreshold', e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${styles.formInputFocus}`}
                            placeholder="7.0"
                            step="0.1"
                            min="0"
                          />
                        </div>
                      </div>
                      <div className="text-sm text-text-secondary">
                        <i className="fas fa-info-circle mr-1"></i>
                        情绪指标低于"恐惧阈值"时发出买入信号，高于"贪婪阈值"时发出卖出信号
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* 弹窗底部 */}
          <div className="flex items-center justify-end space-x-3 p-6 border-t border-border-light bg-gray-50 rounded-b-xl">
            <button 
              type="button" 
              onClick={handleClose}
              className="px-6 py-3 border border-gray-300 rounded-lg text-text-primary hover:bg-gray-100 transition-colors"
            >
              取消
            </button>
            <button 
              type="submit" 
              onClick={handleSubmit}
              disabled={isSaving}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
            >
              {isSaving ? (
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

export default AddStrategyPage;

