import express from 'express'
import {  updateUser,deleteUser,getSingleUser,getAllUser } from '../controlles/userController.js'

const router = express.Router();
import { verityUser } from '../utils/verifyToken.js';
//update User
router.put('/:id',updateUser);
//delete User 

router.delete('/:id',deleteUser);

//get Single User
router.get('/:id',verityUser,getSingleUser);

//get All User
router.get('/',getAllUser);
export default router