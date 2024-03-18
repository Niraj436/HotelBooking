import React from 'react'
import { isAuthenticated } from '../API/authApi'
import { Navigate, Outlet } from 'react-router-dom'

const CustomerRoute = () => {
  const {user} = isAuthenticated()
  return (
    <div>
        {
            isAuthenticated() && user.isAdmin==false ? (
                <Outlet/>
            ):
            <Navigate to={"/signin"}></Navigate>
        }
    </div>
  )
}

export default CustomerRoute