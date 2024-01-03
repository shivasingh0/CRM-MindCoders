import React, { useState } from "react";
import ViewStudentDetails from "../../components/modals/View/ViewStudentDetails";
import ViewFee from "../../components/modals/View/ViewFee";

const PassoutTable = () => {
  const [viewStudent, setViewStudent] = useState(false);
  const [viewFee, setViewFee] = useState(false)

  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>
          <span className="badge badge-primary mr-2">
            Total Passout Amissions- 1 Students{" "}
          </span>
        </h4>
      </div>
      <hr />
      <div className="table-responsive">
        <div
          className="modal fade"
          id="studentdetails2dbf604b-4c93-4179-8648-23dd15b86b0d"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header gradient-5">
                <h4 className="text-white">
                  {" "}
                  Dinesh - IMGS01 (Admission Details)
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="card-body">
                <div className="instructors-media mt-3">
                  <div className="instructors-media-info text-center">
                    <div className="row">
                      <div className="col-md-4 mt-4">
                        <img
                          src="/static/not.uploaded"
                          alt=""
                          height={200}
                          width={200}
                        />
                      </div>
                      <div className="col-md-8">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Course Name</span>
                            <span className="mb-0 text-secondary">
                              MPPSC MAINS{" "}
                            </span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Student Name</span>
                            <span className="mb-0">Dinesh</span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Mobile</span>
                            <span className="mb-0">+9876543210</span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Email</span>
                            <span className="mb-0">testing@gmail.com</span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Admission Date</span>
                            <span className="mb-0 text-left">2023-06-19</span>
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
                            <span className="mb-0 text-secondary">
                              Rs.50000
                            </span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Discount Amount</span>
                            <span className="mb-0 text-secondary">
                              -Rs.15000.00
                            </span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Recieved Amount</span>
                            <span className="mb-0 text-success">Rs.10000</span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Due Amount</span>
                            <span className="mb-0 text-danger">Rs.25000</span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Payment Mode</span>
                            <span className="mb-0">QR/UPI</span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Transaction No./Cheque No.</span>
                            <span className="mb-0">9786574356fhgvchg</span>
                          </li>
                          <li className="list-group-item d-flex px-0 justify-content-between">
                            <span>Bank Name</span>
                            <span className="mb-0">no</span>
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
                            <span className="mb-0">9876543210</span>
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="followup2dbf604b-4c93-4179-8648-23dd15b86b0d"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header gradient-5">
                <h4 className="text-white"> Payment History</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="card-body">
                <div className="col-md-12">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex px-0 justify-content-between">
                      <span className="mb-0 text-secondary">
                        Dinesh (IMGS89)
                      </span>
                      <span className="mb-0 text-secondary">
                        MPPSC MAINS (Warrior Batch) : Rs.50000
                      </span>
                    </li>
                    <li className="list-group-item d-flex px-0 justify-content-between">
                      <span className="mb-0 text-secondary" />
                      <span className="mb-0 text-secondary">
                        Discount : - Rs.15000.00
                      </span>
                    </li>
                    <li className="list-group-item d-flex px-0 justify-content-between">
                      <span className="mb-0 text-secondary" />
                      <span className="mb-0 text-secondary">
                        Recieved Amount: Rs.10000
                      </span>
                    </li>
                    <li className="list-group-item d-flex px-0 justify-content-between">
                      <span className="mb-0 text-secondary" />
                      <span className="mb-0 text-danger">
                        Due Amount: Rs.25000
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  id="DZ_W_TimeLine11"
                  className="widget-timeline style-3 p-3"
                >
                  <h4 className="mt-3">Payment Activity</h4>
                  <ul className="timeline-active">
                    <li className="d-flex align-items-baseline">
                      <h4 className="font-w400 time">2023-06-19</h4>
                      <div className="panel">
                        <a
                          className="timeline-panel text-muted d-flex align-items-center"
                          href="#"
                        >
                          <h4 className="mb-0">
                            <button className="btn btn-warning mr-2">
                              Rs.10000{" "}
                            </button>
                            Payment Mode: via QR/UPI and Transaction No./Cheque
                            No.: 9786574356fhgvchg
                          </h4>
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-baseline">
                      <h4 className="font-w400 time">2023-06-19</h4>
                      <div className="panel">
                        <a
                          className="timeline-panel text-muted d-flex align-items-center"
                          href="#"
                        >
                          <h4 className="mb-0">
                            <button className="btn btn-danger mr-2">
                              Rs.15000.00{" "}
                            </button>
                            Discount Amount
                          </h4>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="example4_wrapper" className="dataTables_wrapper no-footer">
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
                  style={{ width: 44 }}
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
                  style={{ width: "143.163px" }}
                >
                  Student Name
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example4"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Student ID: activate to sort column ascending"
                  style={{ width: "108.912px" }}
                >
                  Student ID
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example4"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Course Name : activate to sort column ascending"
                  style={{ width: "144.8px" }}
                >
                  Course Name{" "}
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example4"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Joining Date : activate to sort column ascending"
                  style={{ width: "126.338px" }}
                >
                  Joining Date{" "}
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example4"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Passout Date : activate to sort column ascending"
                  style={{ width: "168.175px" }}
                >
                  Passout Date{" "}
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example4"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Grade/Marks: activate to sort column ascending"
                  style={{ width: "130.837px" }}
                >
                  Grade/Marks
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example4"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Action : activate to sort column ascending"
                  style={{ width: "112.05px" }}
                >
                  Action{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Modal for add student details*/}
              {/* Modal for add student followup*/}
              <tr className="text-center odd" role="row">
                <td className="sorting_1">1</td>
                <td>
                  <div
                    className="d-flex align-items-center pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#studentdetails"
                  >
                    <h4 className="mb-0 fs-16 font-w500">
                      Dinesh <br />
                      9876543210
                    </h4>
                  </div>
                </td>
                <td>IMGS01</td>
                <td>
                  MPPSC MAINS <br />
                  <span>(Warrior Batch)</span>
                </td>
                <td>2023-06-19</td>
                <td>2023-06-20 17:26</td>
                <td>
                  <span className="badge badge-secondary">A+ </span>
                </td>
                <td>
                  <i
                    className="bi-eye mr-2 text-dark pointer"
                    onClick={() => setViewStudent(true)}
                  />

                  <i className="bi-clipboard-data mr-2 text-primary pointer"
                     onClick={()=>setViewFee(true)}
                  />
                  <i
                    className="bi-binoculars-fill text-primary pointer"
                    title="Re-admit Admission"
                  />
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
            Showing 1 to 1 of 1 entries
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
              <i className="fa fa-angle-double-left" aria-hidden="true" />
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
              <i className="fa fa-angle-double-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      {/* ---------------Modals-------------- */}
      {/* view student */}
      <ViewStudentDetails
        show={viewStudent}
        onHide={() => setViewStudent(false)}
      />
      {viewStudent ? <div class="modal-backdrop fade show"></div> : ""}
      {/* view fee */}
      <ViewFee show={viewFee} onHide={()=>setViewFee(false)} />
      {viewFee ? <div class="modal-backdrop fade show"></div> : ""}
    </>
  );
};

export default PassoutTable;
