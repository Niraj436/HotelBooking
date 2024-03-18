import React from "react";
import { useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import { API } from "../../config";
import { useDispatch } from "react-redux";
import { removeFav } from "../../Store/FavSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UserFavList = () => {
  const hotels = useSelector((state) => state.fav.favList);
  const dispatch = useDispatch();
 

  const handleRemove = (hotelid) => {
    Swal.fire({
      title:"FavList",
      text:"Do you want to remove this hotel from your favlist ",
      icon:"question",
      showCancelButton:true,
      confirmButtonText:"Yes",
      confirmButtonColor:"red"
     }).then((result)=>{
      if(result.isConfirmed){
          Swal.fire({
              title:"Removed successfully",
              icon:"success",
              timer:2000,
              showCancelButton: false
          })
          dispatch(removeFav(hotelid));
        }
      })
    
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-600 shadow-lg text-center py-6">
        My Favorite Hotels list
      </h2>

      {hotels.length > 0 ? (
        hotels.map((hotel) => {
          return (
            <div
              key={hotel._id}
              className="flex flex-col text-center  lg:flex-row lg:text-left gap-4 py-4 border border-gray-300 bg-slate-200 dark"
            >
              <div className="lg:w-3/4 flex align-middle">
                <img
                  src={`${API}/${hotel?.photos[0]}`}
                  className="w-full px-4 object-cover"
                  alt={hotel.image}
                />
              </div>
              <div className="">
                <div>
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
                  <div>
                    <Link to={`/hotel/${hotel._id}`} className="btn btn-primary px-10 mx-2">Book</Link>
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
        })
      ) : (
        <p className="text-2xl text-center py-10">No favourite hotels currently</p>
      )}
    </div>
  );
};

export default UserFavList;
