import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser, updateUser } from '../../API/uesrsApi'
import { isAuthenticated } from '../../API/authApi'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UpdateProfile = () => {
    const {token} = isAuthenticated()
    const {id} = useParams()
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        formdata : new FormData(),
    })
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    
    useEffect(()=>{
      getUser(id).then((data)=>{
        if(data.error){
          console.log(data.error)
        }
        else{
          setUser({...user,...data})
        }
      })
    },[])
   const {formdata, username, email} = user

   const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    formdata.set(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(token,formdata,id).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(true);
      }
    });
  };

  const showError = () => {
    if (error) return <div className="text-red-600 text-center">{error}</div>;
  };

  const Success = () => {
    if (success) {
      return toast.success("User updated successfully");
    }
  };
   
  return (
    <>
        <ToastContainer position="top-right" theme="colored">
        {Success()}
      </ToastContainer>
      <form action="">
        <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm w-2/3 mx-auto">
          <h2 className="text-black font-bold text-lg text-center">
            Update User
          </h2>
          {showError()}
          <div className="mt-4">
            <label className="text-black" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="text"
              name="name"
              value={username}
              
              onChange={handleChange}
            />
          </div>
          
          <div className="mt-4">
            <label className="text-black" htmlFor="email">
              Email
            </label>
            <input
              placeholder=""
              id="email"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="email"
              name="email"
              value={email}
              
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="text-black" htmlFor="password">
             Password
            </label>
            <input
              placeholder=""
              id="password"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="password"
              name="password"
              value={""}
              
              onChange={handleChange}
            />
          </div>
          
          

          <div className="mt-4 flex justify-end">
            <button
              className="bg-green-600 text-white rounded-md px-4 py-3 w-full hover:bg-green-700"
              onClick={handleSubmit}
            >
              Update User
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default UpdateProfile