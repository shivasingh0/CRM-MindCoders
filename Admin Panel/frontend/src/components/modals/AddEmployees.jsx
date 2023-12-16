import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddEmployees = (props) => {
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
            <h5 className="text-white">Add New Employee</h5>
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
                    <strong>Name of Employee*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Employee name"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Email ID*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Mobile No.*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Mobile No."
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
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Role*</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Role</option>
                    <option>HR</option>
                    <option>BDE</option>
                    <option>Digital Marketing</option>
                    <option>DEVELOPER</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Last Company*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Last Company"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Experience*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Experience"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Adder Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Adder Name"
                    disabled
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Discription</strong>
                  </label>
                  <textarea
                  className="form-control mt-10"
                    name=""
                    id=""
                    cols="10"
                    rows="1"
                    placeholder="Discription"
                  ></textarea>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="enquiry.html"
                  type="submit"
                  className="btn btn-secondary"
                >
                  <i className="bi-binoculars-fill" /> Save Employee Details
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

export default AddEmployees;
