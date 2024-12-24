import React from "react";
import { useNavigate } from "react-router-dom";
import navLogo from "../Assets/navLogo.webp";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const navigate = useNavigate();
    const { logoutUser, isAuthenticated } = useAuth();

    const handleLogout = () => {
        // Use the context-based logout
        logoutUser(navigate);
    };

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
            {/* Logo */}
            <div
                className="flex items-center cursor-pointer"
                onClick={() => navigate("/")}
            >
                <img src={navLogo} alt="Logo" className="h-10 mr-2" />
            </div>

            {/* Buttons */}
            <div className="space-x-4">
                <button
                    className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition"
                    onClick={() => navigate("/")}
                >
                    Home
                </button>
                {!isAuthenticated && (
                    <button
                        className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                )}
                {isAuthenticated && (
                    <button
                        className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}
