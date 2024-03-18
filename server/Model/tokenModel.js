import mongoose from "mongoose"
const {ObjectId} = mongoose.Schema

const tokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required: true
    },
    user:{
        type : ObjectId , 
        ref:"User"
    },
    createdAt:{
        type:Date,
        default: Date.now(),
        expires: 86400
    }
})
export default mongoose.model("Token", tokenSchema)