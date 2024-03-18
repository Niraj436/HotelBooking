import { API } from "../config"

export const getAllUsers = () => {
    return fetch (`${API}/user`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const updateIsAdmin = (id,isAdmin) =>{
    return fetch(`${API}/user/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({isAdmin})
    })
    .then(res => res.json())
    .catch(err=>console.log(err))
  }
export const updateUser = (token, user, id) =>{
    return fetch(`${API}/user/${id}`,{
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
      body: user
    })
    .then(res => res.json())
    .catch(err=>console.log(err))
  }

  export const deleteUser= (token, id) => {
    return fetch(`${API}/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
  };

  export const getUser = (id) =>{
    return fetch(`${API}/user/${id}`)
    .then(response=>response.json())
    .catch(error=>console.log(error)) 
  }
  
