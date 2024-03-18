import React, { useEffect, useState } from "react";
import { cancelRoom, getBookingByUser } from "../../API/bookingApi";
import { isAuthenticated } from "../../API/authApi";
import { getHotelByRoom } from "../../API/RoomApi";
import { API } from "../../config";
import Swal from 'sweetalert2'


const UserBookedHotel = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = isAuthenticated();
  const [error, setError] = useState();
  const [hotel, setHotel] = useState();
  let [bookingUpdated, setBookingUpdated] = useState(false);
  const {token} = isAuthenticated()

  const roomid = bookings.map((booking) => booking.roomid);

  //  console.log(roomid[0])

  useEffect(() => {
    getBookingByUser(user._id).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setBookings(data);
        setError("");
      }
    });
    getHotelByRoom(roomid[0]).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setHotel(data);
      }
    });
  }, [bookingUpdated,roomid[0]]);

  // useEffect(() => {}, [roomid[0]]);

  const handleDelete = (bookingid, roomid) => {
    setBookingUpdated(false);
    Swal.fire({
      title: "Cancel Booking",
      text: "Are you sure you want to cancel your booking?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonColor: "#dd0000",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelRoom(token, bookingid, roomid).then((data) => {
          if (data.error) {
            Swal.fire({
              title: data.error,
              icon: "error",
              timer: 2000,
              showConfirmButton: false,
              position: "top-right",
            });
          } else {
            setBookingUpdated(true);
            Swal.fire({
              title: "Booking cancelled successfully",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
              position: "center",
            });
            window.location.reload();
          }
        });
      }
    });
  };

  return (
    <>
      {bookings.length > 0 ? (
        bookings.map((data) => {
          return (
            <div
              key={data._id}
              className="grid lg:grid-cols-2 py-4 px-3 bg-slate-100 rounded-md dark"
            >
              <div className="h-full flex align-middle">
                <img
                  src={`${API}/${hotel?.photos}`}
                  alt={hotel?.name}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="w-full h-full bg-indigo-100 text-black">
                <div className="flex flex-col justify-evenly gap-2 pl-6 pt-2">
                  <h2 className="text-center text-xl font-bold">
                    Booked room details
                  </h2>
                  <p className="">
                    <span className="font-bold">Hotel: </span>
                    {hotel?.name}
                  </p>
                  <p className="">
                    <span className="font-bold">Location: </span>
                    {hotel?.address}, {hotel?.city}
                  </p>
                  <p className="">
                    <span className="font-bold">Room: </span>
                    {data.room}
                  </p>
                  <p className="">
                    <span className="font-bold">Room number: </span>
                    {data.roomnumber}
                  </p>
                  <p className="">
                    <span className="font-bold">Check in date: </span>
                    {data.fromdate}
                  </p>
                  <p className="">
                    <span className="font-bold">Check out date: </span>
                    {data.todate}
                  </p>
                  <p className="">
                    <span className="font-bold">Total days: </span>
                    {data.totaldays}
                  </p>

                  <p className="">
                    <span className="font-bold">Paid amount: </span>
                    Rs {data.totalamount}
                  </p>
                  <p className="">
                    <span className="font-bold">Transaction Id: </span>
                    <span className="text-xs" style={{ fontSize: "13px" }}>
                      {data.transactionId}
                    </span>
                  </p>

                  <p className="">
                    <span className="font-bold">Status: </span>
                    <span className="text-lg font-bold text-red-500">
                      {data.status}
                    </span>
                  </p>
                  <p>
                    <button
                      className="btn btn-error my-2 mx-auto text-white"
                      onClick={() => {
                        handleDelete(data._id, data.roomid);
                      }}
                    >
                      Cancel booking
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-2xl font-bold text-red-600 py-10">
          No rooms has been booked
        </p>
      )}
    </>
  );
};

export default UserBookedHotel;
