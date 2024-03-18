import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    roomid: {
      type: String,
      required: true,
    },
    roomnumber: {
      type: Number,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    fromdate: {
      type: String,
      required: true,
    },
    todate: {
      type: String,
      required: true,
    },
    totalamount: {
      type: Number,
      required: true,
    },
    totaldays: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
    },
    status: {
      type: String,
      default: "booked",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
