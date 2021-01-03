import Users from '../models/users.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import authentication from '../config/config.js'

//Helper method to create jwt tokens for users which will expire in a week.

function jwtSignUser(user) {
    const ONE_WEEK=60*60*24*7

    return jwt.sign(user, authentication, {
        expiresIn: ONE_WEEK
    })
}


//all the methods for authentication.

//To add a new user in db.
const register=async (req, res) => {
    var newUser=new Users(req.body)
    newUser.password=bcrypt.hashSync(req.body.password, 10)
    await newUser.save(function (err, user) {
        if (err) {
            return res.status(400).send({
                message: err
            })
        }
        else {
            user.password=undefined
            return res.json({user: user, token: jwtSignUser(user.toJSON())})
        }
    })
}

const login=async (req, res) => {
    await Users.findOne({
        email: req.body.email
    }
        , function (err, user) {
            if (err) {
                throw err
            }
            if (!user||!user.comparePassword(req.body.password)) {
                res.status(401).send({message: 'The user does not exist'})
            }
            else {
                user.password = undefined
                return res.json({user: user, token: jwtSignUser(user.toJSON())})
            }
        }
    )

}

export {
    register,
    login
}