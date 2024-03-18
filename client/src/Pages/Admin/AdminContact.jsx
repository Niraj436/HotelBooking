import React, { useEffect, useState } from "react";
import { deleteContact, getAllContacts } from "../../API/ContactsApi";
import { isAuthenticated } from "../../API/authApi";
import Swal from "sweetalert2";

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  const [contactUpdated, setContactUpdated] = useState(false)
  const {token} = isAuthenticated()

  useEffect(() => {
    getAllContacts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setContacts(data);
      }
    });
  }, [contactUpdated]);

  const handleRemove = (id) => {
    setContactUpdated(false);
    Swal.fire({
      title: "Delete Contact",
      text: "Are you sure you want to delete this contact?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteContact(id, token).then((data) => {
          if (data.error) {
            Swal.fire({
              text: "Failed",
              title: "Failed to delete contact",
              showCancelButton: false,
              timer: 2000,
            });
          } else {
            setContactUpdated(true);
            Swal.fire({
              title: "contact deleted successfully",
              icon: "success",
              timer: 2000,
              showCancelButton: false,
            });
          }
        });
      }
    });
  };
  return (
    <>
      <p className="text-center text-2xl font-bold py-6">Messages</p>
      <div className="overflow-x-auto mx-4">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>S.N</th>
        <th>Contacts info</th>
        <th>Message</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        contacts.length > 0 ? (
            contacts.map((contact,i)=>{
                return (
                    <tr key={contact._id}>
                    <th>{i+1}</th>
                    <td>
                       <span className="font-bold"> Name:</span> {contact.name}<br/>
                       <span className="font-bold"> Email:</span> {contact.email}<br/>
                       <span className="font-bold"> Phone no:</span> {contact.contactNumber}<br/>
                    </td>
                    <td className="w-2/4 overflow-auto">{contact.message}</td>
                    <td><button className="btn bg-red-500 text-white px-6 hover:bg-red-600 hover:text-white hover:shadow-lg" onClick={()=>{
                        handleRemove(contact._id)
                    }}>Delete</button></td>
                  </tr>
                )
            })
        ): <tr>
            <td></td>
            <td></td>
            <td className="text-3xl font-bold text-red-500">No Contacts done</td>
            <td></td>
        </tr>
      }
     
    </tbody>
  </table>
</div>
    </>
  );
};

export default AdminContact;
