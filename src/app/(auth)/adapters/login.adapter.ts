import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { LoginRequest } from '@/app/(auth)/models/LoginRequest';
import { AxiosResponse, AxiosError } from 'axios';

export interface LoginResponse {
  message?: string;
}

export const loginAdapter = {
  async loginUser(payload: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    try {
      const response = await axiosInstance.post('/login', payload, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response;
    } catch (error: unknown) {
      if (error && typeof error === 'object' && (error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<{ error: string }>;
        const message = axiosError.response?.data?.error || 'Ocurrió un error inesperado.';
        throw new Error(message);
      }

      throw new Error('Ocurrió un error inesperado.');
    }
  },
};
