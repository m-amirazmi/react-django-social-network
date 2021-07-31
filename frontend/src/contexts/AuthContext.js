import React, { useContext, useState, useEffect } from "react"
import axios from 'axios'
import { api } from "../utils/apis"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    async function register(credentials) {
        const url = api.register
        const dataRegister = {
            username: credentials.username,
            password1: credentials.password1,
            password2: credentials.password2,
            email: credentials.email
        }
        const { data } = await axios.post(url, dataRegister)

        localStorage.setItem('token', data.key)
        return data.key
    }

    async function login(credentials) {
        const url = api.login
        const dataLogin = {
            email: credentials.email,
            password: credentials.password
        }

        const { data } = await axios.post(url, dataLogin)

        localStorage.setItem('token', data.key)
        return data.key
    }

    async function logout() {
        const url = api.logout
        const { data } = await axios.post(url, {})

        localStorage.removeItem('token')

        return data
    }

    useEffect(() => {

    }, [])

    const value = {
        currentUser,
        login,
        register,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}