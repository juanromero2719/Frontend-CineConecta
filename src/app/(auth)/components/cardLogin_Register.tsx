'use client';

import React, { useState } from 'react';
import Input from '@/../components/input';
import { useRegisterUser } from '@/app/(auth)/hooks/useRegisterUser';

interface CardLoginRegisterProps {
    onSubmit: (data: { name: string; email: string; password: string }) => void;
}

const CardLoginRegister: React.FC<CardLoginRegisterProps> = () => {

    const { registerUser, loading } = useRegisterUser();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await registerUser(formData.name, formData.email, formData.password);

        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error('Error al iniciar sesión:', error.message);
          } else {
            console.error('Error desconocido al registrarse');
          }
        }
      };

    return (
        <div className="max-w-md w-full mx-auto bg-transparent rounded-lg  px-8 py-2">
  
            <form onSubmit={handleSubmit}>
                <div className="mb-4">

                    <Input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        label="Nombre de usuario"
                        required
                    />

                </div>

                <div className="mb-4">

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Correo electrónico"
                        required
                    />

                </div>
                <div className="mb-6">

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        label="Contraseña"
                        required
                    />

                </div>
                
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full text-lg bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                    {loading ? 'Cargando...' : 'Registrarse'}
                </button>

            </form>
        </div>
    );
};

export default CardLoginRegister;