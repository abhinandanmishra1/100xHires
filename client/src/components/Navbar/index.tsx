import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth } from '@app/context';

export const Navbar: React.FC = () => {
    const { user } = useAuth();

    const logout = () => {
        // logout implemenatation
    }
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div>
                    <Link to="/" className="text-white">Home</Link>
                    {user && <Link to="/dashboard" className="text-white ml-4">Dashboard</Link>}
                </div>
                <div>
                    {user ? (
                        <button onClick={logout} className="text-white">Logout</button>
                    ) : (
                        <Link to="/login" className="text-white">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};
