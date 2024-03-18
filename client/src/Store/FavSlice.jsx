import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const items = localStorage.getItem("favLists") !== null ? JSON.parse(localStorage.getItem('favLists')) : []

 const initialState = {
    favList:items,
 }
const favSlice = createSlice({
  name: "fav",
  initialState ,
  reducers: {
    addFav(state, action) {
      const hotelToAdd = action.payload;
      // Check if the hotel with the same ID is already in the favorites
      const isAlreadyAdded = state.favList.some((hotel) => hotel._id === hotelToAdd._id);
      
      if (!isAlreadyAdded) {
        state.favList.push(hotelToAdd);
      }
      else{
        Swal.fire({
          icon: 'error',
          title:"Already in your favlist",
          timer:5000,
          showCancelButton:false
        })
      }

      localStorage.setItem("favLists", JSON.stringify(state.favList.map(item=>item)))
      
    },
    removeFav(state, action) {
      const hotelIdToRemove = action.payload;
      state.favList = state.favList.filter((hotel) => hotel._id !== hotelIdToRemove)

      localStorage.setItem("favLists", JSON.stringify(state.favList.map(item=>item)))
    },
  },
});

export const { addFav, removeFav } = favSlice.actions;
export default favSlice.reducer;
