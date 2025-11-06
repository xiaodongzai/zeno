

import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';
import { TradeData, FormAnswers, FormData } from './types';

const ReviewTemplatePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tradeId = searchParams.get('tradeId') || 'default';

  // 表单状态
  const [formAnswers, setFormAnswers] = useState<FormAnswers>({
    'question-3': []
  });

  // 交易数据状态
  const [tradeData, setTradeData] = useState<TradeData>({
    etfCode: '510300',
    etfName: '沪深300ETF',
    action: '买入',
    amount: '¥10,000',
    emotionScore: '7/10',
    date: '2024-01-15 14:30'
  });

  // 提交状态
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 错误状态
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({
    'question-1': false,
    'question-2': false,
    'question-3': false,
    'question-4': false,
    'question-5': false,
    'question-6': false
  });

  // 设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'ETF Lab - 交易复盘';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // 加载交易数据
  useEffect(() => {
    const mockTradeData: Record<string, TradeData> = {
      'trade1': {
        etfCode: '510300',
        etfName: '沪深300ETF',
        action: '买入',
        amount: '¥10,000',
        emotionScore: '7/10',
        date: '2024-01-15 14:30'
      },
      'trade2': {
        etfCode: '510500',
        etfName: '中证500ETF',
        action: '卖出',
        amount: '¥8,500',
        emotionScore: '6/10',
        date: '2024-01-14 09:45'
      },
      'default': {
        etfCode: '510300',
        etfName: '沪深300ETF',
        action: '买入',
        amount: '¥10,000',
        emotionScore: '7/10',
        date: '2024-01-15 14:30'
      }
    };

    const data = mockTradeData[tradeId] || mockTradeData['default'];
    setTradeData(data);
  }, [tradeId]);

  // 表单验证
  const validateForm = (): boolean => {
    const errors: Record<string, boolean> = {};
    let isValid = true;

    // 验证单选题
    const singleChoiceQuestions = ['question-1', 'question-2', 'question-6'];
    singleChoiceQuestions.forEach(questionName => {
      if (!formAnswers[questionName]) {
        errors[questionName] = true;
        isValid = false;
      }
    });

    // 验证多选题
    if (!formAnswers['question-3'] || formAnswers['question-3'].length === 0) {
      errors['question-3'] = true;
      isValid = false;
    }

    // 验证文本框
    const textQuestions = ['question-4', 'question-5'];
    textQuestions.forEach(questionId => {
      if (!formAnswers[questionId]?.trim()) {
        errors[questionId] = true;
        isValid = false;
      }
    });

    setFieldErrors(errors);
    return isValid;
  };

  // 收集表单数据
  const collectFormData = (): FormData => {
    return {
      tradeId: tradeId,
      reviewedAt: new Date().toISOString(),
      answers: formAnswers
    };
  };

  // 处理单选题变化
  const handleSingleChoiceChange = (questionName: string, value: string) => {
    setFormAnswers(prev => ({
      ...prev,
      [questionName]: value
    }));

    // 清除错误状态
    if (fieldErrors[questionName]) {
      setFieldErrors(prev => ({
        ...prev,
        [questionName]: false
      }));
    }

    // 处理问题6的详情显示逻辑
    if (questionName === 'question-6' && value !== '需要优化') {
      setFormAnswers(prev => ({
        ...prev,
        'question-6-detail': ''
      }));
    }
  };

  // 处理多选题变化
  const handleMultiChoiceChange = (value: string, checked: boolean) => {
    const currentValues = formAnswers['question-3'] || [];
    let newValues: string[];

    if (checked) {
      newValues = [...currentValues, value];
    } else {
      newValues = currentValues.filter(v => v !== value);
    }

    setFormAnswers(prev => ({
      ...prev,
      'question-3': newValues
    }));

    // 清除错误状态
    if (fieldErrors['question-3']) {
      setFieldErrors(prev => ({
        ...prev,
        'question-3': false
      }));
    }
  };

  // 处理文本框变化
  const handleTextChange = (questionId: string, value: string) => {
    setFormAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));

    // 清除错误状态
    if (fieldErrors[questionId]) {
      setFieldErrors(prev => ({
        ...prev,
        [questionId]: false
      }));
    }
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = collectFormData();
      setIsSubmitting(true);

      // 模拟提交
      setTimeout(() => {
        navigate('/journal');
      }, 1500);
    }
  };

  // 关闭模态框
  const handleCloseModal = () => {
    navigate(-1);
  };

  // 处理背景点击
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // 处理ESC键
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

  return (
    <div className={styles.pageWrapper}>
      {/* 模态弹窗背景 */}
      <div 
        className={`fixed inset-0 ${styles.modalBackdrop} z-50 flex items-center justify-center p-4`}
        onClick={handleBackdropClick}
      >
        {/* 复盘弹窗 */}
        <div className={`bg-white rounded-xl shadow-modal w-full max-w-2xl max-h-[90vh] overflow-y-auto ${styles.modalEnter}`}>
          {/* 弹窗头部 */}
          <div className="flex items-center justify-between p-6 border-b border-border-light">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-primary"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary">交易复盘</h2>
                <p className="text-sm text-text-secondary">反思交易决策，提升投资水平</p>
              </div>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 交易信息摘要 */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">交易信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-text-secondary">ETF代码</p>
                    <p className="font-semibold text-text-primary">{tradeData.etfCode}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-text-secondary">操作类型</p>
                    <p className={`font-semibold ${tradeData.action === '买入' ? 'text-success' : 'text-danger'}`}>
                      {tradeData.action}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-text-secondary">交易金额</p>
                    <p className="font-semibold text-text-primary">{tradeData.amount}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-text-secondary">情绪打分</p>
                    <p className="font-semibold text-warning">{tradeData.emotionScore}</p>
                  </div>
                </div>
              </div>

              {/* 复盘问题列表 */}
              <div className="space-y-6">
                {/* 问题1：是否符合策略 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-primary">
                    1. 这笔交易是否严格按照预设策略执行？
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['完全符合', '基本符合', '偏离策略'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 p-3 border border-border-light rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input 
                          type="radio" 
                          name="question-1" 
                          value={option} 
                          className="text-primary focus:ring-primary"
                          checked={formAnswers['question-1'] === option}
                          onChange={(e) => handleSingleChoiceChange('question-1', e.target.value)}
                          required 
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                  <div className={`${styles.errorMessage} ${fieldErrors['question-1'] ? styles.errorMessageVisible : ''}`}>
                    请选择一个选项
                  </div>
                </div>

                {/* 问题2：情绪影响 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-primary">
                    2. 情绪因素是否影响了这次交易决策？
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['完全理性', '轻微影响', '严重影响'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 p-3 border border-border-light rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input 
                          type="radio" 
                          name="question-2" 
                          value={option} 
                          className="text-primary focus:ring-primary"
                          checked={formAnswers['question-2'] === option}
                          onChange={(e) => handleSingleChoiceChange('question-2', e.target.value)}
                          required 
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                  <div className={`${styles.errorMessage} ${fieldErrors['question-2'] ? styles.errorMessageVisible : ''}`}>
                    请选择一个选项
                  </div>
                </div>

                {/* 问题3：决策依据 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-primary">
                    3. 交易的主要决策依据是什么？（可多选）
                  </label>
                  <div className="space-y-2">
                    {['技术指标', '基本面分析', '市场情绪', '策略信号', '其他'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 p-3 border border-border-light rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input 
                          type="checkbox" 
                          name="question-3" 
                          value={option} 
                          className="text-primary focus:ring-primary"
                          checked={(formAnswers['question-3'] || []).includes(option)}
                          onChange={(e) => handleMultiChoiceChange(option, e.target.checked)}
                        />
                        <span className="text-sm">{option === '技术指标' ? '技术指标信号' : option === '策略信号' ? '策略预设信号' : option}</span>
                      </label>
                    ))}
                  </div>
                  <div className={`${styles.errorMessage} ${fieldErrors['question-3'] ? styles.errorMessageVisible : ''}`}>
                    请至少选择一个选项
                  </div>
                </div>

                {/* 问题4：预期与结果 */}
                <div className="space-y-2">
                  <label htmlFor="question-4" className="block text-sm font-medium text-text-primary">
                    4. 交易结果是否符合预期？原因是什么？
                  </label>
                  <textarea 
                    id="question-4" 
                    name="question-4" 
                    rows={3}
                    className={`w-full px-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus} resize-none ${styles.requiredField}`}
                    placeholder="请详细描述您的预期和实际结果的差异..."
                    value={formAnswers['question-4'] || ''}
                    onChange={(e) => handleTextChange('question-4', e.target.value)}
                    required
                  />
                  <div className={`${styles.errorMessage} ${fieldErrors['question-4'] ? styles.errorMessageVisible : ''}`}>
                    请填写您的回答
                  </div>
                </div>

                {/* 问题5：改进建议 */}
                <div className="space-y-2">
                  <label htmlFor="question-5" className="block text-sm font-medium text-text-primary">
                    5. 从这次交易中获得了哪些经验教训？下次如何改进？
                  </label>
                  <textarea 
                    id="question-5" 
                    name="question-5" 
                    rows={3}
                    className={`w-full px-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus} resize-none ${styles.requiredField}`}
                    placeholder="总结经验教训，为未来交易提供参考..."
                    value={formAnswers['question-5'] || ''}
                    onChange={(e) => handleTextChange('question-5', e.target.value)}
                    required
                  />
                  <div className={`${styles.errorMessage} ${fieldErrors['question-5'] ? styles.errorMessageVisible : ''}`}>
                    请填写您的回答
                  </div>
                </div>

                {/* 问题6：策略调整 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-primary">
                    6. 是否需要调整相关策略或规则？
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['无需调整', '需要优化'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 p-3 border border-border-light rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input 
                          type="radio" 
                          name="question-6" 
                          value={option} 
                          className="text-primary focus:ring-primary"
                          checked={formAnswers['question-6'] === option}
                          onChange={(e) => handleSingleChoiceChange('question-6', e.target.value)}
                          required 
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                  {formAnswers['question-6'] === '需要优化' && (
                    <div className="mt-3 space-y-2">
                      <label htmlFor="question-6-detail" className="block text-sm font-medium text-text-primary">
                        具体调整建议：
                      </label>
                      <textarea 
                        id="question-6-detail" 
                        name="question-6-detail" 
                        rows={2}
                        className={`w-full px-4 py-3 border border-border-light rounded-lg ${styles.formInputFocus} resize-none`}
                        placeholder="请描述具体的调整建议..."
                        value={formAnswers['question-6-detail'] || ''}
                        onChange={(e) => handleTextChange('question-6-detail', e.target.value)}
                      />
                    </div>
                  )}
                  <div className={`${styles.errorMessage} ${fieldErrors['question-6'] ? styles.errorMessageVisible : ''}`}>
                    请选择一个选项
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* 弹窗底部 */}
          <div className="flex items-center justify-end space-x-3 p-6 border-t border-border-light bg-gray-50 rounded-b-xl">
            <button 
              type="button"
              onClick={handleCloseModal}
              className="px-6 py-2 border border-border-light text-text-secondary rounded-lg hover:bg-white transition-colors"
            >
              取消
            </button>
            <button 
              type="submit" 
              form="review-form"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>提交中...</span>
                </>
              ) : (
                <>
                  <i className="fas fa-check"></i>
                  <span>提交复盘</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTemplatePage;

