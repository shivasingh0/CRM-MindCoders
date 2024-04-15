const express = require('express')
const userRouter = express.Router()
const User = require('../models/userModel')
const { verifyPassword, encyptPassword } = require('../utils/Password')
const errorHendlar = require('../utils/errorHendler')
const { ApiResponse } = require("../Response/apiResponse");



userRouter.get("/", (req, res) => {
    res.status(404).json("not found")
})


// for normal edit user details 
userRouter.put("/edituser/:id:id",async (req, res) => {
    const {id} = req.params
    // const { fullName, mobile, discription } = req.body
	try {
			let data = await User.findByIdAndUpdate(id,req.body,{new:true})
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
    const {id} = req.params
    const {password,new_password} = req.body
    let newHashPass = null
    try {
        const resData = await User.findById(id)
        console.log(resData );
        if(resData!==null){
          const oldPass = resData.password
          console.log(oldPass)
          let isMatch = await bcrypt.compare(oldPass, password);;
          console.log
          console.log(isMatch);
          if(isMatch){
            console.log("is match block");
             newHashPass = await encyptPassword(new_password);
             let updatePass = User.findByIdAndUpdate(id,{password:newHashPass});
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