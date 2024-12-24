import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/')
    }

    return (
        <div className='login-container'>
            <h2>Login Page</h2>
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Login
            </button>
        </div>
    )
}
