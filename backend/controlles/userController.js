import User from '../models/User.js'
//create new User
export const createUser = async(req,res)=>{
    const newUser=new User(req.body);
    try {
        const savedUser= await newUser.save();
        res
        .status(200)
        .json({
            success:true,
            message:"Successfully created",
            data: savedUser,
        });
    } catch (err) {
        res
        .status(500)
        .json({success:false,message:"Failed to create. Try again"});
    }
}
//updateUser                                                            
export const updateUser=async(req,res)=>{
   const id = req.params.id
    try {
        const updateUser= await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res
        .status(200)
        .json({
            success:true,
            message:"Successfully updated",
            data: updateUser,
        });

    } catch (error) {
        res
        .status(500)
        .json({success:false,message:"Failed to update. Try again"});
    }
}
//deleteUser
export const deleteUser=async(req,res)=>{
    
    const id = req.params.id
    try {
         await User.findByIdAndDelete(id)
        res
        .status(200)
        .json({
            success:true,
            message:"Successfully deleted",
        });

    } catch (error) {
        res
        .status(500)
        .json({success:false,message:"Failed to delete. Try again"});
    }
}
//getSingleUser
export const getSingleUser=async(req,res)=>{
    const id = req.params.id;
    try {
        const user= await User.findById(id);
        res
        .status(200)
        .json({
            success:true,
            message:"Successful",
            data:user,
        });

    } catch (err) {
        res
        .status(404)
        .json({success:false,message:"Not found"});
    }
}
//getAllUser
export const getAllUser=async(req,res)=>{
   //console.log(page);
    try {
        const users= await User.find({})
       
        res
        .status(200)
        .json({
            success:true,
            message:"Successfully",
            data:users,
        });

    } catch (err) {
        res
        .status(404)
        .json({success:false,message:"Not found"});
    }
}