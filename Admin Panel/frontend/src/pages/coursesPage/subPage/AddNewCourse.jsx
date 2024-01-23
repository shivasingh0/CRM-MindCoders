import React from "react";
import { useNavigate } from "react-router-dom";

const AddNewCourse = () => {
  const Navigate = useNavigate();

  const saveCourse = () => {
    Navigate("/courses");
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
                />
              </div>

              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Price*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Course Price"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Faculty Name*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Faculty Name"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Course Added by*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Course Added by"
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={saveCourse}
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
