const mongoose = require('mongoose')
const { model, Schema } = mongoose

const schema = new Schema({
    Batch_name: {
        type: String,
        trim: true,
        required: [true, "course_category required"],
        validate: {
            validator: (value) => /^[A-Za-z]+(?:\s+[A-Za-z]+)?$/.test(value),
            message: ({ value }) => `${value} is not a valid name`
        }
    },
    slug: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "slug is required"]
    },
    course_name: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        default:""
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
    discription: {
        type: String,
        trim: true,
        default: ""
    },
    facalty_name: {
        type:mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: "User",
        required: [true,"required"],
        default: ""
    },
    start_date: {
        type: String,
        trim: true,
        default: ""
    },
    end_date: {
        type: String,
        trim: true,
        default: ""
    },
    students: {
        type: mongoose.Schema.Types.Array,
        trim: true,
        default: []
    },
}, { timestamps: true })

const ClassModel = model("Class", schema)

module.exports = ClassModel