const mongoose = require('mongoose')
const { model, Schema } = mongoose
const slugify = require('slugify');

const schema = new Schema({
    course_name: {
        type: String,
        trim: true,
        required: [true, "course_name required"],
        validate: {
            validator: (value) => /^[A-Za-z]+(?:\s+[A-Za-z]+)?$/.test(value),
            message: ({ value }) => `${value} is not a valid name`
        }
    },
    slug: {
        type: String,
        trim: true,
        unique: true,
        // required: [true, "slug is required"]
    },
    isActive: {
        type: Boolean,
        default: true
    },
    adder: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: "Admin",
        // required: [true, "Attender Name required"]
    },
    discription: {
        type: String,
        trim: true,
        default: ""
    },
    price: {
        type:Number,
        trim: true,
        required: [true, "price required"],
    },
    faculty_name: {
        type: String,
        trim: true,
        required: [true, "faculty_name required"],
    }
}, { timestamps: true })


// Pre-save middleware to generate slug from course_name
schema.pre('save', function(next) {
    if (!this.isModified('course_name')) {
        return next();
    }
    this.slug = slugify(this.course_name, { lower: true });
    next();
});

const CourseModel = model("Course", schema)

module.exports = CourseModel

