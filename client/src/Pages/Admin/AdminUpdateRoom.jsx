import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isAuthenticated } from "../../API/authApi";
import { getRoom, updateRoom } from "../../API/RoomApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUpdateRoom = () => {
  const { token } = isAuthenticated();
  const { id } = useParams();
  const [room, setRoom] = useState({
    title: "",
    maxPeople: "",
    desc: "",
    price: "",
    roomNumber: "",
    formdata: new FormData(),
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getRoom(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRoom({ ...room, ...data });
      }
    });
  }, []);

  const { formdata, title, maxPeople, desc, price, roomNumber } = room;

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
    formdata.set(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRoom(token, formdata, id).then((data) => {
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

  const SetSuccess = () => {
    if (success) {
      return toast.success("Room updated successfully");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" theme="colored">
        {SetSuccess()}
      </ToastContainer>
      <form action="">
        <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm w-2/3 mx-auto dark border">
          <h2 className="text-black font-bold text-lg text-center">
            Update Room
          </h2>
          {showError()}
          <div className="mt-4">
            <label className="text-black" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>
          
          <div className="mt-4">
            <label className="text-black" htmlFor="price">
              Price
            </label>
            <input
              placeholder=""
              id="price"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="text-black" htmlFor="maxPeople">
              MaxPeople
            </label>
            <input
              placeholder=""
              id="maxPeople"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="text"
              name="maxPeople"
              value={maxPeople}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="text-black" htmlFor="roomNumber">
              Room Number
            </label>
            <input
              placeholder=""
              id="roomNumber"
              className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
              type="number"
              name="roomNumber"
              value={roomNumber}
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
              value={desc}
              onChange={handleChange}
            ></textarea>
          </div>
          

          <div className="mt-4 flex justify-end">
            <button
              className="bg-green-600 text-white rounded-md px-4 py-3 w-full hover:bg-green-700"
              onClick={handleSubmit}
            >
              Update Room
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminUpdateRoom;
