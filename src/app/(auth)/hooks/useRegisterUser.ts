import { useState } from 'react';
import { RegisterAdapter, RegisterResponse } from '@/app/(auth)/adapters/register.adapter';
import useFetchAndLoad from '@/hooks/useFetchAndLoad';
import { RegisterRequest } from '../models/RegisterRequest';

export const useRegisterUser = () => {

  const [registerData, setRegisterData] = useState<RegisterResponse | null>(null);
  const { loading, callEndpoint } = useFetchAndLoad();

  const registerUser = async (name: string, email: string, password: string) => {
    const userPayload: RegisterRequest = { name, email, password };

    const result = await callEndpoint({
      call: RegisterAdapter.registerUser(userPayload),
    });

    setRegisterData(result.data || null);
    return result.data;
  };

  return { registerUser, loading, registerData };
};
