import PostMessage from '../models/postMessage.js'


//all the methods
const getPosts=async (req, res) => {

    try {
        const postMessages=await PostMessage.find()
        res.status(200).json(postMessages)

    } catch (error) {
        res.status(404).json({message: error.message})
    }

}



const newPost=async (req, res) => {
    const newPost=new PostMessage(req.body)

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }

}

export {
    getPosts,
    newPost
}

