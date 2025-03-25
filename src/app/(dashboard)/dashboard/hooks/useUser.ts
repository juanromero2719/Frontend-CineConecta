import { useState, useEffect } from 'react';
import { User } from '@/../models/user';
import { userAdapter } from '../../../../../adapters/user.adapter';
import useFetchAndLoad from '@/../hooks/useFetchAndLoad';

export const useUsers = () => {
    
    const [users, setUsers] = useState<User[]>([]);
    const { loading, callEndpoint } = useFetchAndLoad();
  
    const fetchUsers = async () => {
      
        const result = await callEndpoint({
            call: userAdapter.getUsers(),
        });
        setUsers(result.data || []);
    };
  
    useEffect(() => {
        fetchUsers();
    }, []);
  
    return { users, loading };
  };