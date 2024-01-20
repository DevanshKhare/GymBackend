import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/getAllUsers', userController.getAllUsers);

router.post('/createUser', userController.createUser);

router.post('/login', userController.login);


export default router;
