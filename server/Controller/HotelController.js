import Hotel from "../Model/HotelModel.js";
import Room from "../Model/RoomModel.js";

// CREATE
export const createHotel = async (req, res, next) => {
  // console.log(req.body)
  try {
    let newHotel = new Hotel({
      name: req.body.name,
      type: req.body.type,
      city: req.body.city,
      address: req.body.address,
      distance: req.body.distance,
      title: req.body.title,
      desc: req.body.desc,
      // photos: req.file?.path,
      cheapestPrice: req.body.cheapestPrice,
    });
    if (req.files && req.files.length > 0) {
      newHotel.photos = req.files.map((file) => file.path);
    }

    const savedHotel = await newHotel.save();

    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateHotel = async (req, res, next) => {
  try {
    let hotelExists = await Hotel.findOne({
      title: req.body.title,
    });

    // if the hotel with the same title already exists, return an error message
    if (hotelExists) {
      return res.status(400).json({ error: "Hotel already exists" });
    }

    // Update hotel
    let updateData = {
      name: req.body.name,
      type: req.body.type,
      city: req.body.city,
      address: req.body.address,
      distance: req.body.distance,
      title: req.body.title,
      desc: req.body.desc,
      cheapestPrice: req.body.cheapestPrice,
    };

    if (req.files && req.files.length > 0) {
      updateData.photos = req.files.map((file) => file.path);
    }

    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    );

    // If the hotel is not found, return an error message
    if (!updatedHotel) {
      return res.status(400).json({ error: "Something went wrong" });
    }

    res.send(updatedHotel);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

//  GET
export const getHotelDetails = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

//  GET ALL
export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

// GET HOTEL ROOMS
export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
