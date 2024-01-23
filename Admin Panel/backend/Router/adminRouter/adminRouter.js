const express = require('express')
const custRouter = require('./customerControll')
const userControlRouter = require('./userControll')
const Admin = require('../../models/adminModel')
const teamRouter = require('./teamRouter')
const courseRouter = require('./courseRouter')
const classRouter = require('./classRouter')
const adminRouter = express.Router()


adminRouter.get("/",(req,res)=>{
    res.status(404).json("not found")
})


// change password admin

adminRouter.put('/chngpass/:id',async(req,res)=>{
    const id = req.params
    const {password,new_password} = req.body
    let newHashPass = null
    try {
        const resData = await Admin.findOne({id})
        if(resData!==null){
          const oldPass = resData.password
          let isMatch = await verifyPassword(oldPass,password)
          if(isMatch){
             newHashPass = await encyptPassword(new_password)
             let updatePass = await Admin.findByIdAndUpdate(id,{password:newHashPass})
             if(updatePass){
                res.json(updatePass)
             }
          }else{
            res.json("password is not match")
          }
        }else{
            res.json("could not find !")
        }
    } catch (error) {
        let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
    }
})

// admin logout

adminRouter.post("/logout",(req,res)=>{

})

// middleware
adminRouter.use("/customers",custRouter)
adminRouter.use("/users",userControlRouter)
adminRouter.use("/teams",teamRouter)
adminRouter.use("/courses",courseRouter)
adminRouter.use("/class",classRouter)


module.exports = adminRouter;