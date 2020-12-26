import mongoose from 'mongoose'

//Creating a schema for post
const PostSchema=mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

//creating a model for the schema.
const PostMessage=mongoose.model('PostMessage', PostSchema)

//export the model
export default PostMessage