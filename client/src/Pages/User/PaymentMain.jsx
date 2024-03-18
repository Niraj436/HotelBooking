import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


// import "./App.css";
import { getStrpiekey, makePayment } from "../../API/paymentApi";
import CheckoutForm from "./CheckOutForm";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.


export default function PaymentMain() {
  //   const [clientSecret, setClientSecret] = useState("");
    let [stripeKey, setStripeKey] =  useState('')
    let [clientSecret, setClientSecret] = useState('')
    const storedBookingDetails = JSON.parse(
      sessionStorage.getItem("bookingDetails")
    );
    const totalamount = storedBookingDetails.totalamount;
    
  
    useEffect(() => {
      getStrpiekey()
      .then(data=>{
          setStripeKey(data.STRIPEAPIKEY)
      })
      
      makePayment(totalamount*100)
      .then(data=>{
        setClientSecret(data.clientSecret)
      })
    }, []);
  
  
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };
  
    return (
      <div>
        {  stripeKey && clientSecret &&
          <Elements options={options} stripe={loadStripe(stripeKey)}>
            <CheckoutForm />
          </Elements>
        }
      </div>
    );
  }