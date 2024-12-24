import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { loginUser as loginUserService } from '../Services/loginService';

export const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('access_token');
        const storedEmail = localStorage.getItem('user_email');

        if (storedToken) {
            setAccessToken(storedToken);
            setIsAuthenticated(true);
            setUserEmail(storedEmail);
        }
    }, []);

    async function loginUser(email, password) {
        try {
            const response = await loginUserService(email, password);
            if (response.success) {
                setAccessToken(localStorage.getItem('access_token')); // or response.token
                setUserEmail(localStorage.getItem('user_email'));
                setIsAuthenticated(true);
                toast.success(response.message || 'Login Successful');
            }
            return response;
        } catch (error) {
            toast.error(error.message || 'Something went wrong');
            throw error;
        }
    }

    function logoutUser(navigate) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_email');
        setAccessToken(null);
        setUserEmail(null);
        setIsAuthenticated(false);

        toast.success('Logged out successfully!');
        if (navigate) navigate('/login');
    }

    const value = {
        isAuthenticated,
        accessToken,
        userEmail,
        loginUser,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
