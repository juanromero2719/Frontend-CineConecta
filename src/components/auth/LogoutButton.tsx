import { ArrowRight } from 'lucide-react';
import { useLogout } from '@/hooks/useLogout';

export const LogoutButton = () => {
  const { logout } = useLogout();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    await logout().catch(console.error);
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 border border-white/40 text-white rounded-md hover:border-white hover:bg-white/10 transition-all duration-200 text-lg"
    >
      <ArrowRight className="w-4 h-4" />
      <span className="text-sm font-medium">Cerrar Sesión</span>
    </button>
  );
};
