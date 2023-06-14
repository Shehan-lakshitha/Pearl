import express from 'express'
import { createTour, updateTour,deleteTour,getSingleTour,getAllTour } from '../controlles/tourController.js'

const router = express.Router();

//create new tour
router.post('/',createTour);
//update tour
router.put('/:id',updateTour);
//delete tour 

router.delete('/:id',deleteTour);

//getSingleTour
router.get('/:id',getSingleTour);

//getAllTour
router.get('/',getAllTour);

export default router;