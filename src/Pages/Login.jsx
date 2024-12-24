import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Services/loginService';
import { toast } from 'react-toastify';
import CredentialsCard from '../Components/CredentialsCard';

export default function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await loginUser(data.email, data.password);
            if (response.success) {
                toast.success(response.message || "Login Successful");
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong");
        }
    };

    return (
        <div className="custom-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Card Container */}
            <div className="bg-white p-12 rounded-3xl shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
                <p className="mb-6 text-gray-600">Enter your credentials to log in.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className={`border rounded w-full p-2 focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@]+@[^@]+\.[^@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className={`border rounded w-full p-2 focus:outline-none ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                        >
                            {isSubmitting ? "Logging in..." : "Log In"}
                        </button>
                    </div>
                </form>
            </div>
            <CredentialsCard />
        </div>
    );
}
