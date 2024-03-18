
import Contact from '../Model/ContactModel.js'

export const contactUs = async (req, res, next) => {
    const {name, email, contactNumber, message} = req.body

    try {
        const newContact = new Contact({
            name,
            email,
            contactNumber,
            message
        })

        const contact = await newContact.save()

        res.send("Contacted successfully")
    } catch (error) {
        next(error)
    }
}

export const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find()
        if(!contacts){
            res.status(400).json({error:"No contacts available"})
        }
        res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

export const deleteContact = async (req,res,next) => {
    try {
        await Contact.findByIdAndDelete(req.params.id)
        res.status(200).json("Contact deleted successfully")
    } catch (error) {
        next(error)
    }
}