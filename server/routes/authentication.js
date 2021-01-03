import express from 'express'
import {register, login } from '../controllers/authentication.js'

//create a router component
const router = express.Router()

router.post('/register', register)
router.post('/login', login)

export default router