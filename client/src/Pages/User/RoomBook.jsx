import React, { useEffect, useState } from "react";
import { getRoom } from "../../API/RoomApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { isAuthenticated } from "../../API/authApi";
import Swal from "sweetalert2";

const RoomBook = () => {
  const { roomid } = useParams();
  const [room, setRoom] = useState([]);
  const [fromdate, setFromdate] = useState();
  const [todate, settodate] = useState();
  const { user } = isAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    getRoom(roomid).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRoom(data);
      }
    });
  }, []);

  function daysDifference(dateString1, dateString2) {
    // Parse date strings into Date objects
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    // Check if parsing was successful
    if (isNaN(date1) || isNaN(date2)) {
      return <span className="text-red-500">Select dates</span>;
    }

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = Math.abs(date2 - date1);

    // Convert the difference to days
    const differenceInDays =
      differenceInMilliseconds / (1000 * 60 * 60 * 24) + 1;

    return differenceInDays;
  }

  const totaldays = daysDifference(fromdate, todate);
  const totalamount = room.price * totaldays;

  const bookRoom = async () => {
    if (fromdate && todate) {
      const bookingDetails = {
        room,
        userid: user._id,
        fromdate,
        todate,
        totaldays,
        totalamount,
      };
      sessionStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
      navigate("/paymentmain");

      // try {
      //   await axios.post(`http://localhost:5000/bookings/bookroom`, bookingDetails);

      // } catch (error) {
      //   console.log(error);
      //   // Handle error, e.g., show an error message
      // }
    } else {
      Swal.fire({
        title: "Dates?",
        text: "Please select dates",
        icon: "error",
        showCancelButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <div className="bg-slate-50 dark">
        <div className="text-center  font-bold text-2xl py-4">
          Your Room Details
        </div>

        <div className="flex flex-col justify-center px-8 gap-4 lg:mx-64 my-4 border py-8 rounded-lg hover:shadow-xl bg-indigo-100 dark">
          <p>
            <span className="text-lg font-bold">Type: </span>
            {room.title}
          </p>
          {/* <div>
            Please select the date <br />
            <RangePicker format="YYYY-MM-DD" onChange={filterByDate} />
          </div> */}
          <p>Select check-in-date to check-out-date</p>
          <div className="flex gap-4">
            <div>
              <input
                type="date"
                name=""
                id=""
                onChange={(e) => {
                  setFromdate(e.target.value);
                }}
                className="w-48 py-3 px-2"
              />
            </div>
            <input
              type="date"
              name=""
              id=""
              onChange={(e) => {
                settodate(e.target.value);
              }}
              className="w-48 py-3 px-2"
            />
          </div>
          <p>
            <span className="text-lg font-bold">Check in date: </span>
            {fromdate}
          </p>
          <p>
            <span className="text-lg font-bold">Check out date: </span>
            {todate}
          </p>
          <p>
            <span className="text-lg font-bold">Total Days: </span>
            {totaldays}
          </p>
          <p>
            <span className="text-lg font-bold">Rent per day: </span>
            Rs {room.price} per day
          </p>
          <p>
            <span className="text-lg font-bold">Total amount: </span>

            {fromdate && todate ? (
              `Rs ${totalamount}`
            ) : (
              <span className="text-red-500">Select dates</span>
            )}
          </p>
          <p>
            <span className="text-lg font-bold">Room Number: </span>

            {room.roomNumber}
          </p>
          <p>
            <span className="text-lg font-bold">Description: </span>
            <br />
            {room.desc}
          </p>

          <button
            className="btn btn-success text-white w-full"
            onClick={bookRoom}
          >
            Procced to payment
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomBook;
