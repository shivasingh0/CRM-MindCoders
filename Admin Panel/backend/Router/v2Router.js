const express = require('express')
const userRouter = require('./userRouter')
const customerRouter = require('./customerRouter')
const adminRouter = require('./adminRouter/adminRouter')
const v2Router = express.Router()


v2Router.get("/",(req,res)=>{
    res.status(404).json("not found")
})

v2Router.use("/user",userRouter)
v2Router.use("/customer",customerRouter)
v2Router.use("/admin",adminRouter)


module.exports = v2Router;