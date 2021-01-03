//All the imports
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import jsonwebtoken from 'jsonwebtoken'
import postRoutes from './routes/posts.js'
import authenticationRoutes from './routes/authentication.js'

//Initialize the app with express.
const App=express()

//Basic setup to add modules on server with 30mb cap for json data passed.
App.use(bodyParser.json({limit: "30mb", extended: true}))
App.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
App.use(cors())

//Using Morgan to log all the requests on console.
App.use(morgan('combined'))

//Use all authentication routes
App.use('/authentication', authenticationRoutes)

//Use all the routs related to posts
App.use('/posts', postRoutes)

//Creating a PORT to run the server.
const PORT=process.env.PORT||5000


//Database setup
const CONNECTION_URL='mongodb://andfield:1234@cluster0-shard-00-00.bntie.mongodb.net:27017,cluster0-shard-00-01.bntie.mongodb.net:27017,cluster0-shard-00-02.bntie.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-p42fwt-shard-0&authSource=admin&retryWrites=true&w=majority'


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => App.listen(PORT, () => console.log(`The server is running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)




