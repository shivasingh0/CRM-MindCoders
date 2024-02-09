import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { webURLs } from "../../../webServices/WebURLs";
import { axiosClient } from "../../../webServices/Getway";
import { dateFormat } from "../../../helpers/Helpers";

const ViewStudentDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [getAllData, setGetAllData] = useState([]);
  const {customer} = props
 
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
            <h5 className="text-white">{customer?.fullName} (Enquiry Details)</h5>
          </Modal.Header>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Modal.Body>
            <div className="card-body">
              <div className="instructors-media">
                <div className="instructors-media-info text-center">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Student Name</span>
                          <span className="mb-0">{customer?.fullName}</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Mobile</span>
                          <span className="mb-0">{customer?.mobile}</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Alternate Mobile No.</span>
                          <span className="mb-0">{customer?.alternative_No}</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Email</span>
                          <span className="mb-0">
                            {customer?.email}
                          </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>City</span>
                          <span className="mb-0">{customer?.city}</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>College Name</span>
                          <span className="mb-0">
                            {customer?.college_name}
                          </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Academic Qualification</span>
                          <span className="mb-0">
                            {customer?.qualification}
                          </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Year of Passing</span>
                          <span className="mb-0">
                        {customer?.batch_year}
                          </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Enquiry Date</span>
                          <span className="mb-0 text-left">
                            {dateFormat(customer?.createdAt)}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Course Name</span>
                          <span className="mb-0 text-secondary">
                            {customer?.course}
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
                        {/* <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Source of Enquiry</span>
                          <span className="mb-0">Direct Walkin</span>
                        </li> */}
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Referral Person Name</span>
                          <span className="mb-0">
                            {customer?.refrence_name}
                          </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Enquiry Status</span>
                          <span className="mb-0">
                            {customer?.lead_status}
                          </span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                          <span>Demo Classes</span>
                          <span className="mb-0">No</span>
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
        )}
      </Modal>
    </>
  );
};

export default ViewStudentDetails;
