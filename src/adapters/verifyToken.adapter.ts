import { axiosInstance } from '@/services/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';

export interface VerifyTokenResponse {
    authenticated: boolean;
    message?: string;
}

export const verifyTokenAdapter = {
    async verifyToken(): Promise<AxiosResponse<VerifyTokenResponse>> {
        try {
            return await axiosInstance.get('/verify-token', {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error: unknown) {
            if (error && typeof error === 'object' && (error as AxiosError).isAxiosError) {
                const axiosError = error as AxiosError<{ error: string }>;
                const message = axiosError.response?.data?.error || 'Error al verificar el token.';
                throw new Error(message);
            }
            throw new Error('Error al verificar el token.');
        }
    },
}; 