import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddDemoClass = (props) => {
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
            <h5 className="text-white">Add New Employee</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="modal-body">
            <div className="widget-heading d-flex justify-content-between align-items-center">
              <h5 />
              <div>
                <h5 className="datetime">Date: 27/12/2023 23:10:49</h5>
              </div>
            </div>
            <form
              className="needs-validation"
              action="/add_democlass/"
              method="post"
              id="my2Form"
              encType="multipart/form-data"
            >
              <div className="col-md-12 mb-2">
                <label className="mb-2">
                  <strong>Mention the Course You Wish to Join*</strong>
                </label>
                <select
                  className="default-select  form-control wide"
                  name="course_id"
                  id="mySelect"
                  style={{ display: "none" }}
                >
                  <option disabled="">Select Course</option>
                  <option value="e3d98a50-ce39-41f3-931a-4ddbe861897e">
                    MPPSC MAINS{" "}
                  </option>
                  <option value="ae9de728-123c-438d-85b7-ca262a56c557">
                    MPPSC MAINS{" "}
                  </option>
                  <option value="ef59c871-e654-4ff5-bcaf-12e975f6bdef">
                    MPPSC MAINS{" "}
                  </option>
                </select>
                <div
                  className="nice-select default-select form-control wide"
                  tabIndex={0}
                >
                  <span className="current">MPPSC MAINS </span>
                  <ul className="list">
                    <li data-value="Select Course" className="option disabled">
                      Select Course
                    </li>
                    <li
                      data-value="e3d98a50-ce39-41f3-931a-4ddbe861897e"
                      className="option selected"
                    >
                      MPPSC MAINS{" "}
                    </li>
                    <li
                      data-value="ae9de728-123c-438d-85b7-ca262a56c557"
                      className="option"
                    >
                      MPPSC MAINS{" "}
                    </li>
                    <li
                      data-value="ef59c871-e654-4ff5-bcaf-12e975f6bdef"
                      className="option"
                    >
                      MPPSC MAINS{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <label className="mb-1 mt-3">
                  <strong>Student Name</strong>
                </label>
                <input
                  type="text"
                  name="candidate_name"
                  className="form-control mt-10"
                  placeholder="enter student name"
                />
              </div>
              <div className="col-md-12 mb-2">
                <label className="mb-1 mt-3">
                  <strong>Student Number</strong>
                </label>
                <input
                  type="text"
                  name="number"
                  className="form-control mt-10"
                  placeholder="enter student number"
                />
              </div>
              <div className="col-md-12 mb-2">
                <label className="mb-1 mt-2">
                  <strong>Start Date </strong>
                </label>
                <input
                  type="date"
                  className="form-control mt-10"
                  name="start_date"
                />
              </div>
              <div className="col-md-12 mb-2">
                <label className="mb-1 mt-2">
                  <strong>End Date </strong>
                </label>
                <input
                  type="date"
                  className="form-control mt-10"
                  name="end_date"
                />
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-secondary btn-block mt-4"
                >
                  <i className="bi-input-cursor-text" /> add demo class
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddDemoClass;
