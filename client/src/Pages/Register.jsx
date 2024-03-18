import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../API/authApi";
import registerpic from "../Images/registerpic.jpg";
const Register = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [error, setError] = useState("");
  let [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    register(username, email, password).then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(success)
      } else {
        setSuccess(true);
        setError("");
        ;
      }
    });
  };

  const showError = () => {
    if (error) {
      return <div className=" text-xl text-red-600 text-center">{error}</div>;
    }
  };
  const showSuccess = () => {
    if (success){
      return <div className=" text-xl text-green-600 text-center">User created successfully</div>;

    }
  };
  return (
    <>
      <img
        src={registerpic}
        alt=""
        className="absolute w-full object-cover"
        style={{ height: "700px" }}
      />
      <form className="pt-20  relative">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Register
              </p>
              {showError()}
              {showSuccess()}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your username
                </label>
                <input
                  placeholder="Ram"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="username"
                  type="text"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="xyz@gmail.com"
                  id="email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <button
                className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                type="submit"
                onClick={handleSubmit}
              >
                Create an account
              </button>
              <div className="text-center">
                <span>Already have an account? </span>
                <Link to={"/signin"} className="text-blue-500 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
