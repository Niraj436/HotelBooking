import React, { useState } from "react";
import { forgetPassword } from "../API/authApi";

const ForgetPassword = () => {

    const [email, setEmail] = useState("")
    let[error,setError] = useState('')
    let[success, setSuccess] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        forgetPassword(email)
        .then(data=>{
            if(data.error){
              setError(data.error)
              setSuccess('')
            }
            else{
              setSuccess(data.message)
              setError('')
            }
          })
    }

    const showError = () => {
        if (error) {
          return <div className=" text-xl text-red-600 text-center">{error}</div>;
        }
      };
      const showSuccess = () => {
        if (success){
          return <div className=" text-xl text-green-600 text-center">{success}</div>;
    
        }
      };
  return (
    <>
      {/* <img
        src={loginpic}
        alt=""
        className="absolute w-full object-cover"
        style={{ height: "700px" }}
      /> */}
      <form className="py-20 relative">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center dark">
                Forget Password
              </p>
                {showError()}
                {showSuccess()}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                 Email
                </label>
                <input
                  placeholder="xyz@gmail.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="email"
                  type="email"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  
                />
              </div>
              

              <button
                className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                type="submit"
                onClick={handleSubmit}
               
              >
                Send reset password verification
              </button>

            
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgetPassword;
