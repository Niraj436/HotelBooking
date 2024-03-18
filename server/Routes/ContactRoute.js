import express from "express"
import { contactUs, deleteContact, getAllContacts } from "../Controller/ContactController.js"

const router = express.Router()

router.post('/contactus', contactUs)
router.get('/getAllContacts', getAllContacts)
router.delete('/deleteContact/:id', deleteContact)

export default router