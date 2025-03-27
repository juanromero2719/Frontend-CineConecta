import { useState } from 'react';
import { loginAdapter, LoginResponse } from '@/app/(auth)/adapters/login.adapter';
import useFetchAndLoad from '@/hooks/useFetchAndLoad';
import { LoginRequest } from '../models/LoginRequest';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export const useLoginUser = () => {
  const [loginData, setLoginData] = useState<LoginResponse | null>(null);
  const { loading, callEndpoint } = useFetchAndLoad();
  const { setIsAuthenticated } = useAuth();
  const router = useRouter();

  const loginUser = async (email: string, password: string) => {
    try {
      const userPayload: LoginRequest = { email, password };
      const result = await callEndpoint({
        call: loginAdapter.loginUser(userPayload),
      });

      if (result.data) {
        setLoginData(result.data);
        setIsAuthenticated(true);
        router.push('/dashboard');
        return result.data;
      }
      throw new Error('No se recibieron datos del servidor');
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  };

  return { loginUser, loading, loginData };
};
