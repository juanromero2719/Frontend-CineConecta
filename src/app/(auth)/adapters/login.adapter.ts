
import { axiosInstance } from '@/../services/axiosInstance';
import { LoginRequest } from '@/app/(auth)/models/LoginRequest';
import { AxiosResponse } from 'axios';

export interface LoginResponse {
    message?: string;
    token: string;
}

export const loginAdapter = {
    async loginUser(payload: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
        return axiosInstance.post<LoginResponse>('login', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        );
  },
};
