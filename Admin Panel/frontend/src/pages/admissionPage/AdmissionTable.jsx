import React from "react";
import { Link } from "react-router-dom";

const TableComponent = () => {
  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>
          <span className="badge badge-primary mr-2">
            Total Amissions- 20 Students{" "}
          </span>
          <span className="badge badge-secondary">
            Today Admissions- 5 Students{" "}
          </span>
        </h4>
        <div>
          <Link
            to="/admissions/newadmission"
            className="btn btn-primary btn-sm mr-2"
            // onClick={newAdmission}
          >
            <i className="bi-binoculars-fill" /> New Admission
          </Link>
        </div>
      </div>
      <hr />
      <div className="table-responsive">
        <table id="example4" className="display dataTable no-footer">
          <thead>
            <tr className="text-center">
              <th>No.</th>
              <th>Student Name</th>
              <th>Student ID</th>
              <th>Course Name </th>
              <th>Course Fees </th>
              <th>Rcv'd Amount </th>
              <th>Admission Date</th>
              <th>Mode</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>
                <div
                  className="d-flex align-items-center pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#studentdetails"
                >
                  <h4 className="mb-0 fs-16 font-w500">
                    Student Name <br />
                    9876543210
                  </h4>
                </div>
              </td>
              <td>IMGS01</td>
              <td>
                MPPSC MAINS HINDI <br />
                <span>(Pathshala Batch)</span>
              </td>
              <td>Rs.75000</td>
              <td>Rs.35000</td>
              <td>January 2, 2023</td>
              <td>
                <span className="badge badge-secondary">QR Code</span>
              </td>
              <td>
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#studentdetails9987832522"
                >
                  <i className="bi-eye mr-2 text-dark" />
                </a>
                <a href="/update_enrollement/d7e3b2bb-b0b0-4a87-b1a1-36a2b970ed75">
                  <i className="bi-pencil-square mr-2 text-secondary" />
                </a>
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#paymenthistoryd7e3b2bb-b0b0-4a87-b1a1-36a2b970ed75"
                >
                  <i className="bi-clipboard-data mr-2 text-primary" />
                </a>{" "}
                <br />
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#passoutd7e3b2bb-b0b0-4a87-b1a1-36a2b970ed75"
                >
                  <i
                    className="bi-layer-forward text-primary mr-2"
                    title="Passout Student"
                  />
                </a>
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#deleted7e3b2bb-b0b0-4a87-b1a1-36a2b970ed75"
                >
                  <i className="bi-trash text-danger" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
