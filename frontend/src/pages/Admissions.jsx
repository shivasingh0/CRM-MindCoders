import React from "react";

const Admissions = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
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
                        <a
                          href="add_enrollement.html"
                          className="btn btn-primary btn-sm mr-2"
                        >
                          <i className="bi-binoculars-fill" /> add enrollment
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="table-responsive">
                      <table
                        id="example4"
                        className="display"
                        style={{ minWidth: 845 }}
                      >
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
                              <span className="badge badge-secondary">
                                QR Code
                              </span>
                            </td>
                            <td>
                              <a
                                href=""
                                data-bs-toggle="modal"
                                data-bs-target="#studentdetails"
                              >
                                <i className="bi-eye mr-2 text-dark" />
                              </a>
                              <a href="add_enrollement.html">
                                <i className="bi-pencil-square mr-2 text-danger" />
                              </a>
                              <a
                                href=""
                                data-bs-toggle="modal"
                                data-bs-target="#followup"
                              >
                                <i className="bi-clipboard-data mr-2 text-primary" />
                              </a>
                              <i className="bi-printer text-success" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admissions;
