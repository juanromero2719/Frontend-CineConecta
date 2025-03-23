import React, { useState } from 'react';
import Input from '@/../components/input';

interface CardLoginProps {
    onSubmit: (email: string, password: string) => void;
}

const CardLogin: React.FC<CardLoginProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);
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
                    className="w-full text-lg bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Ingresar
                </button>
            </form>
        </div>
    );
};

export default CardLogin;