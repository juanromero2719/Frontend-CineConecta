import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { RegisterRequest } from '@/app/(auth)/register/models/RegisterRequest';
import { AxiosResponse, AxiosError } from 'axios';

export interface RegisterResponse {
  message: string;
}

export const RegisterAdapter = {
  async registerUser(payload: RegisterRequest): Promise<AxiosResponse<RegisterResponse>> {

    try {
      return await axiosInstance.post('/register', payload);
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
