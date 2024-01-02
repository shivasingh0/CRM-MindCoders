import React from "react";
import { Button, Modal } from "react-bootstrap";

const ViewStudentDetails = (props) => {
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
                      <img className="view-student-profile" src="images/profile.png" alt="" height={200} />
                    </div>
                    <div className="col-md-8">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Course Name</span>
                          <span className="mb-0 text-secondary">
                            MPPSC MAINS 2023
                          </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Student Name</span>
                          <span className="mb-0">Student Name</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Mobile</span>
                          <span className="mb-0">+919876543210</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Email</span>
                          <span className="mb-0">studentname@gmail.com</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Enquiry Date</span>
                          <span className="mb-0 text-left">
                            12/05/2023 02:30 PM
                          </span>
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
                            MPPSC MAINS 2023
                          </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Course Fee</span>
                          <span className="mb-0 text-secondary">35000</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Finalized Fee</span>
                          <span className="mb-0 text-secondary">25000</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Parent's Name</span>
                          <span className="mb-0">Parent Name</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Parent's Mobile</span>
                          <span className="mb-0">9876543210</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Father's Occupation</span>
                          <span className="mb-0">Business</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Monthly Income</span>
                          <span className="mb-0">3Lac to 4 Lac</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>City Name</span>
                          <span className="mb-0">Indore</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span className="text-start" style={{ width: 80 }}>
                            Address
                          </span>
                          <span className="mb-0 text-end">
                            128, Near HDS Hospital, Vijay Nagar, Bhopal 456000
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 p-4">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Demo Classes</span>
                          <span className="mb-0">No</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Academic Qualification</span>
                          <span className="mb-0">BBA </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Passing Year </span>
                          <span className="mb-0">2022</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Marks Obtained</span>
                          <span className="mb-0">200</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Source of Enquiry</span>
                          <span className="mb-0">Direct Walkin</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Referral Person Name</span>
                          <span className="mb-0">Pankaj Sir</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Enquiry Status</span>
                          <span className="mb-0">Interested</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span className="text-start" style={{ width: 80 }}>
                            Followup{" "}
                          </span>
                          <span className="mb-0 text-end">
                            Call me after 2 days
                          </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Admission Done?</span>
                          <button className="mb-0 btn btn-danger btn-sm">
                            No
                          </button>
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

export default ViewStudentDetails;
