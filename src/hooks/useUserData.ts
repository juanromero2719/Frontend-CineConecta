import { useEffect, useState } from 'react';
import { userAdapter } from '@/adapters/getUserData.adapter';
import { User } from '@/models/user';

export function useUserData() {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const fetchUserData = async () => {
      try {
        const response = await userAdapter.getUserData();
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError((err as Error).message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
} 