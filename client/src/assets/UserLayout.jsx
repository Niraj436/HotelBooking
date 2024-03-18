import React from 'react'
import { Outlet } from 'react-router-dom'
import UserSideBar from './UserSideBar'

const UserLayout = () => {
  return (
    <div className='flex flex-col md:flex-row  h-full border border-gray-200 shadow-md'>
    <div className='md:w-1/4 w-full '>
        <UserSideBar/>
    </div>
    <div className='md:w-3/4 w-full' >
        <Outlet/>
    </div>
</div>
  )
}

export default UserLayout