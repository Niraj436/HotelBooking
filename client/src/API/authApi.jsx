import { API } from "../config";

export const register = (username, email, password) => {
  return fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then((response) => {
      return response.json();
    })

    .catch((error) => console.log(error));
};

export const login = (username, password) => {
  return fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      return response.json();
    })

    .catch((error) => console.log(error));
};

export const authenticate = (userinfo) => {
  return localStorage.setItem("jwt", JSON.stringify(userinfo));
};

export const isAuthenticated = () => {
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const signOut = () => {
  localStorage.removeItem("jwt");
  return fetch(`${API}/auth/logout`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const verifyEmail = (token) => {
  return fetch(`${API}/auth/verifyemail/${token}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const forgetPassword = (email) =>{
  return fetch (`${API}/auth/forgetpassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}

export const resetPassword = (token, newPassword) => {
  return fetch (`${API}/auth/resetPassword/${token}`,{
    method:"POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({newPassword})

  })
  .then(response=>response.json())
  .catch(error=>console.log(error))
}
  

