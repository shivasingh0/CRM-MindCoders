const mongoose = require('mongoose')
const { model, Schema } = mongoose

const schema = new Schema({
    team_name: {
        type: String,
        trim: true,
        required: [true, "team_name required"],
        validate: {
            validator: (value) => /^[A-Za-z0-9]+(?:\s+[A-Za-z]+)?$/.test(value),
            message: ({ value }) => `${value} is not a valid name`
        }
    },
    slug: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "team slug is require"]
    },
    team_discription: {
        type: String,
        trim: true,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    },
    team_creater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        trim: true,
        required: [true, "Attender Name required"],
    },
    team_members: {
        type: mongoose.Schema.Types.Array,
        default: []
    },
    revenue: {
        type: Number,
        min: [4, 'Must be at least 4'],
        max: 8,
        default: ""
    },
    team_leader: {
        type: mongoose.Schema.Types.Array,
        default: []
    },
    allow_team_customers: {
        type: mongoose.Schema.Types.Array,
        default: []
    },

}, { timestamps: true })

const teamModel = model("Team", schema)

module.exports = teamModel