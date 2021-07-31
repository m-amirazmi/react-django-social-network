import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

export const Home = () => {

    const { logout } = useAuth()
    const { push } = useHistory()

    const handleLogout = () => {
        logout()
        push('/login')
    }

    return (
        <div>
            This is homepage
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}
