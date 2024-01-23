import React, { useState } from "react";

// Import Components
import * as COMPONENT from '../../routes/ComponentRoute'

const TableComponent = () => {
  const [addEnqueryModalShow, setAddEnqueryModalShow] = useState(false);
  const [viewStudentDetailsModalShow, setViewStudentDetailsModalShow] =
    useState(false);
  const [followUpModalShow, setFollowUpModalShow] = useState(false);

  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>
          <span className="badge badge-primary mr-2">
            Total Enquiries- 20 Students{" "}
          </span>
          <span className="badge badge-secondary">
            Today Enquiries- 5 Students{" "}
          </span>
        </h4>
        <div>
          <button
            className="btn btn-secondary btn-sm mr-2"
            data-bs-toggle="modal"
            data-bs-target="#enquiries"
            onClick={() => setAddEnqueryModalShow(true)}
            variant="primary"
          >
            <i className="bi-person-lines-fill" /> Add New Enquery
          </button>
        </div>
      </div>
      <hr />
      <div className="table-responsive">
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
                <th style={{ width: "33.2625px" }}>No.</th>
                <th style={{ width: "117.275px" }}>Student Name</th>
                <th style={{ width: "54.925px" }}>Done?</th>
                <th style={{ width: "106.125px" }}>Enquiry Date</th>
                <th style={{ width: "81.7125px" }}>Status</th>
                <th style={{ width: "102.787px" }}>Next Call</th>
                <th style={{ width: "189.137px" }}>Course Name </th>
                <th style={{ width: "112.85px" }}>Finalized Fees </th>
                <th style={{ width: "137.15px" }}>Action </th>
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
                  Yes <i className="bi-check2-circle text-success" />
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
                  <i
                    className="bi-eye mr-2 text-dark pointer"
                    title="view details"
                    onClick={() => setViewStudentDetailsModalShow(true)}
                  />
                  <i
                    className="bi-chat-right-dots text-primary mr-2 pointer"
                    title="followup message"
                    onClick={() => setFollowUpModalShow(true)}
                  />
                  {/* <a
                                  href=""
                                  data-bs-toggle="modal"
                                  data-bs-target="#enquiries"
                                > */}
                  <i className="bi-pencil-square mr-2 text-danger" />
                  {/* </a> */}
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
                  <i
                    className="bi-eye mr-2 text-dark pointer"
                    title="view details"
                    onClick={() => setViewStudentDetailsModalShow(true)}
                  />
                  <i
                    className="bi-chat-right-dots text-primary mr-2 pointer"
                    title="followup message"
                    // onClick={()=> setFollowUpModalShow(true) }
                  />
                  <a href="" data-bs-toggle="modal" data-bs-target="#enquiries">
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
      {/* --------------------- Modals -------------------------- */}
      {/* Add students modal */}
      <COMPONENT.ADD_ENQUIRIES
        show={addEnqueryModalShow}
        onHide={() => setAddEnqueryModalShow(false)}
      />
      {addEnqueryModalShow ? <div class="modal-backdrop fade show"></div> : ""}
      {/* View details modal */}
      <COMPONENT.VIEW_STUDENT_DETAILS
        show={viewStudentDetailsModalShow}
        onHide={() => setViewStudentDetailsModalShow(false)}
      />
      {viewStudentDetailsModalShow ? (
        <div class="modal-backdrop fade show"></div>
      ) : (
        ""
      )}
      {/* Follow-up message modal */}
      <COMPONENT.FOLLOW_UP_ACTIVITY
        show={followUpModalShow}
        onHide={() => setFollowUpModalShow(false)}
      />
      {followUpModalShow ? <div class="modal-backdrop fade show"></div> : ""}
    </>
  );
};

export default TableComponent;
