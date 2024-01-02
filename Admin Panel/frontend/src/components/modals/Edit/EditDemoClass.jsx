import React from "react";
import { Button, Modal } from "react-bootstrap";

const EditDemoClass = (props) => {
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
            <h5 className="text-white">Add New Student</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="modal-body">
            <div className="widget-heading d-flex justify-content-between align-items-center">
              <h5 />
              <div>
                <h5 className="datetime">Date: 31/12/2023 12:35:16</h5>
              </div>
            </div>
            <form
              className="needs-validation"
              action="/update_democlass/"
              method="post"
              id="my2Form"
              encType="multipart/form-data"
            />
            <input
              type="hidden"
              name="id"
              defaultValue="8cb1edea-5d62-4b00-b5d0-2a2974584bd8"
            />
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
                    data-value="e3d98a50-ce39-41f3-931a-4ddbe861897e"
                    className="option"
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
                defaultValue="Testing"
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
                defaultValue=""
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
                defaultValue="2023-06-15"
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
                defaultValue="2023-06-17"
              />
            </div>
            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-secondary btn-block mt-4"
              >
                <i className="bi-input-cursor-text" /> update demo class
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditDemoClass;
