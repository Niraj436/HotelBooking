import React, { useEffect, useState } from 'react'
import { getAllUsers, updateIsAdmin } from '../../API/uesrsApi';
import Swal from 'sweetalert2';

const AdminUsers = () => {
  const [users, setUsers] = useState([])
  let [success, setSuccess] = useState(false)

  useEffect(() => {
    getAllUsers().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });
  }, [success]);

  const handleIsAdmin = (id, isAdmin) =>(e) =>{
    setSuccess(false)
    Swal.fire({
      icon:"question",
      title: "Change role",
      text:"Are you sure you want to change this user's role?",
      showCancelButton:true,
      confirmButtonText:"Yes",
      confirmButtonColor:"red"
    }).then((result)=>{
      if(result.isConfirmed){
        updateIsAdmin(id,isAdmin)
        .then((data)=>{
          if(data.error){
            Swal.fire({
              text: "Failed",
              title: "Failed to change role",
              showCancelButton: false,
              timer: 2000,
            });
        }
        else{
            setSuccess(true)
            Swal.fire({
              icon:"success",
              title:"Changed role successfully",
              timer:2000,
              showCancelButton:false
            })
            
        }
        })

      }
    })
  }


  return (
    <>
    <div className="overflow-x-auto my-2 mx-2 border border-slate-200">
  <table className="table cursor-pointer text-centerr">
    {/* head */}
    <thead>
      <tr className=''>
        <th>S.N</th>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {users.map((user,i)=>{
        return(

      <tr className="hover">
        <th>{i+1}</th>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          {
            user.isAdmin ? (
              <p>Admin</p>
            ):
            <p>Customer</p>
            
          }
        </td>
        <td>
          {
            user.isAdmin ? (
              <button className=' bg-green-500 px-2 py-3 rounded-lg text-white hover:bg-green-600 hover:shadow-md' onClick={handleIsAdmin(user._id,false)}>Remove Admin</button>
            ):
            <button className=' bg-red-500 px-4 py-3 rounded-lg text-white  hover:bg-red-600 hover:shadow-md' onClick={handleIsAdmin(user._id,true)}>Make Admin</button>
          }
        </td>
        
      </tr>
        )
      })}
      
    </tbody>
  </table>
</div>
    </>
  )
}

export default AdminUsers