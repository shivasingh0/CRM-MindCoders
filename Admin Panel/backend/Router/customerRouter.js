const express = require('express')
const Customers = require('../models/costmerModel')
const { ApiResponse } = require('../Response/apiResponse')
const customerRouter = express.Router()

customerRouter.get("/", (req, res) => {
    res.status(404).json("not found")
})

// get all customers who registered by user
customerRouter.get("/getall", async (req, res) => {
    const id = req.data._id
    try {
        const customers = await Customers.find({ refrence_name: id,isActive:true })
        if (customers) {
            res.json(new ApiResponse(true, customers, "success"))
        }
    } catch (error) {
        res.json(new ApiResponse(false, null, error.message))
    }

})

// for add to new student in application
customerRouter.post("/register", async (req, res) => {
    const {
        fullName,
        email,
        mobile,
        city,
        college_name,
        qualification,
        batch_year,
        alternative_No,
        course,
        counselors,
        priority,
        lead_status
    } = req.body
    const refrence_name = req.data._id
    // console.log(req);
    try {
        const customers = await Customers.create({
            fullName,
            email,
            mobile,
            city,
            college_name,
            qualification,
            batch_year,
            alternative_No,
            course,
            counselors,
            priority,
            lead_status,
            refrence_name,
            adder: req.data._id
        })
        if (customers) {
            let custObj = customers.toObject()
            
            res.json(new ApiResponse(true, customers, "success"))
        }
    } catch (error) {
        res.json(new ApiResponse(false, null, error.message))
    }

})


// for followup  edit customer details 
customerRouter.put("/editdetails/:id", async (req, res) => {
    const id = req.params
    const {
        fullName,
        email,
        mobile,
        city,
        college_name,
        qualification,
        course,
        batch_year,
        alternative_No,
        priority,
        lead_status
    } = req.body
    const refrence_name = req.data._id
    try {
        let data = await Customers.findByIdAndUpdate(id, {
            $set: {
                fullName,
                email,
                mobile,
                city,
                college_name,
                qualification,
                course,
                batch_year,
                alternative_No,
                priority,
                lead_status,
                refrence_name
            }
        }, {
            new: true, // Return the modified document instead of the original
            runValidators: true, // Run built-in validators for update operations
            useFindAndModify: false, // Use the native findOneAndUpdate() method (set to false to use native findOneAndUpdate())
        })

        if (data) {
            res.json(new ApiResponse(true, null, "user deatails update successfully"))
        }
    } catch (error) {
        res.json(new ApiResponse(false, null, "can not update user details"))
    }
})

// delete customer in your application
customerRouter.delete("/delete/:id", async (req, res) => {
const id = req.params
try {
    const isDelete = await Customers.findByIdAndUpdate(id,{ isActive:false})
} catch (error) {
    
}
})


module.exports = customerRouter;
