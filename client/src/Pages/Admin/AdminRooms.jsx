import React, { useEffect, useState } from "react";
import { getAllRooms } from "../../API/RoomApi";
import { getAllHotels } from "../../API/HotelsApi";
import {Link} from "react-router-dom"

const AdminRooms = () => {
  const[rooms , setRooms] = useState([])
  const [hotels, setHotels] = useState([])

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
  },[])
  return (
    <>
      <div className="overflow-x-auto mx-2 py-3">
  <table className="table border border-gray-300 text-center">
    {/* head */}
    <thead>
      <tr className="text-base">
        <th>S.N</th>
        <th>Hotel</th>
        <th>Total Rooms</th>
        <th>Action</th>
       
      </tr>
    </thead>
    <tbody>
      {
        hotels.map((hotel,i)=>{
          return(
      <tr key={hotel._id} className="hover:bg-gray-300">
        <th>{i+1}</th>
        <td>{hotel.name}</td>
        <td>{hotel.rooms.length}</td>
        <td>
          <Link to={`addroom/${hotel._id}`} className="btn px-3 py-2 bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md">Add room</Link>
          <Link to={`viewroom/${hotel._id}`} className="btn px-3 py-2 bg-green-700  text-white  hover:bg-green-800  hover:shadow-md">View rooms</Link>
        </td>

      
      </tr>

          )
        })
      }
      
    </tbody>
  </table>
</div>
    </>
  );
};

export default AdminRooms;
