import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../../webServices/Getway";
import { webURLs } from "../../../webServices/WebURLs";
import { toast } from "react-toastify";

const AddNewCourse = () => {
  const Navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    course_name: "",
    price: "",
    faculty_name: "",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  // API Integration
  const addNewCourse = async (e) => {
    e.preventDefault();

     // Check if any of the required fields are empty
  if (!courseData.course_name || !courseData.price || !courseData.faculty_name) {
    toast.error("Please fill in all required fields.", {
      position: toast.POSITION.TOP_CENTER,
    });
    return; // Exit the function if any field is empty
  }

    try {
      let userData = JSON.parse(localStorage.getItem("user"));
      let token = userData.data.token;
      let result = await axiosClient.post(webURLs.ADD_NEW_COURSE, courseData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (result.status) {
        console.log("Course added successfully");
        toast.success("Course added successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        Navigate("/courses");
      } else {
        console.log("Unexpected response:", result.data);
      }
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("Course Adding failed. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h4>Add New Course Details </h4>
          </div>
          <div className="card-body">
            <form className="row">
              {/* <div className="col-md-4 mb-2">
                <label className="mb-1  mt-2">
                  <strong>Course Name*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Student name"
                />
              </div> */}
              <div className="col-md-4 mb-2">
                <label className="mt-3">
                  <strong>Course Name*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Course name"
                  name="course_name"
                  value={courseData.course_name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-4 mt-10">
                <label className="mb-1">
                  <strong>Price*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Course Price"
                  name="price"
                  value={courseData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-2 mt-10">
                <label className="mb-1">
                  <strong>Faculty Name*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Faculty Name"
                  name="faculty_name"
                  value={courseData.faculty_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={addNewCourse}
                >
                  <i className="bi-binoculars-fill" /> Save Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewCourse;
