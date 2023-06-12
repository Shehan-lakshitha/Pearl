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

/*
//  updateTour                                                            
export const updateTour=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
//deleteTour
export const deleteTour=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
//getSingleTour
export const getSingleTour=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
//getAllTour
export const getAllTour=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}*/