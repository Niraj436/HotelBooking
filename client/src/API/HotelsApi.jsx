import { API } from "../config";

export const getAllHotels = () => {
  return fetch(`${API}/hotels`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const getHotel = (id) => {
  return fetch(`${API}/hotels/${id}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const addHotel = (token, hotel) => {
  // console.log(hotel)
  return fetch(`${API}/hotels`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: hotel,
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
export const updateHotel = (token, hotel, id) => {
  return fetch(`${API}/hotels/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: hotel,
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const deleteHotel = (id, token) => {
  return fetch(`${API}/hotels/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getHotelRooms = (id) => {
  return fetch(`${API}/hotels/rooms/${id}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
