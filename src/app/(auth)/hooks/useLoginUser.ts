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
    const userPayload: LoginRequest = { email, password };
    const result = await callEndpoint({
      call: loginAdapter.loginUser(userPayload),
    });

    setLoginData(result.data || null);
    setIsAuthenticated(true);
    router.push('/dashboard');

    return result.data;
  };

  return { loginUser, loading, loginData };
};
