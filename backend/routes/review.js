import express from 'express'
import { createReview } from './../controlles/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router();//const router=express.Router()
router.post('/:tourId',verifyUser,createReview)
export default router;