const adminModel = require('../models/adminModel');
const errorHendlar = require('../utils/errorHendler')
const { ApiResponse } = require("../Response/apiResponse");


const RegisterAdmin = async (req, res) => {
    const { fullName, email, password, mobile } = req.body
    let hashPassword = null
    try {
        if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/.test(password)) {
            hashPassword = await encyptPassword(password)
        } else {
            res.json(new ApiResponse(false, null, "use strong password and minimum 6 character "))

        }
        if (hashPassword !== null) {
            let response = await adminModel.create({
                fullName,
                password: hashPassword,
                email,
                mobile
            })

            if (response !== null) {
                let Obj = response.toObject()
                delete Obj.__v
                delete Obj.password
                res.status(200).json("register successfully")
            }
        }

    } catch (error) {
        let err = errorHendlar(error)
        res.json(new ApiResponse(false, null, err ? err : error.message))
    }
}

module.exports = {RegisterAdmin};
