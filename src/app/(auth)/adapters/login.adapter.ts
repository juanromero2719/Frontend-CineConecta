import '@/../interceptors/axiosInterceptor';
import { axiosInstance } from '@/../services/axiosInstance';
import { LoginRequest } from '@/app/(auth)/models/LoginRequest';
import { AxiosResponse } from 'axios';

export interface LoginResponse {
  token: string;
  message?: string;
}

export const loginAdapter = {
  async loginUser(payload: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    try {
      return await axiosInstance.post('/login', payload);
    } catch (error: any) {
      const message =
        error?.response?.data?.message || 'Ocurrió un error inesperado.';
      throw new Error(message); 
    }
  },
};