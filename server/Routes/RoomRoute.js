import express from "express"
import { createRoom, deleteRoom, getAllRooms, getHotelByroom, getRoomDetails, updateRoom } from "../Controller/RoomController.js"
import { roomCheck, validateRoom } from "../Validation/roomValidation.js"
import upload from "../Utils/FileUpload.js"




const router = express.Router()


router.post("/:hotelid",upload.array("photos"),roomCheck,validateRoom,createRoom)
router.put("/:id",upload.array("photos"),updateRoom)
router.delete("/:id/:hotelid",deleteRoom)
router.get("/:id",getRoomDetails)
router.get("/",getAllRooms)
router.get("/getHotelByRoom/:roomId", getHotelByroom)


export default router