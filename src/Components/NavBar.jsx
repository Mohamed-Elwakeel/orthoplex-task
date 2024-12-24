import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../Helpers/logout";
import navLogo from "../Assets/navLogo.webp";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    // Hide the navbar on the login page
    if (location.pathname === "/login") {
        return null;
    }

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
                        onClick={() => logout(navigate)}
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}
