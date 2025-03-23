'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CardLogin_Login from '@/app/(auth)/components/cardLogin_Login';
import CardLogin_Register from '@/app/(auth)/components/cardLogin_Register';

export default function Register() {

  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleTabChange = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-[86vh] flex items-center justify-center bg-ccDarkGray">


      <div className="bg-ccGray p-8 rounded-xl shadow-md w-full max-w-lg border border-ccLightGray">

        <div className="relative flex items-center justify-between px-4 py-1 bg-ccLightGray rounded-lg text-white">
          
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute top-1 bottom-1 left-1 w-1/3 bg-white rounded-lg z-0"
            style={{
              left: activeTab === 'login' ? '10%' : '56%',
              transform: activeTab === 'login' ? 'translateX(2%)' : 'translateX(-40px)',
            }}
          />

          <button
            onClick={() => handleTabChange('login')}
            className={`w-1/2 text-lg py-2 px-4 z-10 transition-colors duration-300 ${
              activeTab === 'login' ? 'text-black ' : 'text-white'
            }`}
          >
            Iniciar sesión
          </button>

          <button
            onClick={() => handleTabChange('register')}
            className={`w-1/2 text-lg py-2 px-4 z-10 transition-colors duration-300 ${
              activeTab === 'register' ? 'text-black' : 'text-white'
            }`}
          >
            Registrarse
          </button>
        </div>

        <div className="mt-6 h-[300px] overflow-hidden">
          {activeTab === 'login' ? (
            <CardLogin_Login
              onSubmit={(email: string, password: string) => {
                console.log('Login:', { email, password });
              }}
            />
          ) : (
            <CardLogin_Register
              onSubmit={(data: { name: string; email: string; password: string }) => {
                console.log('Register:', data);
              }}
            />
          )}
        </div>

      </div>
    </div>
  );
}
