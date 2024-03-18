import express from "express"
import { deleteUser, getAllUsers, getUser, updateRole, updateUser } from "../Controller/UserController.js"


const router = express.Router()

// router.get("/check",verifytoken, (req, res, next)=>{
//     res.send("hello you are logged in")
// })

// router.get("/checkuser/:id",verifyUser, (req, res, next)=>{
//     res.send("hello you are logged in and u can delete your account")
// })
// router.get("/checkadmin/:id",verifyAdmin, (req, res, next)=>{
//     res.send("hello admin you are logged in and u can delete all account")
// })


router.put("/:id",updateUser)
router.put("/updateisadmin/:id",updateRole)
router.delete("/:id",deleteUser)
router.get("/:id",getUser)
router.get("/",getAllUsers)




export default router