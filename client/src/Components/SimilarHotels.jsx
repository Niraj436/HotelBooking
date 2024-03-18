import React from 'react'
import { API } from '../config'
import StarIcon from "@mui/icons-material/Star";
import { Link } from 'react-router-dom';


const SimilarHotels = ({hotel}) => {
  return (
    <>
        <div
              key={hotel._id}
              className="flex flex-col text-center  lg:flex-row lg:text-left gap-4 py-4 border border-gray-300 bg-slate-200 dark"
            >
              <div className="lg:w-2/4 flex align-middle">
                <img
                  src={`${API}/${hotel?.photos[0]}`}
                  className="w-full px-4 object-cover"
                  alt={hotel.image}
                />
              </div>
              <div className="">
                <div className='flex flex-col gap-4'>
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
                  <div className='py-4'>
                    <Link to={`/hotel/${hotel._id}`} className="btn btn-primary px-10 text-lg">Book</Link>
                   
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default SimilarHotels