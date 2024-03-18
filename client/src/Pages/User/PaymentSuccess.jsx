import React from "react";
import { Link } from "react-router-dom";


const PaymentSuccess = () => {



  return(
    <div className="mx-auto flex flex-col gap-10 justify-center py-12 bg-green-200">
        <p className="text-green-600 text-center text-2xl">Your payment was successfull</p>
        <Link to={"/"} className="btn btn-primary w-1/3 mx-auto">Go to home page</Link>
    </div>
  );
};

export default PaymentSuccess;
