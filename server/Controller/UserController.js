import User from "../Model/UserModel.js";


// UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
   next(err)
    
  }
};

// DELETE
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
   next(err)

  }
};

//  GET
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
   next(err)

  }
};

//  GET ALL
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
   next(err)

  }
};

export const updateRole = async (req, res) =>{
  let user = await User.findByIdAndUpdate(req.params.id,{
    isAdmin: req.body.isAdmin
  })
  if(!user){
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(user)
}

