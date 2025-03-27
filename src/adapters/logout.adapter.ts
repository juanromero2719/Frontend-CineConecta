import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';

export interface LogoutResponse {
    message?: string;
}

export const logoutAdapter = {
    async logout(): Promise<AxiosResponse<LogoutResponse>> {
        try {
            return await axiosInstance.post('/logout');
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
