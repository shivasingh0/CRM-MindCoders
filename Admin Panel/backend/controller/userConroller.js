const userModel = require('../models/userModel')
require('dotenv').config()
const { generateAccessToken } = require('../config/tokenManager')
const { ApiResponse } = require('../Response/apiResponse')
const { encyptPassword, verifyPassword } = require('../utils/Password')
const errorHendlar = require('../utils/errorHendler')

// LoginUser
const LoginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        if (email) {
            let data = await userModel.findOne({ email, isActive: true, isAccessToApplication: true })
            if (data) {
                if (password) {
                    const hashPassword = data.password
                    const isMatch = await verifyPassword(password, hashPassword)
                    if (isMatch) {
                        const token = generateAccessToken(data)
                        let loginData = data.toObject()
                        loginData.token = token
                        delete loginData.password
                        delete loginData.__v
                        delete loginData.adder
                        delete loginData.experience
                        delete loginData.bank_details
                        res.json(new ApiResponse(true, loginData, "sign in successfully"))
                    } else {
                        res.json(new ApiResponse(false, null, "incorrect password"))
                    }
                } else {
                    res.json(new ApiResponse(false, null, "please enter your password"))
                }
            } else {
                res.json(new ApiResponse(false, null, "incorrect email"))
            }
        } else {
            res.json(new ApiResponse(false, null, "please enter your email and password"))
        }
    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
}

module.exports = {LoginUser};