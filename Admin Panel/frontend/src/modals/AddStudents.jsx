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
                {/* <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Mention the Course You Wish to Join*</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Course</option>
                    <option>Frontend Development Course</option>
                    <option>Backend Development Course</option>
                    <option>React JS Course</option>
                    <option>MERN Stack Course</option>
                    <option>Data Analytics Course</option>
                    <option>Data Science Course</option>
                    <option>Digital Marketing Course</option>
                  </select>
                </div> */}
                {/* <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Course Fees*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="INR"
                    disabled=""
                  />
                </div> */}
                {/* <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Finalized Fees*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="finalized fees"
                  />
                </div> */}
                {/* <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Parent's Name*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="parent's name"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Parent's Mobile Number*</strong>
                  </label>
                  <input
                    type="number"
                    className="form-control mt-10"
                    placeholder="+91 | Mobile Number"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Father's Occupation*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="father's occupation"
                  />
                </div> 
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Monthly Income</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Income</option>
                    <option>3 Lac to 4 Lac</option>
                    <option>4 Lac to 6 Lac</option>
                    <option>Above 6 Lac</option>
                  </select>
                </div> */}
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
                {/* <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Marks Obtained</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="marks"
                  />
                </div> */}
                {/* <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Source of Enquiry</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="source name"
                  />
                </div> */}
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
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Counselor</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Status</option>
                    <option>Akhil</option>
                    <option>Divyani</option>
                    <option>Ritika</option>
                    <option>Firoz Khan</option>
                    <option>KK Sir</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Priority</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Status</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                    <option>None</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Enquiry Status</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Status</option>
                    <option>Interested</option>
                    <option>Call Back</option>
                    <option>Confused</option>
                    <option>Not Interested</option>
                  </select>
                </div>
                {/* <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>City name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="city name"
                  />
                </div> */}
                {/* <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Demo Class*</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Demo</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div> */}
                {/* <div className=" col-md-8 mb-2 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Full Address</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="full address"
                  />
                </div> */}
                {/* <div className="mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Followup Massage</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder=" followup massage"
                  />
                </div> */}
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
