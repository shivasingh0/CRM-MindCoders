const mongoose = require('mongoose')
const { model, Schema } = mongoose

const schema = new Schema({
    course_name: {
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
    course_categori: {
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
    price: {
        type:Number,
        trim: true,
        default: ""
    },
    discount_price: {
        type: Number,
        trim: true,
        default: ""
    },
}, { timestamps: true })

const CourseModel = model("Course", schema)

module.exports = CourseModel