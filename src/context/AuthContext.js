import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const localData = (window.localStorage.getItem("token"))
    const [token, setToken] = useState(localData || '')
    console.log(token);
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}