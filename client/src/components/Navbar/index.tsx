import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth } from '@app/context';

export const Navbar: React.FC = () => {
    const { user } = useAuth();

    const logout = () => {
        // logout implementation
    };
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <Link to="/" className="text-white font-bold text-xl">Logo</Link>
                    {user && (
                        <div className="flex gap-4">
                            <Link to="/features" className="text-white hover:text-gray-300">Features</Link>
                            <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                        </div>
                    )}
                </div>
                <div>
                    {user ? (
                        <button onClick={logout} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};
