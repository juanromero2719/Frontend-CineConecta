'use client';

import React from 'react';
import { useUsers } from '@/app/(dashboard)/dashboard/hooks/useUser';

const DashboardUsers: React.FC = () => {
    const { users, loading } = useUsers();

    return (
        <div className="dashboard-users text-white">
            <h2>Dashboard Users</h2>
            <div className="users-container">
                {loading ? (
                    <p>Cargando usuarios...</p>
                ) : users.length > 0 ? (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                <strong>{user.name}</strong> - {user.email}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No se encontraron usuarios.</p>
                )}
            </div>
        </div>
    );
};

export default DashboardUsers;