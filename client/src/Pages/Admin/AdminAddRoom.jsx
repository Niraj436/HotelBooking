import React, { useState } from "react";
import { isAuthenticated } from "../../API/authApi";
import { addRoom } from "../../API/RoomApi";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminAddRoom = () => {
  const { token } = isAuthenticated();
  const { hotelid } = useParams();
  const navigate = useNavigate()

  const [room, setRoom] = useState({
    title: "",
    price: "",
    maxPeople: "",
    desc: "",
    roomNumber: "",
    formdata: new FormData(),
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { formdata } = room;

  const handleChange = (e) => {
      setRoom({ ...room, [e.target.name]: e.target.value });
      formdata.set(e.target.name,e.target.value)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata)
    addRoom(token,formdata, hotelid).then((data) => {
      if (data.error) {
        setError(data.error)
      } else {
        setSuccess(true);
        console.log(success)
        setError('')
        
      }
    });
  };
  const showError = () => {
    if (error) return <div className="text-red-600 text-center">{error}</div>;
  };
  const showSuccess = () => {
    if (success){

      return toast.success("Room added successfully");
      navigate("/")
    } 
   
      
  };
  return (
    <>
      <ToastContainer position="top-right" theme="colored">
        {showSuccess()}
      </ToastContainer>
      <form action="">
        <div className="dark mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm w-2/3 mx-auto border border-slate-200 hover:shadow-lg">
          <h2 className="text-black font-bold text-lg text-center">Add Room</h2>
          {showError()}
          <div className="mt-4">
            <label className="text-black" htmlFor="title">
              Title
            </label>
            <input
              placeholder="Room title"
              id="title"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="text"
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label className="text-black" htmlFor="price">
              Price
            </label>
            <input
              placeholder="1200"
              id="price"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="number"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="text-black" htmlFor="maxPeople">
              Maximum people
            </label>
            <input
              placeholder="2"
              id="maxPeople"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="number"
              name="maxPeople"
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label className="text-black" htmlFor="desc">
              Description
            </label>
            <textarea
              placeholder="description"
              className="dark w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 resize-none border"
              id="desc"
              name="desc"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-4">
            <label className="text-black" htmlFor="roomNumber">
              Room Number
            </label>
            <input
              placeholder="101"
              id="roomNumber"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="text"
              name="roomNumber"
              onChange={handleChange}
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="bg-green-600 text-white rounded-md px-4 py-3 w-full hover:bg-green-700"
              onClick={handleSubmit}
            >
              AddRoom
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminAddRoom;
