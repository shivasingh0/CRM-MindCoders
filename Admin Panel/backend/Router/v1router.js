const express = require('express')
const customerModel = require('../models/costmerModel')
const { RegisterAdmin } = require('../controller/adminController')
const { RegiseterUser } = require('../controller/userConroller')
const v1router = express.Router()
const { LoginAdmin, RegisterAdmin } = require('../controller/adminController')
const { LoginUser } = require('../controller/userConroller')


v1router.get("/", (req, res) => {
    res.status(404).json("cant not found")
})

///register admi
v1router.post("/mindadmin",RegisterAdmin);

//register user

v1router.post("/minduser",RegiseterUser);



// user login 
v1router.post("/user/login", LoginUser)

// admin login 
v1router.post("/admin/login", LoginAdmin)


// v1router.post('/enquiry', async (req, res) => {
//     const { fullName,mobile,course,discription} = req.body
//     try {
//         let data = await customerModel.create({fullName,mobile,course,discription})
//         if(data){
//             res.status(200).json({status:true,msg:"success"})
//         }else{
//             res.json({status:false,msg:"enquiry send failed"})
//         }
//     } catch (error) {
//         let err = errorHendlar(error)
//         res.json(new ApiResponse(false, null, err ? err : error.message))
//     }
// })



module.exports = v1router;