import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HotelIcon from "@mui/icons-material/Hotel";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import Person2Icon from "@mui/icons-material/Person2";
import BookIcon from "@mui/icons-material/Book";
import "./AdminSidebar.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ContactsIcon from "@mui/icons-material/Contacts";
import { getAllContacts } from "../API/ContactsApi";

const AdminSidebar = () => {
  const [contacts, setContacts] = useState([])

  useEffect(()=>{
     getAllContacts().then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setContacts(data)
      }
     })
  },[])
  return (
    <nav className=" flex flex-col text-xl">
      <NavLink
        to="/admin/dashboard"
        className="admin_list pl-10"
        activeclassname="active"
      >
        <VerifiedUserIcon /> AdminDashboard
      </NavLink>
      <NavLink
        to="/admin/hotels"
        className="admin_list pl-10"
        activeclassname="active"
      >
        <HotelIcon /> Hotels
      </NavLink>
      <NavLink
        to="/admin/rooms"
        className="admin_list pl-10"
        activeclassname="active"
      >
        <BedroomParentIcon /> Rooms
      </NavLink>
      <NavLink
        to="/admin/users"
        className="admin_list pl-10"
        activeclassname="active"
      >
        <Person2Icon /> Users
      </NavLink>
      <NavLink
        to="/admin/booked"
        className="admin_list pl-10"
        activeclassname="active"
      >
        <BookIcon /> Booked
      </NavLink>
      <NavLink
        to="/admin/contact"
        className="admin_list pl-10"
        activeclassname="active"
      >
        <ContactsIcon />{" "}
        <div className="indicator">
          <span className="indicator-item badge badge-error ">{contacts.length > 0 ? contacts.length : 0}</span>
           Contacts
        </div>
      </NavLink>
    </nav>
  );
};

export default AdminSidebar;
