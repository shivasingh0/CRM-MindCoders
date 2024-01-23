const express = require('express')
const { ApiResponse } = require('../Response/apiResponse')
const { encyptPassword, verifyPassword } = require('../utils/Password')
const errorHendlar = require('../utils/errorHendler')
const userModel = require('../models/userModel')
const adminModel = require('../models/adminModel')
const { generateAccessToken } = require('../config/tokenManager')
const customerModel = require('../models/costmerModel')
require('dotenv').config()
const v1router = express.Router()


v1router.get("/", (req, res) => {
    res.status(404).json("cant not found")
})

v1router.post("/mindadmin", async (req, res) => {
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
})

// user login 

v1router.post("/user/login", async (req, res) => {
    const { email, password } = req.body
    try {
        if (email) {
            let data = await userModel.findOne({ email, isActive: true, isAccessToApplication: true })
            if (data) {
                if (password) {
                    const hashPassword = data.password
                    const isMatch = await verifyPassword(password, hashPassword)
                    if (isMatch) {
                        let loginData = data.toObject()

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
})



// admin login 

v1router.post("/admin/login", async (req, res) => {
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
})

v1router.post('/enquiry', async (req, res) => {
    const { fullName,mobile,course,discription} = req.body
    try {
        let data = await customerModel.create({fullName,mobile,course,discription})
        if(data){
            res.status(200).json({status:true,msg:"success"})
        }else{
            res.json({status:false,msg:"enquiry send failed"})
        }
    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
})



module.exports = v1router;