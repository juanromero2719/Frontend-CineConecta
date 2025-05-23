import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';
import { CreateCommentRequest } from '@/app/(dashboard)/movie/[title]/models/createComment.models';


export interface CreateCommentResponse {
  token?: string;
  message?: string;
}

export const createCommentAdapter = {
  async createComment(payload: CreateCommentRequest): Promise<AxiosResponse<CreateCommentResponse>> {
    try {
      const response = await axiosInstance.post('/comments/', payload, {
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
