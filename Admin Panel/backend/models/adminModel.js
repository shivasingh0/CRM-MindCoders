const mongoose = require('mongoose')
const { model, Schema } = mongoose

const schema = new Schema({
    fullName: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "username required"],
        validate: {
            validator: (value) =>/^[A-Za-z]+(?:\s+[A-Za-z]+)?$/.test(value),
            // /^[a-zA-Z]+ [a-zA-Z]+$/
            message: ({ value }) => `${value} is not a valid name`
        }
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "username required"],
        validate: {
            validator: (value) => /\S+@\S+\.\S+/.test(value),
            message: ({ value }) => `${value} is not a valid email!`
        },
    },
    password: {
        type: String,
        trim: true,
        required :[true,"please enter password"]
    },
    role: {
        type: String,
        default: "ADMIN"
    },
    mobile: {
        type: Number,
        unique: true,
        required: [true, "mobile No. is Required "],
        validate: {
            validator: (value) => /^[0-9]{10}$/.test(value),
            message: ({ value }) => `${value} is invalid nubmer`
        },
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isAccessToApplication : {
        type : Boolean,
        default : false
    },

}, { timestamps: true })

const adminModel = model("Admin", schema)

module.exports = adminModel;