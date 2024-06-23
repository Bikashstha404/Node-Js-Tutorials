const User = require("../Models/user")

async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find({})
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res){
    const user = await User.findById(req.params.id)
    return res.json(user)
}

async function handleUpdateUserById(req, res){
    await User.findByIdAndUpdate(req.params.id, {lastName: 'Changed'})
    return res.json({status: "Update Complete"})
}

async function handleDeleteUserById(req, res){
    await User.findByIdAndDelete(req.params.id) 
    return res.json({status: "Delete user succesfully"})
}

async function handleCreateNewUser(req, res){
    const allDbUsers = await User.find({});
    const body = req.body;
    console.log(body)
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title){
            return res.status(400).json({msg: "All filed should be filled"})
        }
    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
        return res.status(400).json({ msg: "Email already exists" });
    }
        
   const result =  await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })
    console.log(result)

    return res.status(201).json({msg: "Succesfull", id: result._id})
}
module.exports = {
    handleGetAllUsers,
    handleGetUserById, 
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}