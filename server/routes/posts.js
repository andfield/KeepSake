import express from 'express'
import {getPosts, newPost,updatePost} from '../controllers/posts.js'

//create a router component
const router = express.Router()

router.get('/', getPosts) //get request from /post/ and fire up getPost controller
router.post('/', newPost) //post request from /post/ to fire up newPost controller
router.patch('/:id', updatePost) //Patch request from /post/: id parameter and fire up updatepost controller.

export default router