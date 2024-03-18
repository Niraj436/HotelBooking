import express from "express";

import {  cancelRoom, getAllBookings, getBookingsByUserId, roomBook } from "../Controller/BookingController.js";

const router = express.Router();

router.post("/bookroom", roomBook);
router.get("/getbookingbyuser/:userid",getBookingsByUserId)
router.get("/getAllBookings", getAllBookings)
router.delete("/cancelroom/:id/:roomid", cancelRoom)

export default router;
