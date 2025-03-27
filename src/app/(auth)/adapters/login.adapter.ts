import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { LoginRequest } from '@/app/(auth)/models/LoginRequest';
import { AxiosResponse, AxiosError } from 'axios';
import { setCookie } from '@/utilities/cookies';

export interface LoginResponse {
  token?: string;
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

      if (response.data?.token) {
        // Asegurarnos de que la cookie se establezca antes de continuar
        setCookie('cine_token', response.data.token, 1);
        // Pequeña pausa para asegurar que la cookie se establezca
        await new Promise(resolve => setTimeout(resolve, 100));
      }

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
