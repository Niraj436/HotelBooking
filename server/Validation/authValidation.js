import {check, validationResult} from "express-validator"

export const authCheck = [
    // Username check
   check("username","Username is required")
   .notEmpty()
   .matches(/^[a-zA-Z]+(?:\d+)?$/)
   .withMessage("Username must start with alphabetes")
   .isLength({min:3})
   .withMessage("Username must be at least 3 alphabets or alphabates with numbers"),
   
//    email check
   check("email", "email is required")
   .notEmpty()
   .isEmail()
   .withMessage("Email format incorrect"),

//    password check
   check("password", "password is required")
    .notEmpty()
    .matches(/[a-z]/).withMessage("password must consist of at least 1 lowercase alphabet")
    .matches(/[A-Z]/).withMessage("password must consist of at least 1 uppercase alphabet")
    .matches(/[0-9]/).withMessage("password must consist of at least 1 one number")
    .matches(/[!@#$%^&*]/).withMessage("password must consist of at least 1 one special character")
    .isLength({ min: 3 })
    .withMessage("password must be at least 3 characters"),
   

]

export const validateAuth = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({error: errors.array()[0].msg });
     
    }
    next()
  };