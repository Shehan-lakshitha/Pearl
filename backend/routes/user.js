import express from 'express'
import {  updateUser,deleteUser,getSingleUser,getAllUser } from '../controlles/userController.js'

const router = express.Router();
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
//update User
router.put('/:id',verifyUser,updateUser);
//delete User 

router.delete('/:id',verifyUser,deleteUser);

//get Single User
router.get('/:id',verifyUser,getSingleUser);

//get All User
router.get('/',verifyAdmin,getAllUser);
export default router;