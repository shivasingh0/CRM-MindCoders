const mongoose = require('mongoose')
const { model, Schema } = mongoose

const schema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: [true, "fullname required"],
        validate: {
            validator: (value) =>/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(value),
            message: ({ value }) => `${value} is not a valid name`
        }
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        validate: {
            validator: (value) => /\S+@\S+\.\S+/.test(value),
            message: ({ value }) => `${value} is not a valid email!`
        },
        required: [true, "email is required"]
    },
    mobile: {
        type: Number,
        unique: true,
        required: [true, "mobile No. is Required "],
        validate: {
            validator: (value) => /^[6-9]\d{9}$/.test(value),
            message: ({ value }) => `${value} is invalid nubmer`
        },
        min: 10
    },
    city: {
        type: String,
        trim: true,
        required: [true, "City Name required"],
        validate: {
            validator: (value) => /^[A-Za-z\s.'-]+$/.test(value),
            message: ({ value }) => `${value} is not a valid city name`
        }
    },
    role: {
        type: String,
        trim: true,
        required: [true, "Please define User Role"],
        enum: {
            values: ['HR', 'BDE','DEVELOPER'],
            message: ({ value }) => `${value} is not supported`
        }
    },
    last_company: {
        type: String,
        trim: true,
        required: [true, "Add your last working company"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "password required"],
    },
    isActive: {
        type: Boolean,
        default: true
    },
    adder: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: "Admin",
        required: [true, "Attender Name required"]
    },
    isAccessToApplication: {
        type: Boolean,
        default: false
    },
    discription: {
        type: String,
        trim: true,
        default: ""
    },
    experience: {
        type: String,
        trim: true,
        default: ""
    },
    allow_team: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: "Team",
    },
    allow_leader: {
        type: Boolean,
        default: false
    },
    allow_customers: {
        type: mongoose.Schema.Types.Array,
        default: []
    },
    image: {
        type: String,
        trim: true,
        default: ""
    },


}, { timestamps: true })

const userModel = model("User", schema)

module.exports = userModel