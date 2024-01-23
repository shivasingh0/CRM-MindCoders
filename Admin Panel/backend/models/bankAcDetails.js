const mongoose = require('mongoose')
const { model, Schema } = mongoose

const schema = new Schema({
    bank_account_no: {
        type: String,
        trim: true,
        required: [true, "a/c Number is require"],
        unique: true
    },
    bank_ifsc: {
        type: String,
        trim: true,
        required: [true, "IFSC Code is require"]
    },
    bank_name: {
        type: String,
        trim: true,
        required: [true, "Bank Name is require"]
    },
    pancard_no: {
        type: String,
        trim: true,
        required: [true, "Pancard Number is require"],
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    attender: {
        type: String,
        trim: true,
        default : ""
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        unique: true,
        ref: "User",
        default :""
    }

}, { timestamps: true })

const bankModel = model("Bank-Detail", schema)

module.exports = bankModel;