import express from 'express'
import { createTour, updateTour,deleteTour,getSingleTour,getAllTour, getTourBysearch, getFeaturedTour,getTourCount } from '../controlles/tourController.js'

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

//get tour by search
router.get('/search/getTourBySearch',getTourBysearch);

//get toyr by search
router.get('/search/getFeaturedTours',getFeaturedTour);
//get toyr by search
router.get('/search/getTourCount',getTourCount);

export default router;