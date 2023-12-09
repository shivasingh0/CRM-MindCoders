import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddEnquiries = (props) => {
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
            <h5 className="text-white">Add New Enquiry</h5>
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
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Mention the Course You Wish to Join*</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Course</option>
                    <option>MPPSC MAINS Hindi Medium</option>
                    <option>MPPSC MAINS English Medium</option>
                    <option>MPPSC Prelims Bilingual</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Course Fees*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="INR.75000"
                    defaultValue="INR.75000"
                    disabled=""
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Finalized Fees*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="finalized fees"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Name of the Candidate*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="student name"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Mobile Number*</strong>
                  </label>
                  <input
                    type="number"
                    className="form-control mt-10"
                    placeholder="+91 | Mobile Number"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Email Id*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="email id"
                  />
                </div>
                <div className="col-md-4 mb-2">
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
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Academic Qualification</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="qualification"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Year of Passing</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="passing yaer"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Marks Obtained</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="marks"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Source of Enquiry</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="source name"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Referral Person Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="person name"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Enquiry Status*</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Status</option>
                    <option>Interested</option>
                    <option>Call Back</option>
                    <option>Not Interested</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>City name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="city name"
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Demo Class*</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Demo</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Full Address</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="full address"
                  />
                </div>
                <div className="mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Followup Massage</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder=" followup massage"
                  />
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="enquiry.html"
                  type="submit"
                  className="btn btn-secondary"
                >
                  <i className="bi-binoculars-fill" /> Save Student
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

export default AddEnquiries;
