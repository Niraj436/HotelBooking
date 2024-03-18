import React, { useEffect, useState } from 'react'
import { getHotelRooms } from '../../API/HotelsApi'
import { Link, useParams } from 'react-router-dom'
import { deleteRoom } from '../../API/RoomApi'
import Swal from 'sweetalert2'
import { isAuthenticated } from '../../API/authApi'

const AdminViewRoom = () => {
    const [rooms, setRooms] = useState([])
    const {id} = useParams()
    let [roomUpdated, setRoomUpdated] = useState(false)
    const {token} = isAuthenticated()

    useEffect(()=>{
        getHotelRooms(id)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setRooms(data)
              
            }
        })
    },[roomUpdated])

    const handleDelete = (roomid) => {
        setRoomUpdated(false)
        Swal.fire({
          title: "delete room",
          text: "are you sure you want to delete to this room?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "yes",
          cancelButtonColor: "#dd0000",
        }).then((result) => {
          if (result.isConfirmed) {
           deleteRoom(token,roomid,id)
            .then((data) => {
              if (data.error) {
                Swal.fire({
                  title: data.error,
                  icon: "error",
                  timer: 2000,
                  showConfirmButton: false,
                  position: "top-right",
                });
              } else {
                setRoomUpdated(true)
                Swal.fire({
                  title: "Room deleted successfully",
                  icon: "success",
                  timer: 2000,
                  showConfirmButton: false,
                  position: "top-right",
                });
               
              }
            });
          }
        });
      };
  return (
    <>
        <div className="overflow-x-auto mx-2 py-3">
  <table className="table border border-gray-300 text-center">
    {/* head */}
    <thead>
      <tr>
        <th>S.N</th>
        <th>Title</th>
        <th>MaxPeople</th>
        <th>Room No.</th>
        <th>Price</th>
        <th>Action</th>
       
      </tr>
    </thead>
    <tbody>
      {
        rooms.map((room,i)=>{
          return(
      <tr key={room._id} className="hover:bg-gray-300">
        <th>{i+1}</th>
        <td>{room.title}</td>
        <td>{room.maxPeople}</td>
        <td>{room.roomNumber}</td>
        <td>{room.price}</td>
        <td>
        <Link to={`/admin/rooms/updateroom/${room._id}`} className="btn px-3 py-2 bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md">Update room</Link>
          <button className='btn py-2 px-6 bg-red-500 text-white hover:bg-red-600 hover:shadow-md' onClick={()=>{handleDelete(room._id)}}>Delete</button>
        </td>

      
      </tr>

          )
        })
      }
      
    </tbody>
  </table>
</div>
    </>
  )
}

export default AdminViewRoom
