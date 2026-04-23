"use client";
import { createContext, useEffect, useState } from "react";
import { isLoggedIn } from "../utils/auth";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [IsAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(isLoggedIn());
    }, [])
    return (
        <AuthContext.Provider value={{ IsAuth, setIsAuth }}>

            {children}
        </AuthContext.Provider>
    );
}
