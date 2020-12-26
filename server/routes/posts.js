import express from 'express'
import {getPosts, newPost} from '../controllers/posts.js'

//create a router component
const router = express.Router()

router.get('/', getPosts)
router.post('/', newPost)

export default router