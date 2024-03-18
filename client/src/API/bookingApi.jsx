import { API } from "../config"

export const getBookingByUser = (userid) =>{
    return fetch(`${API}/bookings/getbookingbyuser/${userid}`)
    .then(response=>response.json())
    .catch(error=>console.log(error)) 
  } 

  export const getAllBookings = () => {
    return fetch(`${API}/bookings/getAllBookings`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  export const cancelRoom = (token, id, roomid) => {
    return fetch(`${API}/bookings/cancelroom/${id}/${roomid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
  };
  