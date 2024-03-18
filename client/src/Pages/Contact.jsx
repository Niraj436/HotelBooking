import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { pink } from "@mui/material/colors";
import axios from "axios";
import { API } from "../config";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState();
  const [message, setMessage] = useState();

  const handleClick = async () => {
    const contactDetails = {
      name,
      email,
      contactNumber,
      message,
    };
    try {
      await axios.post(`${API}/contacts/contactUs`, contactDetails)
      toast.success("Contacted successfully")
      
    } catch (error) {
      toast.error("Error occurred while submitting the form");
    }

    
  };

  return (
    <>
    
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact us</h1>
            <p className="py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
              pariatur recusandae iste molestiae culpa porro.
            </p>
            <div className=" flex flex-col flex-start gap-4 pl-4">
              <p className="text-xl font-bold">
                <CallIcon sx={{ color: pink[500] }} /> Call us
              </p>
              <span>9874924100</span>

              <p className="font-bold text-xl">
                <EmailIcon sx={{ color: pink[500] }} /> Email us
              </p>
              <span>xyzhotel@gmail.com</span>

              <p className="font-bold text-xl">
                <AddLocationAltIcon sx={{ color: pink[500] }} /> Address
              </p>
              <span>Balaju, Kathmandu</span>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark">Contact number</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter your contact number"
                  className="input input-bordered"
                  required
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Type your text here"
                  className="input input-bordered resize-none h-24 dark"
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleClick}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-4 px-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7063.403344441194!2d85.29123129999998!3d27.726495899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19340cc3be71%3A0xa8c3af96a691ea90!2sNIC%20Asia%20Bank%2C%20Nursery%20Chowk%2C%20Dhungedhara!5e0!3m2!1sen!2snp!4v1703950810254!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96 rounded-md"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
