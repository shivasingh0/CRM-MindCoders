import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DateTime from "../../dateTime/DateTime";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../../webServices/Getway";
import { webURLs } from "../../../webServices/WebURLs";
import { toast } from "react-toastify";

const EditCourse = (props) => {
  const { course } = props;
  console.log(course);
  // course.toObject()
  const [course_name, setCourse_name] = useState(null);
  const [price, setPrice] = useState(null);
  const [faculty_name, setFaculty_name] = useState(null);
  const [active, setActive] = useState(null);

  const Navigate = useNavigate();

  const updateCourse = async (e) => {
    e.preventDefault();

    try {

    // Create a new object to store updated course data
    const updatedCourseData = {
      course_name: course_name || course.course_name,
      price: price || course.price,
      faculty_name: faculty_name || course.faculty_name,
      active: active || course.active,
    };

    let result = await axiosClient.put(`${webURLs.UPDATE_COURSE}/${course?._id}`, updatedCourseData);

    if (result.status) {
      // console.log("Course added successfully");
        toast.success("Course Updated successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        Navigate("/courses");
    } else {
      console.log("Unexpected response:", result.data);
    }
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("Course Updation failed. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    
  };

  return (
    <>
      <Modal
        {...props}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="gradient-5">
          <Modal.Header closeButton>
            <h5 className="text-white">Edit Course</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="modal-body">
            <div className="widget-heading d-flex justify-content-between align-items-center">
              {/* <h5 /> */}
              <div>
                <h5 className="datetime">
                  <DateTime />
                </h5>
              </div>
            </div>
            <form className="needs-validation">
              <div className="mb-4">
                <label className="mb-1">
                  <strong>Course Name</strong>
                </label>
                <input
                  type="text"
                  name="course_name"
                  className="form-control mt-10"
                  value={course_name ? course_name : course?.course_name}
                  onChange={(e) => {
                    setCourse_name(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="mb-1">
                  <strong>Course Fees</strong>
                </label>
                <input
                  type="text"
                  name="fees"
                  className="form-control mt-10"
                  value={price ? price : course?.price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="mb-1">
                  <strong>Faculty Name</strong>
                </label>
                <input
                  type="text"
                  name="facultyname"
                  className="form-control mt-10"
                  value={faculty_name ? faculty_name : course?.faculty_name}
                  onChange={(e) => {
                    setFaculty_name(e.target.value);
                  }}
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="mb-2 mt-2">
                  <strong>Course Status</strong>
                </label>
                <select
                  className="default-select  form-control wide"
                  onChange={(e) => {
                    setActive(e.target.value);
                  }}
                >
                  <option value={true}>Active</option>
                  <option value={false}>InActive</option>
                </select>
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-secondary btn-block"
                  onClick={updateCourse}
                >
                  Update Course
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditCourse;
