import React, { useEffect, useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { API } from "../config";
import { getAllHotels } from "../API/HotelsApi";

const AllHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchName, setSearchName] = useState("");


  useEffect(() => {
    getAllHotels().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHotels(data);
      }
    });
  }, []);

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
      <div className="flex justify-around py-6 px-4">
        <div className=" text-3xl font-bold">All hotels</div>
        <div>
        <input type="search" placeholder="Search Hotel" className=" dark px-3 py-3 border border-gray-600 outline-none" onChange={(e)=>{setSearchName(e.target.value)}} />
        <button className="btn btn-primary ml-2" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {filteredHotels.length === 0 ? (
        hotels.map((hotel) => {
          return (
            <div
              key={hotel._id}
              className="dark flex flex-col text-center  lg:flex-row lg:text-left gap-4 py-4 border border-gray-300 bg-slate-200 mx-3"
            >
              <div className="lg:w-2/4 flex align-middle">
                <img
                  src={`${API}/${hotel?.photos[0]}`}
                  className="w-full px-4 object-cover"
                  alt={hotel.image}
                />
              </div>
              <div className="">
                <div className="flex flex-col gap-4">
                  <p className="text-blue-600 font-bold text-xl">
                    {hotel.name}
                  </p>
                  <p className=" text-blue-600 font-light text-sm underline">
                    {hotel.address},{hotel.city}
                    <span className="text-black no-underline pl-4">
                      {hotel.distance}
                    </span>
                  </p>
                  <div className="py-1">
                    Rating: 5
                    <StarIcon
                      fontSize="small"
                      className="text-orange-300 pb-1"
                    />{" "}
                  </div>
                  <div>
                    <p className="pr-10">{hotel.desc}</p>
                  </div>
                  <div className="py-4">
                    <Link
                      to={`/hotel/${hotel._id}`}
                      className="btn btn-primary px-10 text-lg"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        filteredHotels.map((hotel)=>{
          return (
            <div
              key={hotel._id}
              className="dark flex flex-col text-center  lg:flex-row lg:text-left gap-4 py-4 border border-gray-300 bg-slate-200 mx-3"
            >
              <div className="lg:w-2/4 flex align-middle">
                <img
                  src={`${API}/${hotel?.photos[0]}`}
                  className="w-full px-4 object-cover"
                  alt={hotel.image}
                />
              </div>
              <div className="">
                <div className="flex flex-col gap-4">
                  <p className="text-blue-600 font-bold text-xl">
                    {hotel.name}
                  </p>
                  <p className=" text-blue-600 font-light text-sm underline">
                    {hotel.address},{hotel.city}
                    <span className="text-black no-underline pl-4">
                      {hotel.distance}
                    </span>
                  </p>
                  <div className="py-1">
                    Rating: 5
                    <StarIcon
                      fontSize="small"
                      className="text-orange-300 pb-1"
                    />{" "}
                  </div>
                  <div>
                    <p className="pr-10">{hotel.desc}</p>
                  </div>
                  <div className="py-4">
                    <Link
                      to={`/hotel/${hotel._id}`}
                      className="btn btn-primary px-10 text-lg"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })
     
      )}
    </>
  );
};

export default AllHotels;
