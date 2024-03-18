import { API } from "../config"

export const makePayment = (amount) => {
    // console.log(room)
    return fetch(`${API}/payment/processpayment`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({amount}),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  export const getStrpiekey = () =>{
    return fetch(`${API}/payment/getstripekey`)
    .then(res => res.json())
    .catch(error=>console.log(error))
}