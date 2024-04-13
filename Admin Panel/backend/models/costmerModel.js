const mongoose = require('mongoose')
const { model, Schema } = mongoose

const schema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: [true, "fullname required"],
        validate: {
            validator: (value) => /^[A-Za-z]+(?:\s+[A-Za-z]+)?$/.test(value),
            message: ({ value }) => `${value} is not a valid name`
        }
    },
    email: {
        type: String,
        trim: true,
        validate: {
            validator: (value) => /\S+@\S+\.\S+/.test(value),
            message: props => `${props.value} Is Not a Valid Email!`
        },
        default : ""
    },
    mobile: {
        type: Number,
        unique: true,
        required: [true, "mobile No. is Required "],
        validate: {
            validator: (value) => /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/.test(value),
            message: ({ value }) => `${value} is invalid nubmer`
        },
        min: [10, "please enter 10 digit number"]
    },
    college_name: {
        type: String,
        trim: true,
        // validate: {
        //     validator: (value) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(value),
        //     message: ({value}) => `${value} is not a valid name`
        // },
        default:""
    },
    qualification: {
        type: String,
        trim: true,
        default:""
    },
    course: {
        type: String,
        trim: true,
        // validate: {
        //     validator: (value) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(value),
        //     message: ({ value }) => `${value} is not a valid name`
        // },
        default:""
    },
    batch_year: {
        type: Number,
        trim: true,
        min : [4,"enter valid year"],
        default:""
    },
    alternative_No: {
        type: Number,
        trim: true,
        validate: {
            validator: (value) => /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/.test(value),
            message: ({ value }) => `${value} is invalid nubmer`
        },
        min: [10, "please enter 10 digit number"],
        default :""
    },
    city: {
        type: String,
        trim: true,
        validate: {
            validator: (value) => /^[A-Za-z]+$/.test(value),
            message: ({ value }) => `${value} is not a valid city name`
        },
        default:"",
    },
    refrence_name: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref : "User",
        // default:""
    },
    counselors:{
        type: String,
        trim: true,
        ref: "User",
        // default : ""
    },
    priority: {
        type: String,
        trim: true,
        enum: {
            values: ["Low", "Medium", "High", "None"],
            message: ({value}) => `${value} is a valid key entry`
        },
        default:"None"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    allow_team: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref : "Team",
        // default:""  
    },
    lead_status: {
        type: String,
        enum: {
            values: ["Interested", "Confused", "Not Interested", "Callback"],
            message: ({value}) => `${value} is a valid key entry`
        },
        default :""
    },
    adder : {
        type : mongoose.Schema.Types.ObjectId,
        trim : true,
        // default:""
    },
    buy_course : {
        type : mongoose.Schema.Types.ObjectId,
        trim : true,
        ref:"Course"
        // default:""
    },
    discription: {
        type: String,
        trim: true,
        default : ""
    },
    isAdmission: {
        type: Boolean,
        default: false
    }
    
}, { timestamps: true })

const customerModel = model("Customer", schema)

module.exports = customerModel;