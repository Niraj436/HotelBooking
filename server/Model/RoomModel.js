import mongoose from "mongoose";


const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

  roomNumber:{
    type: Number,
    required: true
  } ,
  currentbookings:[],
});

export default mongoose.model("Room", RoomSchema);
