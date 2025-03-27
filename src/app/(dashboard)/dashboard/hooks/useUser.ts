import { useState, useEffect, useCallback } from 'react';
import { User } from '@/models/user';
import { userAdapter } from '../../../../adapters/user.adapter';
import useFetchAndLoad from '@/hooks/useFetchAndLoad';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const { loading, callEndpoint } = useFetchAndLoad();

    const fetchUsers = useCallback(async () => {
        try {
            const result = await callEndpoint({
                call: userAdapter.getUsers(),
            });
            setUsers(result.data || []);
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                return; // Ignorar errores de cancelación
            }
        }
    }, [callEndpoint]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return { users, loading, fetchUsers };
};