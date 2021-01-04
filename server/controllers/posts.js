import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose'

//all the methods

const getPosts=async (req, res) => {

    try {
        //get all post messages from DB.
        const postMessages=await PostMessage.find()
        //send all posts to client.
        res.status(200).json(postMessages)

    } catch (error) {
        res.status(404).json({message: error.message})
    }

}



const newPost=async (req, res) => {
    // getting new post from request body
    const post = req.body

    //creating a new post in DB.
    const newPostmessage = new PostMessage(post)

    try {
        //Saving new post in the DB. 
        await newPost.save()
        
        //Sending the new post back to client.
        res.status(201).json(newPostmessage)
        
    } catch (error) {
        res.status(409).json({message: error.message})
    }

}

const updatePost=async (req, res) => {

    //getting id from the url parameter
    const {id: _id}=req.params
    //getting new post from requests body
    const post=req.body

    // checking if given id is a mongoose type objectid. If false then sending 404 to client
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`No id matching ${_id}`)
    }

    //Saving updated post after updating and finding it in the DB.
    const updatedPost=await PostMessage.findByIdAndUpdate(_id, post, {new: true})

    //Sending the updated post back to client
    res.json(updatedPost)

}

export {
    getPosts,
    newPost,
    updatePost
}

