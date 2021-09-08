import express from 'express'
export const router = express.Router();
import {secret} from '../server'
import jwt from 'express-jwt'
import bodyParser from 'body-parser'
import {UserController } from './controller'

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

const userController = new UserController();

router.post('/users/register', async (req, res)=> await userController.registerUser(req, res))
router.post('/users/login',jwt({
    algorithms: ["HS256"],
    secret:secret
}), async (req, res)=> await userController.loginUser(req,res))
router.get('/users/list', async (req, res)=> await userController.getUsers(req, res))
router.get('/users/find/by/:id', async (req, res)=> await userController.getUserById(req, res))
router.put('/users/update/:id', async (req, res)=> await userController.updateUser(req,res))
router.delete('/users/deleteUser/:id', async(req, res) => await userController.deleteUser(req,res))



