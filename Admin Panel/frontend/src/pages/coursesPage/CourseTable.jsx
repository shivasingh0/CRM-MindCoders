import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

// Import Components
import * as COMPONENT from "../../routes/ComponentRoute";
import { deleteAlert } from "../../components/alerts/deleteAlert";
import { webURLs } from "../../webServices/WebURLs";
import { axiosClient } from "../../webServices/Getway";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getDataFromSessionStorage } from "../../helpers/Helpers";

const CourseTable = () => {
  const [editModalShow, setEditModalShow] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  let adder = getDataFromSessionStorage().data.fullName;

  useEffect(() => {
    getCourses();
  }, []);

  // get course API
  const getCourses = async () => {
    setIsLoading(true);

    try {
      let responce = await axiosClient.get(webURLs.COURSES);

      // Check if response is successful
      if (responce && responce.data) {
        setCourses(responce.data.data);
        // console.log(responce.data.data);
      } else {
        throw new Error("No data received from the server");
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
      setError(error.message); // Update error state to display to the user
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Edit Course
  const handleEdit = (data) => {
    setSelectedCourse(data);
    setEditModalShow(true);
  };

  // Handle Delete Course
  const handleDelete = async (id) => {
    // console.log(id);

    try {
     
      let response = await axiosClient.delete(`${webURLs.DELETE_COURSE}/${id}`)
      
      if(response){
        getCourses();
        // await deleteAlert();
        toast.success("Course deleted successfully.",{
          position: toast.POSITION.TOP_CENTER
        });
      }
      console.log("Course deleted:", response.data)
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Error deleting course.",{
        position: toast.POSITION.TOP_CENTER
      });
    }
    
  };



  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>
          <span className="badge badge-primary mr-2">Total Courses- 7</span>
        </h4>
        <div>
          <Link to="/courses/addnewcourse">
            <button
              className="btn btn-secondary btn-sm mr-2"
              data-bs-toggle="modal"
              data-bs-target="#enquiries"
              // onClick={() => setModalShow(true)}
              variant="primary"
            >
              <i className="bi-person-lines-fill" /> Add New Course
            </button>
          </Link>
        </div>
      </div>
      <hr />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="table-responsive mt-10">
          <table
            id="example3"
            className="display dataTable no-footer"
            role="grid"
            aria-describedby="example3_info"
          >
            <thead>
              <tr role="row">
                <th>No.</th>
                <th>Course Name</th>
                <th>Course Fees</th>
                <th>Faculty Name</th>
                <th>Course Added By</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{course.course_name}</td>
                  <td>{course.price}</td>
                  <td>{course.faculty_name}</td>
                  <td>{adder}</td>
                  <td>
                    <button
                      className={`btn ${course.isActive ? "btn-success" : "btn-danger"} btn-xs`}
                      disabled // Disable button as it's not meant for user interaction
                    >
                      {course.isActive ? "Active" : "InActive"}
                
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary btn-xs"
                      data-bs-toggle="modal"
                      onClick={() => handleEdit(course)}
                    >
                      <i className="bi-node-plus" /> edit
                    </button>
                    <button
                      className="btn btn-danger btn-xs"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                      onClick={() => handleDelete(course._id)}
                    >
                      <i className="bi-trash" /> delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* --------------- Modals----------------- */}
      <COMPONENT.EDIT_COURSE
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        course={selectedCourse}
      />
      {editModalShow ? <div class="modal-backdrop fade show"></div> : ""}
      <Outlet />
      {/* Toaster */}
      <ToastContainer limit={3}></ToastContainer>
    </>
  );
};

export default CourseTable;
