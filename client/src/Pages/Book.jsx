import React, { useEffect, useState } from "react";
import moment from "moment";
import { DatePicker, Space } from "antd";
import AllHotels from "./AllHotels";
import { getAllHotels } from "../API/HotelsApi";
import { isAuthenticated } from "../API/authApi";
import BookSearchaAllhotels from "../Components/BookSearchaAllhotels";
const { RangePicker } = DatePicker;

const Book = () => {
  const [fromdate, setFromdate] = useState();
  const [toDate, setToDate] = useState();
  const [people, SetPeople] = useState();
  const [price, setPrice] = useState();
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [searchName, setSearchName] = useState("");

  const { token } = isAuthenticated();
  const filterByDate = (dates) => {
    setFromdate(moment(dates[0]).format("DD-MM-YYYY"));
    setToDate(moment(dates[1]).format("DD-MM-YYYY"));
  };

  const filterByPeople = (e) => {
    SetPeople(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let result;

    if (searchCity && searchName) {
      result = hotels.filter(
        (hotel) =>
          hotel.city.toLowerCase() === searchCity.toLowerCase() &&
          hotel.name.toLowerCase().includes(searchName.toLowerCase())
      );
    } else if (searchCity) {
      result = hotels.filter(
        (hotel) => hotel.city.toLowerCase() === searchCity.toLowerCase()
      );
    } else if (searchName) {
      result = hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchName.toLowerCase())
      );
    } else {
      // If neither city nor name is provided, show all hotels
      result = hotels;
    }

    setFilteredHotels(result);
  };

  useEffect(() => {
    getAllHotels().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHotels(data);
      }
    });
  }, []);
  return (
    <>
      <div>
        <form
          action=""
          className="py-10 border border-gray-300 mx-5 my-2 rounded-md hover:shadow-2xl"
        >
          <h2 className="text-3xl py-3 font-bold text-center pb-10">
            {" "}
            Search Hotel
          </h2>
          <div className="flex justify-center flex-wrap gap-10">
            <div className="">
              <label htmlFor="max-price" className="font-semibold">
                Hotel Name
              </label>{" "}
              <br />
              <input
                type="search"
                className="border border-gray-300 w-64 px-4 py-3"
                placeholder="Hotel name"
                onChange={(e) => {
                  setSearchName(e.target.value);
                }}
              />
            </div>

            <div className="">
              <label htmlFor="location" className="font-semibold">
                Location
              </label>{" "}
              <br />
              <input
                type="search"
                id="location"
                className="border border-gray-300 w-64 px-4 py-3"
                placeholder="Enter city"
                onChange={(e) => {
                  setSearchCity(e.target.value);
                }}
              />
            </div>
          </div>
          <div className=" flex justify-center py-8">
           
            <button
              className="btn btn-secondary px-16 text-lg "
              onClick={handleSearch}
            >
              Search Hotel
            </button>
          </div>
        </form>
      </div>
      <div>
        {filteredHotels.map((hotel) => {
          return (
            <BookSearchaAllhotels
              key={hotel._id}
              hotel={hotel}
              fromdate={fromdate}
              toDate={toDate}
            />
          );
        })}
      </div>
    </>
  );
};

export default Book;
