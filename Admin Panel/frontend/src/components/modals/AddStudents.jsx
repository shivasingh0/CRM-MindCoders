import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddStudents = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
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
              {/* <h5 /> */}
              <div>
                <h5>
                  <i className="bi-calendar2-event" /> Date: 12/03/2023 03:43 PM
                </h5>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Name of the Candidate*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Student name"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Mobile Number*</strong>
                  </label>
                  <input
                    type="tel"
                    className="form-control mt-10"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Alternate Mobile Number*</strong>
                  </label>
                  <input
                    type="tel"
                    className="form-control mt-10"
                    placeholder="Alternate Mobile Number"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Email Id*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Email id"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>City*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="City"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Academic Qualification*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Qualification"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>College Name*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="College"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Year of Passing*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Passing year"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Course Name*</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">-Select Course-</option>
                    <option>Frontend Development</option>
                    <option>Backend Development</option>
                    <option>MERN Stack</option>
                    <option>Digital Marketing</option>
                    <option>Data Analytics</option>
                    <option>Data Science</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Course Price</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Rs. 10000/-"
                    disabled
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Final Course Price</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Final Price"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Referral Person Name*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Referral person name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="">
                    <strong>Counselor</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Counselor name"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-2">
                    <strong>Priority</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">-Select Status-</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                    <option>None</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-2">
                    <strong>Enquiry Status</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">-Select Status-</option>
                    <option>Interested</option>
                    <option>Call Back</option>
                    <option>Confused</option>
                    <option>Not Interested</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="enquiry.html"
                  type="submit"
                  className="btn btn-secondary"
                >
                  <i className="bi-binoculars-fill" /> Save Student Details
                </a>
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

export default AddStudents;
