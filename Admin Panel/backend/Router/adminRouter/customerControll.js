const express = require('express')
const custRouter = express.Router()


custRouter.get("/",(req,res)=>{
    res.status(404).json("not found")
})


// add multiple constmers by admin

custRouter.post("/addmanycustomer/", (req, res) => {

})


// get all customers who registered by user and admin
custRouter.get("/getallcustomers",async (req, res) => {
    try {
        const customers = await Customers.find()
        if (customers) {
            res.json(new ApiResponse(true, customers, "success"))
        }
    } catch (error) {
        res.json(new ApiResponse(false, null, error.message))
    }
})

// refer customers to user by id

custRouter.put("/referto/", (req, res) => {

})


module.exports = custRouter;