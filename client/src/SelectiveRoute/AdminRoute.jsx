import React from 'react'
import { isAuthenticated } from '../API/authApi'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
  return (
    <div>
         {
            isAuthenticated() && isAuthenticated().user.isAdmin ? (
                <Outlet/>
            ):
            <Navigate to={"/signin"}></Navigate>
        }
    </div>
  )
}

export default AdminRoute