import User from "../Model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Token from "../Model/tokenModel.js";
import crypto from "crypto";
import {expressjwt} from "express-jwt"
import dotenv from "dotenv"
import sendEmail from "../Utils/emailSender.js";
dotenv.config()


// register
export const register = async (req, res, next) => {
  try {
    let userExists = await User.findOne({ username: req.body.username });
    if (userExists) {
      return res.status(400).json({ error: "Username not available" });
    }
    userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser =await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    if (!newUser) {
      return res.status(400).json({ error: "something went wrong" });
    }

    let token = await Token.create({
      token: crypto.randomBytes(16).toString("hex"),
      user: newUser._id,
    });
    if (!token) {
      return res.status(400).json({ error: "Something is wrong" });
    }

    const url = `${process.env.CLIENT_URL}/emailverify/${token.token}`;
  sendEmail({
    from: "noreply@something.com",
    to: req.body.email,
    subject: "Verification mail",
    text: "plz click on this link for verification",
    html: `<a href="${url}"><button>Click to verify</button></a>`,
  })

    res.send(newUser);
  } catch (err) {
    next(err);
  }
};

// verify email
export const verifyEmail = async (req, res, next) => {
  try {
    let token = await Token.findOne({ token: req.params.token });
    if (!token) {
      return res
        .status(400)
        .json({ error: "Invalid token or token may be expired" });
    }
    let user = await User.findById(token.user);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    if (user.isVerified) {
      return res.status(400).json({ error: "User already verified" });
    }
    user.isVerified = true;
    user = await user.save();
    if (!user) {
      return res.status(400).json({ error: "Something went wrong" });
    }
    res.send({ messege: "User verified successfully" });
  } catch (error) {
    next(error)
  }
  
};

// login
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Wrong Password" });
    }
    if (!user.isVerified) {
      return res.status(400).json({ error: "Please verify your account" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
        email: user.email,
        username: user.username,
      },
      process.env.JWT
    );

    if (!token) {
      return res.status(400).json({ error: "something went wrong" });
    }
    res.cookie("mycookie", token, { expire: Date.now() + 86400 });

    const { _id, isAdmin, email, username } = user;
    res.send({ token, user: { _id, isAdmin, email, username } });
  } catch (err) {
    next(err);
  }
};


// for authentication
export const requireSignin = expressjwt({
  algorithms: ["HS256"],
  secret: process.env.JWT,
});

// logout
export const logOut = async (req, res) => {
  let response = await res.clearCookie("mycookie");
  if (!response) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send({ messege: "Signed out succcessfully" });
};

// forget password
export const forgetPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const token = await Token.create({
      token: crypto.randomBytes(16).toString("hex"),
      user: user._id,
    });

    if (!token) {
      return res.status(400).json({ error: "Something is wrong" });
    }

    const url = `${process.env.CLIENT_URL}/resetpassword/${token.token}`;
    sendEmail({
      from: "noreply@something.com",
      to: req.body.email,
      subject: "Password Reset",
      text: "Please click on the link to reset your password",
      html: `<a href="${url}"><button>Reset Password</button></a>`,
    });

    res.send({ message: "Password reset email sent successfully" });
  } catch (err) {
    next(err);
  }
};

// reset password
export const resetPassword = async (req, res, next) => {
  try {
    const token = await Token.findOne({ token: req.params.token });
    if (!token) {
      return res.status(400).json({ error: "Invalid token or token may be expired" });
    }

    const user = await User.findById(token.user);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const saltRounds = 12
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.newPassword, salt);

    user.password = hash
    const savedUser = await user.save();

    if (!savedUser) {
      return res.status(400).json({ error: "Something went wrong" });
    }

    // Remove the used token from the database
    

    res.send({ message: "Password reset successfully" });
  } catch (error) {
    next(error);
  }
};
