import { API } from "../config";

export const addRoom = (token, room, hotelid) => {
  // console.log(room)
  return fetch(`${API}/rooms/${hotelid}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: room,
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getAllRooms = () => {
  return fetch(`${API}/rooms`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};


export const deleteRoom = (token, id, hotelid) => {
  return fetch(`${API}/rooms/${id}/${hotelid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res=>res.json())
  .catch(error=>console.log(error))
};

export const updateRoom = (token, room, id) => {
  return fetch(`${API}/rooms/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body:room
  })
  .then(res=>res.json())
  .catch(error=>console.log(error))
};

export const getRoom = (id) =>{
  return fetch(`${API}/rooms/${id}`)
  .then(response=>response.json())
  .catch(error=>console.log(error)) 
}
export const getHotelByRoom = (roomId) =>{
  return fetch(`${API}/rooms//getHotelByRoom/${roomId}`)
  .then(response=>response.json())
  .catch(error=>console.log(error)) 
}



