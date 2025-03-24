import { useState } from 'react';
import { loginAdapter, LoginResponse } from '@/app/(auth)/adapters/login.adapter';
import useFetchAndLoad from '@/../hooks/useFetchAndLoad';
import { LoginRequest } from '../models/LoginRequest';

export const useLoginUser = () => {
  const [loginData, setLoginData] = useState<LoginResponse | null>(null);
  const { loading, callEndpoint } = useFetchAndLoad();

  const loginUser = async (email: string, password: string) => {
    const userPayload: LoginRequest = { email, password };
    const result = await callEndpoint({
      call: loginAdapter.loginUser(userPayload),
    });
    setLoginData(result.data || null);
    return result.data;
  };

  return { loginUser, loading, loginData };
};
