import React, { useEffect, useState } from 'react'
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { getAllHotels } from '../../API/HotelsApi';
import { getAllUsers } from '../../API/uesrsApi';
import { getAllRooms } from '../../API/RoomApi';
import { getAllBookings } from '../../API/bookingApi';

const AdminDashboard = () => {
  const [hotels, setHotels] = useState([])
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([])
  const [bookings, setBookings] = useState([])
  useEffect(()=>{
    getAllHotels()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setHotels(data)
      }
    })

    getAllRooms()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setRooms(data)
      }
    })
    getAllUsers()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setUsers(data)
      }
    })
    getAllBookings()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setBookings(data)
      }
    })
  },[])
  return (
    <>
    <div className='flex justify-center gap-3 my-auto py-14 align-middle mx-8 flex-wrap'>
       <div className='card border px-12 py-10 border-gray-300 shadow-lg rounded-badge flex-1'>
          <p><LocalHotelIcon fontSize='large' style={{color:"blue"}}/></p>
          <span className='text-xl  py-2'>Hotels</span>
          <p className='text-lg'>{hotels.length}</p>
       </div>
       <div className='card border px-12 py-10 border-gray-300 shadow-lg rounded-badge flex-1'>
          <p><BedroomChildIcon fontSize='large' style={{color:"blue"}}/></p>
          <span className='text-xl  py-2'>Rooms</span>
          <p className='text-lg'>{rooms.length}</p>
       </div>
       <div className='card border px-12 py-10 border-gray-300 shadow-lg rounded-badge flex-1'>
          <p><SupervisedUserCircleIcon fontSize='large' style={{color:"blue"}}/></p>
          <span className='text-xl  py-2'>Users</span>
          <p className='text-lg'>{users.length}</p>
       </div>
       <div className='card border px-12 py-10 border-gray-300 shadow-lg rounded-badge flex-1'>
          <p><SupervisedUserCircleIcon fontSize='large' style={{color:"blue"}}/></p>
          <span className='text-xl  py-2'>Room Booked</span>
          <p className='text-lg'>{bookings.length}</p>
       </div>
       
      
    </div>
    </>
  )
}

export default AdminDashboard