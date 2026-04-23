'use client';

import { useState } from 'react';
import axios from "axios"
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";
import api from '@/app/utils/axiosInterceptor';
import { toast } from 'react-toastify';
import { useContext } from "react";
import { AuthContext } from "@/app/context/Authcontext";
import { isLoggedIn } from '@/app/utils/auth';


const notify = () => toast.success("You are successfully logged in");


export default function AuthPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { setIsAuth } = useContext(AuthContext);
    const [formdata, setFormData] = useState({
        email: "",
        password: ""
    })
    const router = useRouter();
    const handleLogin = async (e) => {
        try {
            e.preventDefault();

            const response = await api.post({
                url: isSignIn
                    ? `v1/user/login`
                    : `v1/user/register`,
                data: formdata
            });

            console.log("response", response);

            if (response.success) {
                const token = response.token; // get token from response
                console.log("token", token);
                // Save token in cookie
                Cookies.set("authToken", token, {
                    expires: 1, // 1 day
                    secure: false, // true if using HTTPS (prod)
                    sameSite: "Lax", // helps with cross-origin in dev
                });
                console.log("Toast firing");
                notify();
                setIsAuth(isLoggedIn());
                setTimeout(() => {
                    router.push("/")

                }, 2000);
            }
        } catch (error) {
            console.log("login error", error);

            const message = error.response?.message;

            if (message) {
                toast.error(message);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    }


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {isSignIn ? 'Sign In' : 'Create Account'}
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 px-4">
                        {isSignIn
                            ? 'To unlock your shopping superpowers!'
                            : 'Join us for an amazing shopping adventure!'}
                    </p>
                    <button
                        onClick={() => setIsSignIn(!isSignIn)}
                        className="text-[#CF092D] hover:text-[#CF092D]/80 font-semibold text-sm sm:text-base lg:text-lg transition-colors inline-block hover:underline"
                    >
                        {isSignIn ? 'Create Account' : 'Already have an account? Sign In'}
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-5 sm:space-y-6" onSubmit={handleLogin}>
                    {/* Name Field (Sign Up Only) */}

                    {!isSignIn && (
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                onChange={(e) => setFormData({ ...formdata, name: e.target.value })}
                                placeholder="Enter your name"
                                className="w-full px-3 sm:px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CF092D] focus:border-transparent transition-all text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                            />
                        </div>
                    )}
                    {/* Email Field */}
                    <div>

                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setFormData({ ...formdata, email: e.target.value })}

                            placeholder="Email"
                            className="w-full px-3 sm:px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CF092D] focus:border-transparent transition-all text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                onChange={(e) => setFormData({ ...formdata, password: e.target.value })}

                                className="w-full px-3 sm:px-4 py-3 sm:py-3.5 pr-11 sm:pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CF092D] focus:border-transparent transition-all text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <>
                        {/* Submit Button */}
                        <button
                            // onClick={() => handleLogin()}
                            type="submit"
                            className="w-full bg-[#CF092D] hover:bg-[#CF092D]/80 cursor-pointer active:bg-[#CF092D] text-white font-bold py-3 sm:py-3.5 lg:py-4 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg text-sm sm:text-base lg:text-lg"
                        >
                            {isSignIn ? 'Sign In' : 'Create Account'}
                        </button>
                        {/* Forgot Password (Sign In Only) */}

                    </>
                    {isSignIn && (
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 font-medium underline text-sm sm:text-base transition-colors inline-block"
                            >
                                Forgot Password
                            </a>
                        </div>
                    )}



                </form>

                {/* Form */}


                {/* Terms and Privacy (Sign Up Only) */}
                {!isSignIn && (
                    <p className="text-center text-xs sm:text-sm text-gray-600 mt-6 px-4">
                        By creating an account, you agree to our{' '}
                        <a href="#" className="text-pink-600 hover:underline">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="text-pink-600 hover:underline">Privacy Policy</a>
                    </p>
                )}
            </div>
        </div>
    );
}