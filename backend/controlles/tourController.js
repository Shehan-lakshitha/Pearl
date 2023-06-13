import Tour from '../models/Tour.js'
//create new tour
export const createTour = async(req,res)=>{
    const newTour=new Tour(req.body)
    try {
        const savedTour= await newTour.save();
        res
        .status(200)
        .json({
            success:true,
            message:"Successfully created",
            data: savedTour,
        });
    } catch (error) {
        res
        .status(500)
        .json({success:false,message:"Failed to create. Try again"});
    }
}

//updateTour                                                            
export const updateTour=async(req,res)=>{
   const id = req.params.id
    try {
        const updateTour= await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res
        .status(200)
        .json({
            success:true,
            message:"Successfully updated",
            data: updateTour,
        });

    } catch (error) {
        res
        .status(500)
        .json({success:false,message:"Failed to update. Try again"});
    }
}

//deleteTour
export const deleteTour=async(req,res)=>{
    
    const id = req.params.id
    try {
         await Tour.findByIdAndDelete(id)
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

//getSingleTour
export const getSingleTour=async(req,res)=>{
    const id = req.params.id
    try {
        const tour= await Tour.findById(id)
        res
        .status(200)
        .json({
            success:true,
            message:"Successfully deleted",
            data:tour,
        });

    } catch (error) {
        res
        .status(404)
        .json({success:false,message:"Not found"});
    }
}

//getAllTour
export const getAllTour=async(req,res)=>{
    //for pagination
    const page=parseInt(req.query.page);
    console.log(page);
    try {
        const tours= await Tour.find({});
        res
        .status(200)
        .json({
            success:true,
            message:"Successfully",
            data:tours,
        });

    } catch (error) {
        res
        .status(404)
        .json({success:false,message:"Not found"});
    }
}