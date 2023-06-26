import express from 'express'
import { createBooking, getAllBooking, getBooking } from './../controlles/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { get } from 'mongoose';
const router = express.Router();//const router=express.Router()
router.post('/',createBooking);
router.get('/',verifyUser,getBooking);
router.get('/',verifyAdmin,getAllBooking);


export default router;