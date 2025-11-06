

export interface TradeData {
  etfCode: string;
  etfName: string;
  action: string;
  amount: string;
  emotionScore: string;
  date: string;
}

export interface FormAnswers {
  'question-1'?: string;
  'question-2'?: string;
  'question-3'?: string[];
  'question-4'?: string;
  'question-5'?: string;
  'question-6'?: string;
  'question-6-detail'?: string;
}

export interface FormData {
  tradeId: string;
  reviewedAt: string;
  answers: FormAnswers;
}

