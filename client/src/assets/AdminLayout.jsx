import React from 'react'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex flex-col md:flex-row  h-full border border-gray-200 shadow-md'>
        <div className='md:w-1/4 w-full '>
            <AdminSidebar/>
        </div>
        <div className='md:w-3/4 w-full' >
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout