import axios from 'axios';
import { ApiResponse, LoginResponse, Student, ChatApiResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach Authorization header automatically
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('ueh_auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  login: async (studentCode: string): Promise<LoginResponse> => {
    const res = await apiClient.post<ApiResponse<LoginResponse>>('/auth/login', { studentCode });
    if (!res.data.success || !res.data.data) {
      throw new Error(res.data.error || 'Đăng nhập thất bại.');
    }
    return res.data.data;
  },

  logout: async (): Promise<void> => {
    try {
      await apiClient.post('/auth/logout');
    } finally {
      localStorage.removeItem('ueh_auth_token');
      localStorage.removeItem('ueh_student_data');
    }
  },

  getCurrentStudent: async (): Promise<Student> => {
    const res = await apiClient.get<ApiResponse<Student>>('/students/me');
    if (!res.data.success || !res.data.data) {
      throw new Error(res.data.error || 'Không thể lấy thông tin sinh viên.');
    }
    return res.data.data;
  },
};

export const chatApi = {
  sendMessage: async (message: string, studentCode: string): Promise<ChatApiResponse> => {
    const res = await apiClient.post<ApiResponse<ChatApiResponse>>('/chat', {
      message,
      studentCode,
    });
    if (!res.data.success || !res.data.data) {
      throw new Error(res.data.error || 'Lỗi gửi tin nhắn AI.');
    }
    return res.data.data;
  },
};
