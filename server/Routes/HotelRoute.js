import express from "express"
import { createHotel, deleteHotel, getAllHotels, getHotelDetails, getHotelRooms, updateHotel } from "../Controller/HotelController.js"
import upload from "../Utils/FileUpload.js"
import { requireSignin } from "../Controller/AuthController.js"
import { HotelCheck, validateHotel } from "../Validation/hotelValidation.js"

const router = express.Router()

router.post("/",upload.array("photos"),requireSignin,HotelCheck,validateHotel,createHotel);
router.put("/:id",upload.array("photos"),updateHotel)
router.delete("/:id",deleteHotel)
router.get("/:id",getHotelDetails)
router.get("/",getAllHotels)
router.get("/rooms/:id",getHotelRooms)

export default router