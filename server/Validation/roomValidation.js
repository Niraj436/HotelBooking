import { check, validationResult } from "express-validator";

export const roomCheck = [
  // room name
  check("title", "Room title is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Title name must be at least three letters")
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("Room title must be only alphabets"),

  // Room price
  check("price", "Price is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Price must be number only"),

  // Maximum people
  check("maxPeople", "Max people is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Max people must be only number"),

  // description
  check("desc", "Description is required")
    .notEmpty()
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 letters"),

  // room Number
  check("roomNumber", "Room number is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Room number should be numeric")
];

export const validateRoom = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
