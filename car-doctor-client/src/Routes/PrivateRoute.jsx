import React from 'react'
import { useAuthContext } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthContext()
    const location = useLocation()


    if (loading) {
        return <div className='w-96 mx-auto py-7'>
            <progress className="progress w-full"></progress>
        </div>
    }

    if (user?.email) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute