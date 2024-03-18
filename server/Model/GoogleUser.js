import mongoose from "mongoose";

const GoogleUserSchema = new mongoose.Schema({
  googleId:String,
  displayName:String,
  email: String,
  image:String
  
},
{timestamps:true}
);

export default mongoose.model("GoogleUser", GoogleUserSchema);
