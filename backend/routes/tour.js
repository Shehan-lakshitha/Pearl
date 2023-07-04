import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBysearch,
  getFeaturedTour,
  getTourCount,
} from "./../controlles/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post("/", verifyAdmin, createTour);
//update tour
router.put("/:id", verifyAdmin, updateTour);
// //delete tour

router.delete("/:id", verifyAdmin, deleteTour);

// //getSingleTour
router.get("/:id", getSingleTour);

// //getAllTour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBysearch);

// //get tour by search
router.get("/search/getFeaturedTours", getFeaturedTour);
// //get tour by search
router.get("/search/getTourCount", getTourCount);

export default router;
