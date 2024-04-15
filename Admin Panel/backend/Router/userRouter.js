const express = require('express')
const userRouter = express.Router()
const User = require('../models/userModel')
const { verifyPassword, encyptPassword } = require('../utils/Password')



userRouter.get("/", (req, res) => {
    res.status(404).json("not found")
})


// for normal edit user details 
userRouter.put("/edituser/:id",async (req, res) => {
    const id = req.data._id
    const { fullName, mobile, discription } = req.body
	try {
			let data = await User.findByIdAndUpdate(id,{fullName, city, mobile,discription})
			if (data !== null) {
				let resultObj = data.toObject()
				delete resultObj.password
				delete resultObj.__v
				res.json(new ApiResponse(true, resultObj, "success"))
			}
		} catch (error) {
		let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
	}
})

userRouter.put("/changepassword/:id", async(req,res)=>{
    const id = req.params
    const {password,new_password} = req.body
    let newHashPass = null
    try {
        const resData = await User.find({id})
        if(resData!==null){
          const oldPass = resData.password
          let isMatch = await verifyPassword(oldPass,password)
          if(isMatch){
             newHashPass = await encyptPassword(new_password)
             let updatePass = User.findByIdAndUpdate(id,{password:newHashPass})
             if(updatePass){
                res.json(updatePass)
             }
          }
        }
    } catch (error) {
        let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
    }
})

userRouter.post("/upload",(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

// user logout

userRouter.put("/logout", (req, res) => {

})





module.exports = userRouter;