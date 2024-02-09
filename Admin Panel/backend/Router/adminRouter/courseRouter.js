const express = require("express");
const courseRouter = express.Router();
const { ApiResponse } = require("../../Response/apiResponse");
const Course = require("../../models/courseModel");

// courses
courseRouter.get("/", async (req, res) => {
  const id = req.data._id
  try {
      const courses = await Course.find({ adder: id,isActive:true })
        if (courses) {
            res.json(new ApiResponse(true, courses, "success"))
        }
  } catch (error) {
    res.json(new ApiResponse(false, null, error.message))
  }
});


// Update course details
courseRouter.put("/updatecourse/:id", async (req, res) => {
  const courseId = req.params.id;
  const { course_name, price, faculty_name, isActive } = req.body;

  try {
      const slug = generateSlug(course_name); // Generate slug from course_name
      const updatedCourse = await Course.findByIdAndUpdate(courseId, {
          course_name,
          price,
          faculty_name,
          slug, // Update slug field
          isActive
      }, { new: true });

      if (updatedCourse) {
          res.json(new ApiResponse(true, updatedCourse, "Course updated successfully"));
      } else {
          res.status(404).json(new ApiResponse(false, null, "Course not found"));
      }
  } catch (error) {
      res.status(500).json(new ApiResponse(false, null, error.message));
  }
});

// Add new course
courseRouter.post("/addnewcourse", async (req, res) => {
  const { course_name, price, faculty_name, adder, slug } = req.body;
  try {
    const newcourse = await Course.create({
      course_name,
      slug,
      price,
      faculty_name,
      adder: req.data._id,
    });

    if (newcourse) {
      let custObj = newcourse.toObject();

      res.json(new ApiResponse(true, newcourse, "success"));
    }
  } catch (error) {
    res.json(new ApiResponse(false, null, error.message));
  }
});

// Delete course
courseRouter.delete("/deletecourse/:id", async (req, res) => {
  const courseId = req.params.id;

  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (deletedCourse) {
      res.json(new ApiResponse(true, deletedCourse, "Course deleted successfully"));
    } else {
      res.status(404).json(new ApiResponse(false, null, "Course not found"));
    }
  } catch (error) {
    res.status(500).json(new ApiResponse(false, null, error.message));
  }
});


// Function to generate slug from course_name
function generateSlug(courseName) {
  return courseName.toLowerCase().replace(/\s+/g, '-');
}

module.exports = courseRouter;
