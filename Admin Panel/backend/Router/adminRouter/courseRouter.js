const express = require('express')
const courseRouter = express.Router()



courseRouter.get("/", (req, res) => {
    res.status(404).json("not found")
})

courseRouter.put('/', async (req, res) => {
    try {

    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
})


courseRouter.post("/", (req, res) => {
    try {

    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
})



module.exports = courseRouter;