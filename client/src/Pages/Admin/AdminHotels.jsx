import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { deleteHotel, getAllHotels } from "../../API/HotelsApi";
import { API } from "../../config";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { isAuthenticated } from "../../API/authApi";

const AdminHotels = () => {
  const [hotels, setHotels] = useState([]);
  const { token } = isAuthenticated();
  let [hotelUpdated, setHotelUpdated] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    getAllHotels().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHotels(data);
      }
    });
  }, [hotelUpdated]);

  const handleRemove = (id) => {
    setHotelUpdated(false);
    Swal.fire({
      title: "Delete Hotel",
      text: "Are you sure you want to delete this hotel?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteHotel(id, token).then((data) => {
          if (data.error) {
            Swal.fire({
              text: "Failed",
              title: "Failed to delete Hotel",
              showCancelButton: false,
              timer: 2000,
            });
          } else {
            setHotelUpdated(true);
            Swal.fire({
              title: "Hotel deleted successfully",
              icon: "success",
              timer: 2000,
              showCancelButton: false,
            });
          }
        });
      }
    });
  };

  const handleSearch = (e) => {
    e.preventDefault()
    let result;
    if(searchName){
      result = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchName.toLowerCase())
    );
    }
    else{
      result = hotels;
    }
    setFilteredHotels(result)
  }
  return (
    <>
      <div className="bg-gray-300 dark">

      <p className="text-center py-4 text-2xl font-bold">Hotels</p>
      <div className="flex justify-between pl-4 pr-4 pb-2">
        <div>
        <input type="search" placeholder="Search Hotel" className="px-3 py-3" onChange={(e)=>{setSearchName(e.target.value)}} />
        <button className="btn btn-primary ml-2" onClick={handleSearch}>Search</button>
        </div>
        <Link
          to={"/admin/hotels/add"}
          className="btn bg-green-600 text-white px-8 hover:bg-green-700 hover:shadow-md"
        >
          Add Hotel
        </Link>
      </div>
      </div>

      { filteredHotels.length === 0 ?
       hotels.map((hotel) => {
        return (
          <div
            key={hotel._id}
            className="flex flex-col text-center  lg:flex-row lg:text-left gap-4 py-4 border border-gray-300 bg-slate-200 dark"
          >
            <div className="flex align-middle lg:w-2/4 w-full">
              <img
                src={`${API}/${hotel?.photos[0]}`}
                className=" px-4 object-cover" 
                alt={hotel.image}
              />
            </div>
            <div className="">
              <div>
                <p className="text-blue-600 font-bold text-xl">{hotel.name}</p>
                <p className=" text-blue-600 font-light text-sm underline">
                  {hotel.address},{hotel.city}
                  <span className="text-black no-underline pl-4">{hotel.distance}</span>
                </p>
                <div className="py-1">
                  Rating: 5
                  
                    <StarIcon fontSize="small" className="text-orange-300 pb-1" />{" "}
                  
                </div>
                <div>
                  <p className="pr-10">{hotel.desc}</p>
                </div>
                <div>
                  <Link to={`update/${hotel._id}`} className="btn bg-orange-500 text-white px-8 mr-2 hover:bg-orange-600 hover:shadow-md">
                    Update
                  </Link>
                 
                  <button
                    className="btn bg-red-500 text-white px-8 hover:bg-red-600 hover:shadow-sm"
                    onClick={() => handleRemove(hotel._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }):
      filteredHotels.map((hotel) => {
        return (
          <div
            key={hotel._id}
            className="flex flex-col text-center  lg:flex-row lg:text-left gap-4 py-4 border border-gray-300 bg-slate-200"
          >
            <div className="lg:w-2/4 flex align-middle">
              <img
                src={`${API}/${hotel?.photos[0]}`}
                className="w-full px-4" 
                alt={hotel.image}
              />
            </div>
            <div className="">
              <div>
                <p className="text-blue-600 font-bold text-xl">{hotel.name}</p>
                <p className=" text-blue-600 font-light text-sm underline">
                  {hotel.address},{hotel.city}
                  <span className="text-black no-underline pl-4">{hotel.distance}</span>
                </p>
                <div className="py-1">
                  Rating: 5
                  
                    <StarIcon fontSize="small" className="text-orange-300 pb-1" />{" "}
                  
                </div>
                <div>
                  <p className="pr-10">{hotel.desc}</p>
                </div>
                <div>
                  <Link to={`update/${hotel._id}`} className="btn bg-orange-500 text-white px-8 mr-2 hover:bg-orange-600 hover:shadow-md">
                    Update
                  </Link>
                 
                  <button
                    className="btn bg-red-500 text-white px-8 hover:bg-red-600 hover:shadow-sm"
                    onClick={() => handleRemove(hotel._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
    </>
  );
};

export default AdminHotels;
