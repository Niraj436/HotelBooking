import React from 'react'
import { NavLink } from 'react-router-dom'
import './AdminSidebar.css';

const UserSideBar = () => {
  return (
    <nav className=' flex flex-col text-xl text-start'>
      <NavLink to='/user/userprofile' className='user_list pl-10' activeclassname='active'>
         User Profile
      </NavLink>
      <NavLink to='/user/favlist' className='user_list pl-10' activeclassname='active'>
         FavList
      </NavLink>
      <NavLink to='/user/bookedhotel' className='user_list pl-10' activeclassname='active'>
         Booked Hotel
      </NavLink>
      
    </nav>
  )
}

export default UserSideBar