import { axiosInstance } from '@/services/axiosInstance';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
    const { setIsAuthenticated } = useAuth();
    const router = useRouter();

    const logout = async () => {
        try {
            await axiosInstance.post('/logout');
            setIsAuthenticated(false);
            router.push('/');
        } catch (error) {
            throw error;
        }
    };

    return { logout };
};
