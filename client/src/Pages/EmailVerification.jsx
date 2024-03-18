import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../API/authApi";


const EmailVerification = () => {
 let parmas = useParams()
 let token = parmas.token
 let[error , setError] = useState('')
 let [success, setSuccess] = useState(false)

 useEffect(()=>{
  verifyEmail(token)
  .then(data=>{
    if(data.error){
      setError(data.error)
      setSuccess(false)
    }
    else{
      setSuccess(true)
      setError('')
    }
  })
  .catch(error=>console.log(error))
 },[])

 const showError = () =>{
  if(error){
    return (
      <div className="bg-red-200 text-red-600 text-center py-2 text-xl">{error}</div>
    )
  }
 }
 const showSuccess = () =>{
  if(success){
    return (
      <div className="bg-green-200 text-green-600 text-center py-10 text-xl">User registration successful</div>
    )
  }
 }
  return (
    
    <div>
      {showError()}
        {showSuccess()}
    </div>
  );
};

export default EmailVerification;
