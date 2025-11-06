import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

// 创建 axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 可以在这里添加 token 等认证信息
    // const token = localStorage.getItem('token');
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // 统一错误处理
    if (error.response) {
      // 服务器返回了错误状态码
      const { status, data } = error.response;
      console.error('API Error:', status, data);

      // 可以根据状态码进行不同的处理
      switch (status) {
        case 401:
          // 未授权，可能需要跳转到登录页
          // window.location.href = '/login';
          break;
        case 403:
          // 无权限
          break;
        case 404:
          // 资源不存在
          break;
        case 500:
          // 服务器错误
          break;
        default:
          break;
      }
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('Network Error:', error.request);
    } else {
      // 在设置请求时发生了错误
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
