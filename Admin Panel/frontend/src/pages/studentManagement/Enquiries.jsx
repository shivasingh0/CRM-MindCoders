import React, { useState } from "react";
import AddEnquiries from "../../modals/AddEnquiries";

const Enquiries = () => {

  // const [modalShow, setModalShow] = useState(false);

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
                          Total Enquiries- 20 Students{" "}
                        </span>
                        <span className="badge badge-secondary">
                          Today Enquiries- 5 Students{" "}
                        </span>
                      </h4>
                      {/* <div>
                        <button
                          className="btn btn-secondary btn-sm mr-2"
                          data-bs-toggle="modal"
                          data-bs-target="#enquiries"
                          onClick={() => setModalShow(true)}
                        >
                          <i className="bi-person-lines-fill" /> Add New Enquiry
                        </button>
                      </div> */}
                    </div>
                    <hr />
                    <div className="table-responsive">
                      <div
                        id="example4_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <div className="dataTables_length" id="example4_length">
                          <label>
                            Show{" "}
                            <select
                              name="example4_length"
                              aria-controls="example4"
                              className=""
                            >
                              <option value={10}>10</option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                        <div id="example4_filter" className="dataTables_filter">
                          <label>
                            Search:
                            <input
                              type="search"
                              className=""
                              placeholder=""
                              aria-controls="example4"
                            />
                          </label>
                        </div>
                        <table
                          id="example4"
                          className="display dataTable no-footer"
                          style={{ minWidth: 845 }}
                          role="grid"
                          aria-describedby="example4_info"
                        >
                          <thead>
                            <tr className="text-center" role="row">
                              <th
                                className="sorting_asc"
                                tabIndex={0}
                                aria-controls="example4"
                                rowSpan={1}
                                colSpan={1}
                                aria-sort="ascending"
                                aria-label="No.: activate to sort column descending"
                                style={{ width: "33.2625px" }}
                              >
                                No.
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example4"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Student Name: activate to sort column ascending"
                                style={{ width: "117.275px" }}
                              >
                                Student Name
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example4"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Done?: activate to sort column ascending"
                                style={{ width: "54.925px" }}
                              >
                                Done?
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example4"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Enquiry Date: activate to sort column ascending"
                                style={{ width: "106.125px" }}
                              >
                                Enquiry Date
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example4"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Status: activate to sort column ascending"
                                style={{ width: "81.7125px" }}
                              >
                                Status
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example4"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Next Call: activate to sort column ascending"
                                style={{ width: "102.787px" }}
                              >
                                Next Call
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example4"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Course Name : activate to sort column ascending"
                                style={{ width: "189.137px" }}
                              >
                                Course Name{" "}
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example4"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Finalized Fees : activate to sort column ascending"
                                style={{ width: "112.85px" }}
                              >
                                Finalized Fees{" "}
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example4"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Action : activate to sort column ascending"
                                style={{ width: "137.15px" }}
                              >
                                Action{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="text-center odd" role="row">
                              <td className="sorting_1">1</td>
                              <td>
                                <div
                                  className="d-flex align-items-center"
                                  data-bs-toggle="modal"
                                  data-bs-target="#studentdetails"
                                >
                                  <h4 className="mb-0 fs-16 font-w500">
                                    Student Name <br />
                                    9876543210
                                  </h4>
                                </div>
                              </td>
                              <td>
                                Yes{" "}
                                <i className="bi-check2-circle text-success" />
                              </td>
                              <td>
                                12/05/2022 <br />
                                09:30 AM
                              </td>
                              <td>Call Back</td>
                              <td>15/05/2022</td>
                              <td>
                                MPPSC MAINS HINDI <br />
                                Rs.75000
                              </td>
                              <td>Rs.65000</td>
                              <td>
                                <a
                                  href=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#studentdetails"
                                >
                                  <i className="bi-eye mr-2 text-dark" />
                                </a>
                                <a
                                  href=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#followup"
                                >
                                  <i
                                    className="bi-chat-right-dots text-primary mr-2"
                                    title="followup message"
                                  />
                                </a>
                                <a
                                  href=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#enquiries"
                                >
                                  <i className="bi-pencil-square mr-2 text-danger" />
                                </a>
                                <a href="add_enrollement.html">
                                  <i className="bi-binoculars-fill text-secondary mr-2" />
                                </a>
                              </td>
                            </tr>
                            <tr className="text-center even" role="row">
                              <td className="sorting_1">2</td>
                              <td>
                                <div
                                  className="d-flex align-items-center"
                                  data-bs-toggle="modal"
                                  data-bs-target="#studentdetails"
                                >
                                  <h4 className="mb-0 fs-16 font-w500">
                                    Student Name <br />
                                    9876543210
                                  </h4>
                                </div>
                              </td>
                              <td>
                                No <i className="bi-x-square text-danger" />
                              </td>
                              <td>2 May 2023</td>
                              <td>Interested</td>
                              <td>20 May 2023</td>
                              <td>
                                MPPSC MAINS ENGLISH <br />
                                Rs.75000
                              </td>
                              <td>Rs.65000</td>
                              <td>
                                <a
                                  href=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#studentdetails"
                                >
                                  <i className="bi-eye mr-2 text-dark" />
                                </a>
                                <a
                                  href=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#followup"
                                >
                                  <i
                                    className="bi-chat-right-dots text-primary mr-2"
                                    title="followup message"
                                  />
                                </a>
                                <a
                                  href=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#enquiries"
                                >
                                  <i className="bi-pencil-square mr-2 text-danger" />
                                </a>
                                <a href="add_enrollement.html">
                                  <i className="bi-binoculars-fill text-secondary mr-2" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className="dataTables_info"
                          id="example4_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 2 of 2 entries
                        </div>
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="example4_paginate"
                        >
                          <a
                            className="paginate_button previous disabled"
                            aria-controls="example4"
                            data-dt-idx={0}
                            tabIndex={0}
                            id="example4_previous"
                          >
                            <i
                              className="fa fa-angle-double-left"
                              aria-hidden="true"
                            />
                          </a>
                          <span>
                            <a
                              className="paginate_button current"
                              aria-controls="example4"
                              data-dt-idx={1}
                              tabIndex={0}
                            >
                              1
                            </a>
                          </span>
                          <a
                            className="paginate_button next disabled"
                            aria-controls="example4"
                            data-dt-idx={2}
                            tabIndex={0}
                            id="example4_next"
                          >
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AddEnquiries show={modalShow} onHide={() => setModalShow(false)} />
      {modalShow?<div class="modal-backdrop fade show"></div>:""} */}
    </>
  );
};

export default Enquiries;
