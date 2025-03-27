'use client';

import React, { useState } from 'react';
import Input from '@/components/input';
import { useLoginUser } from '@/app/(auth)/hooks/useLoginUser';

const CardLogin: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser, loading } = useLoginUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
    } catch { }
  };

  return (
    <div className="bg-transparent px-8 py-2 max-w-md w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Correo electrónico"
            required
          />
        </div>

        <div className="mb-6">
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Contraseña"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full text-lg bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {loading ? 'Cargando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
};

export default CardLogin;
