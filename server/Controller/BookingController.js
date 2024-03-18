import Booking from "../Model/BookingModel.js";
import Room from "../Model/RoomModel.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
dotenv.config();

export const roomBook = async (req, res, next) => {
  const { room, userid, fromdate, todate, totaldays, totalamount } = req.body;

  try {
    const newbooking = new Booking({
      room: room.title,
      roomid: room._id,
      roomnumber: room.roomNumber,
      userid,
      fromdate,
      todate,
      totaldays,
      totalamount,
      transactionId: uuidv4(),
    });
    const booking = await newbooking.save();

    try {
      await Room.findByIdAndUpdate(room._id, {
        $push: {
          currentbookings: {
            bookingId: booking._id,
            fromdate,
            todate,
            userid,
            status: booking.status,
          },
        },
      });
    } catch (error) {
      next(error);
    }

    res.send("Room booked successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const getBookingsByUserId = async (req, res, next) => {
  const userId = req.params.userid;

  try {
    const bookings = await Booking.find({ userid: userId });

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: "No hotels booked by user" });
    }

    res.send(bookings);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find()
    if(!bookings){
      res.status(400).json({error:'No bookings available'})
    }
    res.status(200).json(bookings)
  } catch (error) {
    next(error)
  }
}

export const cancelRoom = async (req, res, next) => {
  const roomId = req.params.roomid;
  const bookingId = req.params.id;

  try {
    // Remove the booking from currentbookings array in the Room document
    const room = await Room.findByIdAndUpdate(
      roomId,
      { $unset: { currentbookings: "" } },
      { new: true } // To return the updated document
    );

    // If the booking was not found in the room's currentbookings array
    if (!room) {
      return res.status(404).json({ error: 'Booking not found in room' });
    }

    // Delete the booking by its ID
    await Booking.findByIdAndDelete(bookingId);

    // Send response
    res.status(200).json("Booking has been canceled");
  } catch (err) {
    // Handle errors
    next(err);
  }
};
