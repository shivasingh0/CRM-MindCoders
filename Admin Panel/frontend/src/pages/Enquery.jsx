import React from "react";

const Enquery = () => {
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
                      <h4>Student Enquiries</h4>
                      <div>
                        <button
                          className="btn btn-primary btn-sm mr-2"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalCenter"
                        >
                          <i className="bi-bag-plus-fill" /> Upload Enquiries
                        </button>
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
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Course Name </th>
                            <th>Enquiry Date</th>
                            <th>Follow Up </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <td>01</td>
                            <td>
                              <a href="addfollowup.html">
                                <span className="text-primary">
                                  <b>STEP#CL901</b>
                                </span>{" "}
                              </a>
                            </td>
                            <td>
                              <b>Student Name</b> <br />
                              <span className="text-primary">
                                +91 9876543210
                              </span>
                            </td>
                            <td>NEET Crash Course</td>
                            <td>25/10/2022 12:30 PM</td>
                            <td>
                              <a
                                href="addfollowup.html"
                                className="btn btn-secondary btn-xs"
                              >
                                <i className="bi-folder-plus mr-2" />
                                add followup
                              </a>
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

export default Enquery;
