const mongoose = require('mongoose')
const { model, Schema } = mongoose

const schema = new Schema({
    student_name: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        required: [true, "student data required"],
        ref : "Customer"
    },
    schedule_date: {
        type:String,
        required: [true, "date is Required "],
    },
    discription: {
        type: String,
        trim: true,
        required: [true, "discription required"]
    },
    isActive: {
        type: Boolean,
        default: true
    },
    attender: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        required: [true, "Attender Name required"],
        ref : "User"
    },
    response : {
        type : String,
        trim : true,
        default:""
    }

}, { timestamps: true })

const folloupModel = model("folloup", schema)

module.exports = folloupModel