import React from "react";
import { isAuthenticated } from "../../API/authApi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteUser } from "../../API/uesrsApi";


const UserProfile = () => {
  const {user, token} = isAuthenticated()

  const navigate = useNavigate()
  

  const handleRemove = (id) => {
    Swal.fire({
      title: "Delete Account",
      text: "Are you sure you want to delete your account?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(token, id).then((data) => {
          if (data.error) {
            Swal.fire({
              text: "Failed",
              title: "Failed to delete User",
              showCancelButton: false,
              timer: 2000,
            });
          } else {
            localStorage.removeItem('jwt');
            Swal.fire({
              title: "User deleted successfully",
              icon: "success",
              timer: 2000,
              showCancelButton: false,
            });
            navigate("/signin");
          }
        });
      }
    });
  };
  return (
    <>
      <div className="border border-gray-300 md:mx-40 my-4 rounded-lg">
        <div className="flex justify-center pt-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <p className="text-center py-4 text-xl font-extrabold">Personal Information</p>
        <div className=" pl-14 pb-4 flex flex-col gap-4"  >
          <hr />
          <p>
            <span className="text-lg font-bold">Username: </span>
            {user.username}
          </p>
          <hr />
          <p>
            <span className="text-lg font-bold">Email: </span>
            {user.email}
          </p>
          <hr />
          <p>
            <span className="text-lg font-bold">Password: </span>
            **********
          </p>
          <hr />
          <p>
            <span className="text-lg font-bold">Role: </span>
            {
              user.isAdmin ? <span>Admin</span> : <span>User</span>
            }
          </p>
          <hr />
        </div>
        <div className="flex justify-center gap-2 py-6">
          
          {/* <Link to={`${user._id}`} className="btn btn-success text-white">Update Details</Link> */}
          <Link className="btn btn-secondary text-white" onClick={()=>{handleRemove(user._id)}}>Delete Account</Link>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
