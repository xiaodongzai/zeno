

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface FormData {
  etfCode: string;
  actionType: string;
  emotionScore: string;
  amount: string;
  quantity: string;
  price: string;
  strategy: string;
  reason: string;
  tradeDate: string;
}

interface FormErrors {
  etfCode: boolean;
  actionType: boolean;
  emotionScore: boolean;
  amount: boolean;
  quantity: boolean;
  price: boolean;
  strategy: boolean;
  reason: boolean;
}

interface ErrorMessages {
  etfCode: string;
  actionType: string;
  emotionScore: string;
  amount: string;
  quantity: string;
  price: string;
  strategy: string;
  reason: string;
}

const AddTradePage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    etfCode: '',
    actionType: '',
    emotionScore: '',
    amount: '',
    quantity: '',
    price: '',
    strategy: '',
    reason: '',
    tradeDate: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    etfCode: false,
    actionType: false,
    emotionScore: false,
    amount: false,
    quantity: false,
    price: false,
    strategy: false,
    reason: false
  });

  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    etfCode: '请输入有效的ETF代码（至少5位字母或数字）',
    actionType: '请选择操作类型',
    emotionScore: '请选择情绪打分',
    amount: '请输入有效的交易金额（大于0）',
    quantity: '请输入有效的交易数量（大于0）',
    price: '请输入有效的交易价格（大于0）',
    strategy: '请选择关联策略',
    reason: '请输入详细的交易理由（至少10个字符）'
  });

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 新增交易';
    return () => { document.title = originalTitle; };
  }, []);

  // 预设当前时间
  useEffect(() => {
    const now = new Date();
    const dateTimeString = now.toISOString().slice(0, 16);
    setFormData(prev => ({ ...prev, tradeDate: dateTimeString }));
  }, []);

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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEmotionScoreSelect = (score: string) => {
    setFormData(prev => ({ ...prev, emotionScore: score }));
    clearFieldError('emotionScore');
  };

  const validateField = (field: keyof FormData, value: string): boolean => {
    let isValid = false;
    let errorMessage = '';

    switch (field) {
      case 'etfCode':
        isValid = value.trim().length >= 5 && /^[0-9a-zA-Z]+$/.test(value);
        errorMessage = '请输入有效的ETF代码（至少5位字母或数字）';
        break;
      case 'actionType':
        isValid = value !== '';
        errorMessage = '请选择操作类型';
        break;
      case 'emotionScore':
        isValid = value !== '';
        errorMessage = '请选择情绪打分';
        break;
      case 'amount':
        isValid = parseFloat(value) > 0;
        errorMessage = '请输入有效的交易金额（大于0）';
        break;
      case 'quantity':
        isValid = parseFloat(value) > 0;
        errorMessage = '请输入有效的交易数量（大于0）';
        break;
      case 'price':
        isValid = parseFloat(value) > 0;
        errorMessage = '请输入有效的交易价格（大于0）';
        break;
      case 'strategy':
        isValid = value !== '';
        errorMessage = '请选择关联策略';
        break;
      case 'reason':
        isValid = value.trim().length >= 10;
        errorMessage = '请输入详细的交易理由（至少10个字符）';
        break;
      default:
        isValid = true;
    }

    setFormErrors(prev => ({ ...prev, [field]: !isValid }));
    if (!isValid) {
      setErrorMessages(prev => ({ ...prev, [field]: errorMessage }));
    }

    return isValid;
  };

  const clearFieldError = (field: keyof FormData) => {
    setFormErrors(prev => ({ ...prev, [field]: false }));
  };

  const handleFieldBlur = (field: keyof FormData) => {
    validateField(field, formData[field]);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 验证所有必填字段
    const isETFCodeValid = validateField('etfCode', formData.etfCode);
    const isActionTypeValid = validateField('actionType', formData.actionType);
    const isEmotionScoreValid = validateField('emotionScore', formData.emotionScore);
    const isAmountValid = validateField('amount', formData.amount);
    const isQuantityValid = validateField('quantity', formData.quantity);
    const isPriceValid = validateField('price', formData.price);
    const isStrategyValid = validateField('strategy', formData.strategy);
    const isReasonValid = validateField('reason', formData.reason);

    // 如果所有验证通过
    if (isETFCodeValid && isActionTypeValid && isEmotionScoreValid && 
        isAmountValid && isQuantityValid && isPriceValid && 
        isStrategyValid && isReasonValid) {
      
      setIsSubmitting(true);
      
      // 模拟保存交易
      setTimeout(() => {
        navigate('/journal');
      }, 1500);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const emotionOptions = [
    { score: '1', icon: 'fas fa-angry', iconColor: 'text-danger', label: '冲动' },
    { score: '2', icon: 'fas fa-frown', iconColor: 'text-warning', label: '紧张' },
    { score: '3', icon: 'fas fa-meh', iconColor: 'text-info', label: '平静' },
    { score: '4', icon: 'fas fa-smile', iconColor: 'text-secondary', label: '冷静' },
    { score: '5', icon: 'fas fa-laugh', iconColor: 'text-success', label: '理性' }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* 模态弹窗背景 */}
      <div 
        className={`fixed inset-0 ${styles.modalBackdrop} z-50 flex items-center justify-center p-4`}
        onClick={handleBackdropClick}
      >
        {/* 弹窗主体 */}
        <div className="bg-white rounded-xl shadow-modal w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          {/* 弹窗头部 */}
          <div className="flex items-center justify-between p-6 border-b border-border-light">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-exchange-alt text-primary"></i>
              </div>
              <h2 className="text-xl font-semibold text-text-primary">新增交易</h2>
            </div>
            <button 
              onClick={handleCloseModal}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-times text-gray-400 hover:text-gray-600"></i>
            </button>
          </div>

          {/* 弹窗内容 */}
          <div className="p-6">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* ETF代码 */}
              <div className={`form-group ${formErrors.etfCode ? styles.formGroupError : ''}`}>
                <label htmlFor="etf-code" className="block text-sm font-medium text-text-primary mb-2">
                  ETF代码 <span className="text-danger">*</span>
                </label>
                <input 
                  type="text" 
                  id="etf-code" 
                  name="etf-code"
                  value={formData.etfCode}
                  onChange={(e) => handleInputChange('etfCode', e.target.value)}
                  onBlur={() => handleFieldBlur('etfCode')}
                  className={`w-full px-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus}`}
                  placeholder="如：510050" 
                  required 
                />
                <p className={`${styles.errorMessage} ${formErrors.etfCode ? styles.errorMessageShow : ''} text-sm text-danger mt-1`}>
                  {errorMessages.etfCode}
                </p>
              </div>

              {/* 操作类型和情绪打分 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 操作类型 */}
                <div className={`form-group ${formErrors.actionType ? styles.formGroupError : ''}`}>
                  <label htmlFor="action-type" className="block text-sm font-medium text-text-primary mb-2">
                    操作类型 <span className="text-danger">*</span>
                  </label>
                  <select 
                    id="action-type" 
                    name="action-type"
                    value={formData.actionType}
                    onChange={(e) => handleInputChange('actionType', e.target.value)}
                    onBlur={() => handleFieldBlur('actionType')}
                    className={`w-full px-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus}`}
                    required
                  >
                    <option value="">请选择操作类型</option>
                    <option value="buy">买入</option>
                    <option value="sell">卖出</option>
                  </select>
                  <p className={`${styles.errorMessage} ${formErrors.actionType ? styles.errorMessageShow : ''} text-sm text-danger mt-1`}>
                    {errorMessages.actionType}
                  </p>
                </div>

                {/* 情绪打分 */}
                <div className={`form-group ${formErrors.emotionScore ? styles.formGroupError : ''}`}>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    情绪打分 <span className="text-danger">*</span>
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {emotionOptions.map((option) => (
                      <button 
                        key={option.score}
                        type="button" 
                        onClick={() => handleEmotionScoreSelect(option.score)}
                        className={`${styles.emotionOption} p-3 border border-border-light rounded-lg text-center ${
                          formData.emotionScore === option.score ? styles.emotionOptionSelected : ''
                        }`}
                      >
                        <i className={`${option.icon} ${option.iconColor} text-lg mb-1`}></i>
                        <div className="text-xs">{option.label}</div>
                      </button>
                    ))}
                  </div>
                  <p className={`${styles.errorMessage} ${formErrors.emotionScore ? styles.errorMessageShow : ''} text-sm text-danger mt-1`}>
                    {errorMessages.emotionScore}
                  </p>
                </div>
              </div>

              {/* 交易金额和数量 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 交易金额 */}
                <div className={`form-group ${formErrors.amount ? styles.formGroupError : ''}`}>
                  <label htmlFor="amount" className="block text-sm font-medium text-text-primary mb-2">
                    交易金额 <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary">¥</span>
                    <input 
                      type="number" 
                      id="amount" 
                      name="amount" 
                      step="0.01" 
                      min="0"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      onBlur={() => handleFieldBlur('amount')}
                      className={`w-full pl-8 pr-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus}`}
                      placeholder="0.00" 
                      required 
                    />
                  </div>
                  <p className={`${styles.errorMessage} ${formErrors.amount ? styles.errorMessageShow : ''} text-sm text-danger mt-1`}>
                    {errorMessages.amount}
                  </p>
                </div>

                {/* 交易数量 */}
                <div className={`form-group ${formErrors.quantity ? styles.formGroupError : ''}`}>
                  <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-2">
                    交易数量 <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="quantity" 
                    name="quantity" 
                    step="0.001" 
                    min="0"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    onBlur={() => handleFieldBlur('quantity')}
                    className={`w-full px-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus}`}
                    placeholder="0.000" 
                    required 
                  />
                  <p className={`${styles.errorMessage} ${formErrors.quantity ? styles.errorMessageShow : ''} text-sm text-danger mt-1`}>
                    {errorMessages.quantity}
                  </p>
                </div>
              </div>

              {/* 交易价格 */}
              <div className={`form-group ${formErrors.price ? styles.formGroupError : ''}`}>
                <label htmlFor="price" className="block text-sm font-medium text-text-primary mb-2">
                  交易价格 <span className="text-danger">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary">¥</span>
                  <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    step="0.001" 
                    min="0"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    onBlur={() => handleFieldBlur('price')}
                    className={`w-full pl-8 pr-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus}`}
                    placeholder="0.000" 
                    required 
                  />
                </div>
                <p className={`${styles.errorMessage} ${formErrors.price ? styles.errorMessageShow : ''} text-sm text-danger mt-1`}>
                  {errorMessages.price}
                </p>
              </div>

              {/* 关联策略 */}
              <div className={`form-group ${formErrors.strategy ? styles.formGroupError : ''}`}>
                <label htmlFor="strategy" className="block text-sm font-medium text-text-primary mb-2">
                  关联策略 <span className="text-danger">*</span>
                </label>
                <select 
                  id="strategy" 
                  name="strategy"
                  value={formData.strategy}
                  onChange={(e) => handleInputChange('strategy', e.target.value)}
                  onBlur={() => handleFieldBlur('strategy')}
                  className={`w-full px-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus}`}
                  required
                >
                  <option value="">请选择关联策略</option>
                  <option value="strategy-1">沪深300核心策略</option>
                  <option value="strategy-2">中证500增强策略</option>
                  <option value="strategy-3">创业板波段策略</option>
                  <option value="strategy-4">国债ETF避险策略</option>
                </select>
                <p className={`${styles.errorMessage} ${formErrors.strategy ? styles.errorMessageShow : ''} text-sm text-danger mt-1`}>
                  {errorMessages.strategy}
                </p>
              </div>

              {/* 交易理由 */}
              <div className={`form-group ${formErrors.reason ? styles.formGroupError : ''}`}>
                <label htmlFor="reason" className="block text-sm font-medium text-text-primary mb-2">
                  交易理由 <span className="text-danger">*</span>
                </label>
                <textarea 
                  id="reason" 
                  name="reason" 
                  rows={4}
                  value={formData.reason}
                  onChange={(e) => handleInputChange('reason', e.target.value)}
                  onBlur={() => handleFieldBlur('reason')}
                  className={`w-full px-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus} resize-none`}
                  placeholder="请详细描述本次交易的理由，包括市场分析、策略依据等..." 
                  required
                />
                <p className={`${styles.errorMessage} ${formErrors.reason ? styles.errorMessageShow : ''} text-sm text-danger mt-1`}>
                  {errorMessages.reason}
                </p>
              </div>

              {/* 交易时间 */}
              <div className="form-group">
                <label htmlFor="trade-date" className="block text-sm font-medium text-text-primary mb-2">
                  交易时间
                </label>
                <input 
                  type="datetime-local" 
                  id="trade-date" 
                  name="trade-date"
                  value={formData.tradeDate}
                  onChange={(e) => handleInputChange('tradeDate', e.target.value)}
                  className={`w-full px-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus}`}
                />
                <p className="text-xs text-text-secondary mt-1">默认为当前时间</p>
              </div>
            </form>
          </div>

          {/* 弹窗底部 */}
          <div className="flex items-center justify-end space-x-3 p-6 border-t border-border-light bg-gray-50 rounded-b-xl">
            <button 
              type="button" 
              onClick={handleCloseModal}
              className="px-6 py-3 border border-border-light rounded-lg text-text-secondary hover:bg-gray-100 transition-colors"
            >
              取消
            </button>
            <button 
              type="submit" 
              form="add-trade-form"
              onClick={handleFormSubmit}
              disabled={isSubmitting}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>保存中...</span>
                </>
              ) : (
                <>
                  <i className="fas fa-save"></i>
                  <span>保存交易</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTradePage;

