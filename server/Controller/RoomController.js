import Room from "../Model/RoomModel.js"
import Hotel from "../Model/HotelModel.js";

// CREATE
export const createRoom = async (req, res, next) =>{
 
 const hotelId = req.params.hotelid
 
 try {
  let newRoom = new Room({
    title: req.body.title,
    price: req.body.price,
    maxPeople: req.body.maxPeople,
    desc: req.body.desc,
    roomNumber: req.body.roomNumber,
  });
  
 
    const savedRoom = await newRoom.save();

    try {
        await Hotel.findByIdAndUpdate(hotelId, {
            $push : {rooms: savedRoom._id},
        })
    } catch (err) {
        next(err)
    }
    res.send(savedRoom)
    
 } catch (err) {
    next(err)
 }
}

// UPDATE
export const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
     next(err)
      
    }
  };
  
  // DELETE
  export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid
    try {
      await Room.findByIdAndDelete(req.params.id);

      try {
        await Hotel.findByIdAndUpdate(hotelId, {
            $pull : {rooms: req.params.id},
        })
    } catch (err) {
        next(err)
    }
      res.status(200).json("Room has been deleted");
    } catch (err) {
     next(err)
  
    }
  };
  
  //  GET
  export const getRoomDetails = async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (err) {
     next(err)
  
    }
  };
  
  //  GET ALL
  export const getAllRooms = async (req, res, next) => {
    try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
    } catch (err) {
     next(err)
  
    }
  };

  export const getHotelByroom = async(req,res) => {
    const roomId = req.params.roomId;

  // Find the hotel that contains the selected room
  const hotel = await Hotel.findOne({ rooms: roomId }).exec();
  ;

  if (hotel) {
    res.send(hotel);
  } else {
    res.status(404).json({ error: 'Hotel not found for the provided roomId' });
  }
}