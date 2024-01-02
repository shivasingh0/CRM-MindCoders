import React from "react";
import { Button, Modal } from "react-bootstrap";

const ViewAddmission = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <div
        className="modal fade show"
        id="studentdetails"
        style={{ display: "block", paddingRight: 17 }}
        aria-modal="true"
        role="dialog"
      > */}
        {/* <div className="modal-dialog modal-lg" role="document"> */}
        {/* <div className="modal-content"> */}
        <div className="gradient-5">
          <Modal.Header closeButton>
            <h5 className="text-white">Student Name (Enquiry Details)</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="card-body">
            <div className="instructors-media mt-3">
              <div className="instructors-media-info text-center">
                <div className="row">
                  <div className="col-md-4 mt-4">
                    <img
                      className="view-student-profile"
                      src="images/profile.png"
                      alt=""
                      height={200}
                    />
                  </div>
                  <div className="col-md-8">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Course Name</span>
                        <span className="mb-0 text-secondary">
                          MPPSC MAINS -Warrior Batch{" "}
                        </span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Student Name</span>
                        <span className="mb-0">SANTOSH KUMAR </span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Mobile</span>
                        <span className="mb-0">+9987832522</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Email</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Admission Date</span>
                        <span className="mb-0 text-left">2023-06-15</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 p-4">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Course Name</span>
                        <span className="mb-0 text-secondary">
                          MPPSC MAINS{" "}
                        </span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Course Fee</span>
                        <span className="mb-0 text-secondary">Rs.50000</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Discount Amount</span>
                        <span className="mb-0 text-secondary">
                          -Rs.20000.00
                        </span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Recieved Amount</span>
                        <span className="mb-0 text-success">Rs.10000</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Recieved Amount:(2023-06-15)</span>
                        <span className="mb-0 text-success">Rs.5000</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Due Amount</span>
                        <span className="mb-0 text-danger">Rs.15000</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Payment Mode</span>
                        <span className="mb-0">Cash</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Transaction No./Cheque No.</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Bank Name</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>City Name</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span className="text-start" style={{ width: 80 }}>
                          Address
                        </span>
                        <span className="mb-0 text-end">None</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 p-4">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Date of Birth</span>
                        <span className="mb-0 text-primary">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Father's Name</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Mother's Name</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Parent's Mobile</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Father's Occupation</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Academic Qualification</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Marks Obtained</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Source of Enquiry</span>
                        <span className="mb-0">None</span>
                      </li>
                      <li className="list-group-item d-flex px-0 justify-content-between">
                        <span>Referral Person Name</span>
                        <span className="mb-0">None</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </Modal>
    </>
  );
};

export default ViewAddmission;
