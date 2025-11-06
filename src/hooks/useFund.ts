import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fundService,
  type ETF,
  type CreateETFData,
  type UpdateETFData,
} from '@/services/fund';

// 获取所有 ETF 的 Query Key
export const fundKeys = {
  all: ['funds'] as const,
  lists: () => [...fundKeys.all, 'list'] as const,
  list: (filters: string) => [...fundKeys.lists(), { filters }] as const,
  details: () => [...fundKeys.all, 'detail'] as const,
  detail: (id: number) => [...fundKeys.details(), id] as const,
  price: (code: string) => [...fundKeys.all, 'price', code] as const,
};

// 获取所有 ETF
export function useFunds() {
  return useQuery({
    queryKey: fundKeys.lists(),
    queryFn: () => fundService.getAll(),
  });
}

// 根据 ID 获取 ETF
export function useFund(id: number) {
  return useQuery({
    queryKey: fundKeys.detail(id),
    queryFn: () => fundService.getById(id),
    enabled: !!id,
  });
}

// 获取 ETF 价格
export function useFundPrice(code: string) {
  return useQuery({
    queryKey: fundKeys.price(code),
    queryFn: () => fundService.getPrice(code),
    enabled: !!code,
  });
}

// 创建 ETF
export function useCreateFund() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateETFData) => fundService.create(data),
    onSuccess: () => {
      // 创建成功后，刷新列表
      queryClient.invalidateQueries({ queryKey: fundKeys.lists() });
    },
  });
}

// 更新 ETF
export function useUpdateFund() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateETFData }) =>
      fundService.update(id, data),
    onSuccess: (_, variables) => {
      // 更新成功后，刷新列表和详情
      queryClient.invalidateQueries({ queryKey: fundKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: fundKeys.detail(variables.id),
      });
    },
  });
}

// 删除 ETF
export function useDeleteFund() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => fundService.delete(id),
    onSuccess: () => {
      // 删除成功后，刷新列表
      queryClient.invalidateQueries({ queryKey: fundKeys.lists() });
    },
  });
}
