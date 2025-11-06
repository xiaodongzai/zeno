import axiosInstance from '@/lib/axios';

// ETF 相关接口类型定义
export interface ETF {
  id: number;
  code: string;
  name: string;
  category?: string;
  price?: number;
  change?: number;
  updatedAt: string;
  // 通用拓展字段
  [key: string]: any;
}

export interface CreateETFData {
  code: string;
  name: string;
  category?: string;
}

export interface UpdateETFData {
  code?: string;
  name?: string;
  category?: string;
}

// ETF 服务 API
export const fundService = {
  // 获取所有 ETF
  getAll: async (): Promise<ETF[]> => {
    const response = await axiosInstance.get<ETF[]>('/pool');
    return response.data;
  },

  // 根据 ID 获取 ETF
  getById: async (id: number): Promise<ETF> => {
    const response = await axiosInstance.get<ETF>(`/pool/${id}`);
    return response.data;
  },

  // 创建 ETF
  create: async (data: CreateETFData): Promise<ETF> => {
    const response = await axiosInstance.post<ETF>('/pool', data);
    return response.data;
  },

  // 更新 ETF
  update: async (id: number, data: UpdateETFData): Promise<ETF> => {
    const response = await axiosInstance.patch<ETF>(`/pool/${id}`, data);
    return response.data;
  },

  // 删除 ETF
  delete: async (id: number): Promise<ETF> => {
    const response = await axiosInstance.delete<ETF>(`/pool/${id}`);
    return response.data;
  },

  // 获取 ETF 价格信息
  getPrice: async (code: string): Promise<any> => {
    const response = await axiosInstance.get(`/pool/price?code=${code}`);
    return response.data;
  },
};
