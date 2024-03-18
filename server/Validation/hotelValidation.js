import {check, validationResult} from "express-validator"

export const HotelCheck = [
    // hotel name
    check("name","Hotel name is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Hotel name must be at least three letters")
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("Hotel name must be only alphabets"),

    // hotel type
    check("type", "Hotel type must be selected")
    .notEmpty(),

    // hotel city
    check("city", "City name is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("City name must be at least three letters")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("City name must be only alphabets"),

    // hotel address
    check("address", "Address is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Address must be at least three letters")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("Address must be only alphabets"),

    // distance
    check("distance", "Distance is required")
    .notEmpty()
    .matches(/^\d+\s?[a-zA-Z]+$/)
    .withMessage("Distance must start with numbers then with distance unit"),

    // hotel title
    check("title", "Title is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Title must be at least three letters"),
    

    // hotel desc
    check("desc", "Description is required")
    .notEmpty()
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 letters"),
    

    // hotel cheapest Price
    check("cheapestPrice", "Cheapest price is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Cheapest price must be numeric"),

];

export const validateHotel = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({error: errors.array()[0].msg });
     
    }
    next()
  };

