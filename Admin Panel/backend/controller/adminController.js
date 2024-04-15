const adminModel = require('../models/adminModel');
const errorHendlar = require('../utils/errorHendler')
const { ApiResponse } = require("../Response/apiResponse");


const RegisterAdmin = async (req, res) => {
    const { fullName, email, password, mobile } = req.body
    let hashPassword = null
    try {
        if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/.test(password)) {
            hashPassword = await encyptPassword(password)
        } else {
            res.json(new ApiResponse(false, null, "use strong password and minimum 6 character "))

        }
        if (hashPassword !== null) {
            let response = await adminModel.create({
                fullName,
                password: hashPassword,
                email,
                mobile
            })

            if (response !== null) {
                let Obj = response.toObject()
                delete Obj.__v
                delete Obj.password
                res.status(200).json("register successfully")
            }
        }

    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
}

module.exports = {RegisterAdmin};
const { generateAccessToken } = require('../config/tokenManager')
const adminModel = require('../models/userModel')
require('dotenv').config()
const { ApiResponse } = require('../Response/apiResponse')
const { encyptPassword, verifyPassword } = require('../utils/Password')
const errorHendlar = require('../utils/errorHendler')
 
// RegisterAdmin
const RegisterAdmin = async (req, res) => {
    const { fullName, email, password, mobile } = req.body
    let hashPassword = null
    try {
        if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/.test(password)) {
            hashPassword = await encyptPassword(password)
        } else {
            res.json(new ApiResponse(false, null, "use strong password and minimum 6 character "))

        }
        if (hashPassword !== null) {
            let response = await adminModel.create({
                fullName,
                password: hashPassword,
                email,
                mobile
            })

            if (response !== null) {
                let Obj = response.toObject()
                delete Obj.__v
                delete Obj.password
                res.status(200).json("register successfully")
            }
        }

    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
}

// LoginAdmin
const LoginAdmin = async (req, res) => {
    const { email, password } = req.body
    try {
        if (email) {
            let data = await adminModel.findOne({ email, isActive: true, isAccessToApplication: true })
            if (data !== null) {
                if (password) {
                    const hashPassword = data.password
                    const isMatch = await verifyPassword(password, hashPassword)
                    if (isMatch) {
                        const token = generateAccessToken(data)
                        let loginData = data.toObject()
                        loginData.token = token
                        delete loginData.password
                        delete loginData.__v
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

module.exports = {LoginAdmin, RegisterAdmin}