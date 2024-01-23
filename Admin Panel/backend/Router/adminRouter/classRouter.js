const express = require('express')
const ClassModel = require('../../models/classModel')
const { ApiResponse } = require('../../Response/apiResponse')
const classRouter = express.Router()


// get all active classes
classRouter.get("/", async (req, res) => {
    const id = req.data._id
    try {
        let data = await ClassModel.find({isActive:true,adder:id})
        if (data.length) {
            res.json(new ApiResponse(true, data, "done"))
        } else {
            res.status(404).json(new ApiResponse(false, null, "not found"))
        }
    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
})

classRouter.put('/new_batch', async (req, res) => {
    try {
       
    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
})


classRouter.post("/", (req, res) => {
    try {

    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
})



module.exports = classRouter;