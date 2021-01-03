'use strict'

import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


//Creating a schema for users
const UsersSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: { type : String , unique : true, required : true, dropDups: true },
    password: { type : String },
})


//Hashing Password using bcrypt.
UsersSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}


//creating a model for users schema.
const Users = mongoose.model('Users', UsersSchema)

//export the model
export default Users