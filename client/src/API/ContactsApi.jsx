import { API } from "../config";

export const getAllContacts = () => {
  return fetch(`${API}/contacts/getallcontacts`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const deleteContact = (id, token) => {
  return fetch(`${API}/contacts/deletecontact/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
