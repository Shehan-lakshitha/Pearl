import Tour from "../models/Tour.js";
//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

//updateTour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateTour,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again" });
  }
};

//deleteTour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. Try again" });
  }
};

//getSingleTour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

//getAllTour
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);
  console.log(page);
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

//get tour by search
export const getTourBysearch = async (req, res) => {
  //here i means case sansitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    //get means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

//get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch" });
  }
};