import React, { useEffect, useState } from "react";
import { getAllBookings } from "../../API/bookingApi";

const AdminBooked = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllBookings().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setBookings(data);
        console.log(data);
      }
    });
  }, []);
  return (
    <>
      <div className="overflow-x-auto">
         <p className="text-2xl font-bold text-center py-4">Booked Room</p>
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Room</th>
              <th>RoomId</th>
              <th>Room Number</th>
              <th>user id</th>
              <th>fromdate</th>
              <th>todate</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => {
              return (
                <tr key={booking._id}className="hover:bg-gray-300">
                  <th>{i+1}</th>
                  <td>{booking.room}</td>
                  <td>{booking.roomid}</td>
                  <td>{booking.roomnumber}</td>
                  <td>{booking.userid}</td>
                  <td>{booking.fromdate}</td>
                  <td>{booking.todate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminBooked;
