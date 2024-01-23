const express = require('express')
const { encyptPassword } = require('../../utils/Password')
const Users = require('../../models/userModel')
const errorHendlar = require('../../utils/errorHendler')
const { ApiResponse } = require('../../Response/apiResponse')
const userControlRouter = express.Router()


// get all user who registered by admin
userControlRouter.get("/", (req, res) => {
	let id = req.data._id
  try {
	let data = Users.find({id,isActive:true,isAccessToApplication:true}).populate('Superadmin')
	res.json(data)
  } catch (error) {
	let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
  }
})


// for add to new user in application
userControlRouter.post("/addnewuser", async (req, res) => {
    const { fullName, email, mobile, city, password,role,last_company,discription,experience } = req.body
	let hashPassword = null
	try {
		if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/.test(password)) {
			hashPassword = await encyptPassword(password)
		} else {
			res.json(new ApiResponse(false,null, "use strong password and minimum 6 character "))
			
		}
		if (hashPassword !== null) {
			let data = await Users.create({ fullName, email, role, city, mobile, last_company,discription,experience, password: hashPassword,adder:req.data._id })
			if (data !== null) {
				let resultObj = data.toObject()
				delete resultObj.password
				delete resultObj.__v
				res.json(new ApiResponse(true, resultObj, "success"))
			}
		}
	} catch (error) {
		let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
	}
})


// for access to this application
userControlRouter.put("/permissions/:id",async (req, res) => {
	const id = req.params
	try {
		let data = await Users.findOneAndUpdate(id,{isAccessToApplication:true},{new:true})
		if(data){
			res.json(data)
		}
	} catch (error) {
		let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
	}
    
})


// users who have not Access to this application
userControlRouter.get("/notaccess/", (req, res) => {
    try {
		let data = Users.find({isActive:false,isAccessToApplication:false})
		res.json(data)
	} catch (error) {
		let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
	}
})


// delete user in your application
userControlRouter.put("/delete/:id",async (req, res) => {
    const id = req.params
	try {
		let data = await Users.findOneAndUpdate({id,isActive:false})
		if(data){
			res.json(data)
		}
	} catch (error) {
		let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
	}
})


module.exports = userControlRouter;