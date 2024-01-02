import React, { useState } from "react";
import AddDemoClass from "../../components/modals/Add/AddDemoClass";

const DemoClassTable = () => {
  const [addDemoModelShow, setAddDemoModelShow] = useState(false);

  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>
          <span className="badge badge-primary mr-2">
            Total Demo Classes- 2
          </span>
          <span className="badge badge-secondary">Today's Demo Classes- 0</span>
        </h4>
        <button
          className="btn btn-secondary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#addcourse"
          onClick={() => setAddDemoModelShow(true)}
        >
          <i className="bi-input-cursor-text" /> Add Demo Class
        </button>
      </div>
      <hr />
      <div className="table-responsive mt-10">
        <div className="modal fade" id="delete">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header gradient-5">
                <h4 className="text-white"> Delete Course</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <h4>
                  Are you sure to delete this MPPSC MAINS (Warrior Batch) Batch
                  - Rs.50000?
                </h4>
                <div className="mt-4">
                  <a href="/delete_democlass/8cb1edea-5d62-4b00-b5d0-2a2974584bd8">
                    <button type="submit" className="btn btn-secondary">
                      Yes
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    No
                  </button>
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
          id="updatecourse8cb1edea-5d62-4b00-b5d0-2a2974584bd8"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header gradient-5">
                <h4 className="text-white"> Update Demo Class</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="widget-heading d-flex justify-content-between align-items-center">
                  {/* <h5 /> */}
                  <div>
                    <h5 className="datetime">Date: 27/12/2023 18:2:12</h5>
                  </div>
                </div>
                <form
                  className="needs-validation"
                  action="/update_democlass/"
                  method="post"
                  id="my2Form"
                  encType="multipart/form-data"
                />
                <input
                  type="hidden"
                  name="id"
                  defaultValue="8cb1edea-5d62-4b00-b5d0-2a2974584bd8"
                />
                <div className="col-md-12 mb-2">
                  <label className="mb-2">
                    <strong>Mention the Course You Wish to Join*</strong>
                  </label>
                  <select
                    className="default-select  form-control wide"
                    name="course_id"
                    id="mySelect"
                    style={{ display: "none" }}
                  >
                    <option disabled="">Select Course</option>
                    <option value="e3d98a50-ce39-41f3-931a-4ddbe861897e">
                      MPPSC MAINS{" "}
                    </option>
                    <option value="e3d98a50-ce39-41f3-931a-4ddbe861897e">
                      MPPSC MAINS{" "}
                    </option>
                    <option value="ae9de728-123c-438d-85b7-ca262a56c557">
                      MPPSC MAINS{" "}
                    </option>
                    <option value="ef59c871-e654-4ff5-bcaf-12e975f6bdef">
                      MPPSC MAINS{" "}
                    </option>
                  </select>
                  <div
                    className="nice-select default-select form-control wide"
                    tabIndex={0}
                  >
                    <span className="current">MPPSC MAINS </span>
                    <ul className="list">
                      <li
                        data-value="Select Course"
                        className="option disabled"
                      >
                        Select Course
                      </li>
                      <li
                        data-value="e3d98a50-ce39-41f3-931a-4ddbe861897e"
                        className="option selected"
                      >
                        MPPSC MAINS{" "}
                      </li>
                      <li
                        data-value="e3d98a50-ce39-41f3-931a-4ddbe861897e"
                        className="option"
                      >
                        MPPSC MAINS{" "}
                      </li>
                      <li
                        data-value="ae9de728-123c-438d-85b7-ca262a56c557"
                        className="option"
                      >
                        MPPSC MAINS{" "}
                      </li>
                      <li
                        data-value="ef59c871-e654-4ff5-bcaf-12e975f6bdef"
                        className="option"
                      >
                        MPPSC MAINS{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 mb-2">
                  <label className="mb-1 mt-3">
                    <strong>Student Name</strong>
                  </label>
                  <input
                    type="text"
                    name="candidate_name"
                    defaultValue="Testing"
                    className="form-control mt-10"
                    placeholder="enter student name"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <label className="mb-1 mt-3">
                    <strong>Student Number</strong>
                  </label>
                  <input
                    type="text"
                    name="number"
                    defaultValue=""
                    className="form-control mt-10"
                    placeholder="enter student number"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <label className="mb-1 mt-2">
                    <strong>Start Date </strong>
                  </label>
                  <input
                    type="date"
                    className="form-control mt-10"
                    name="start_date"
                    defaultValue="2023-06-15"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <label className="mb-1 mt-2">
                    <strong>End Date </strong>
                  </label>
                  <input
                    type="date"
                    className="form-control mt-10"
                    name="end_date"
                    defaultValue="2023-06-17"
                  />
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn-secondary btn-block mt-4"
                  >
                    <i className="bi-input-cursor-text" /> update demo class
                  </button>
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
        <div className="modal fade" id="delete">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header gradient-5">
                <h4 className="text-white"> Delete Course</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <h4>
                  Are you sure to delete this MPPSC MAINS (Warrior Batch) Batch
                  - Rs.50000?
                </h4>
                <div className="mt-4">
                  <a href="/delete_democlass/d59383c9-4de9-4071-88c0-e5f342dff34c">
                    <button type="submit" className="btn btn-secondary">
                      Yes
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    No
                  </button>
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
          id="updatecoursed59383c9-4de9-4071-88c0-e5f342dff34c"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header gradient-5">
                <h4 className="text-white"> Update Demo Class</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="widget-heading d-flex justify-content-between align-items-center">
                  <h5 />
                  <div>
                    <h5 className="datetime">Date: 27/12/2023 18:2:12</h5>
                  </div>
                </div>
                <form
                  className="needs-validation"
                  action="/update_democlass/"
                  method="post"
                  id="my2Form"
                  encType="multipart/form-data"
                />
                <input
                  type="hidden"
                  name="id"
                  defaultValue="d59383c9-4de9-4071-88c0-e5f342dff34c"
                />
                <div className="col-md-12 mb-2">
                  <label className="mb-2">
                    <strong>Mention the Course You Wish to Join*</strong>
                  </label>
                  <select
                    className="default-select  form-control wide"
                    name="course_id"
                    id="mySelect"
                    style={{ display: "none" }}
                  >
                    <option disabled="">Select Course</option>
                    <option value="e3d98a50-ce39-41f3-931a-4ddbe861897e">
                      MPPSC MAINS{" "}
                    </option>
                    <option value="e3d98a50-ce39-41f3-931a-4ddbe861897e">
                      MPPSC MAINS{" "}
                    </option>
                    <option value="ae9de728-123c-438d-85b7-ca262a56c557">
                      MPPSC MAINS{" "}
                    </option>
                    <option value="ef59c871-e654-4ff5-bcaf-12e975f6bdef">
                      MPPSC MAINS{" "}
                    </option>
                  </select>
                  <div
                    className="nice-select default-select form-control wide"
                    tabIndex={0}
                  >
                    <span className="current">MPPSC MAINS </span>
                    <ul className="list">
                      <li
                        data-value="Select Course"
                        className="option disabled"
                      >
                        Select Course
                      </li>
                      <li
                        data-value="e3d98a50-ce39-41f3-931a-4ddbe861897e"
                        className="option selected"
                      >
                        MPPSC MAINS{" "}
                      </li>
                      <li
                        data-value="e3d98a50-ce39-41f3-931a-4ddbe861897e"
                        className="option"
                      >
                        MPPSC MAINS{" "}
                      </li>
                      <li
                        data-value="ae9de728-123c-438d-85b7-ca262a56c557"
                        className="option"
                      >
                        MPPSC MAINS{" "}
                      </li>
                      <li
                        data-value="ef59c871-e654-4ff5-bcaf-12e975f6bdef"
                        className="option"
                      >
                        MPPSC MAINS{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 mb-2">
                  <label className="mb-1 mt-3">
                    <strong>Student Name</strong>
                  </label>
                  <input
                    type="text"
                    name="candidate_name"
                    defaultValue="Feeroz Khan"
                    className="form-control mt-10"
                    placeholder="enter student name"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <label className="mb-1 mt-3">
                    <strong>Student Number</strong>
                  </label>
                  <input
                    type="text"
                    name="number"
                    defaultValue=""
                    className="form-control mt-10"
                    placeholder="enter student number"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <label className="mb-1 mt-2">
                    <strong>Start Date </strong>
                  </label>
                  <input
                    type="date"
                    className="form-control mt-10"
                    name="start_date"
                    defaultValue="2023-12-08"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <label className="mb-1 mt-2">
                    <strong>End Date </strong>
                  </label>
                  <input
                    type="date"
                    className="form-control mt-10"
                    name="end_date"
                    defaultValue="2023-12-10"
                  />
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn-secondary btn-block mt-4"
                  >
                    <i className="bi-input-cursor-text" /> update demo class
                  </button>
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
        <div id="example3_wrapper" className="dataTables_wrapper no-footer">
          <div className="dataTables_length" id="example3_length">
            <label>
              Show{" "}
              <select
                name="example3_length"
                aria-controls="example3"
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
          <div id="example3_filter" className="dataTables_filter">
            <label>
              Search:
              <input
                type="search"
                className=""
                placeholder=""
                aria-controls="example3"
              />
            </label>
          </div>
          <table
            id="example3"
            className="display text-center dataTable no-footer"
            role="grid"
            aria-describedby="example3_info"
          >
            <thead>
              <tr role="row">
                <th
                  className="sorting_asc"
                  tabIndex={0}
                  aria-controls="example3"
                  rowSpan={1}
                  colSpan={1}
                  aria-sort="ascending"
                  aria-label="No.: activate to sort column descending"
                  style={{ width: "43.7125px" }}
                >
                  No.
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example3"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="ID: activate to sort column ascending"
                  style={{ width: "113.963px" }}
                >
                  ID
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example3"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Student Name: activate to sort column ascending"
                  style={{ width: "142.475px" }}
                >
                  Student Name
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example3"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Course Name: activate to sort column ascending"
                  style={{ width: "280.862px" }}
                >
                  Course Name
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example3"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Start Date: activate to sort column ascending"
                  style={{ width: "114.175px" }}
                >
                  Start Date
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example3"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="End Date: activate to sort column ascending"
                  style={{ width: "114.175px" }}
                >
                  End Date
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example3"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Action: activate to sort column ascending"
                  style={{ width: "195.163px" }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Modal for delete*/}
              {/* Modal for addcourse*/}
              {/* Modal for delete*/}
              {/* Modal for addcourse*/}
              <tr role="row" className="odd">
                <td className="sorting_1">1</td>
                <td>IMDEMO01</td>
                <td>
                  Testing <br />
                  <span className="text-primary"> </span>
                </td>
                <td>MPPSC MAINS (Warrior Batch)</td>
                <td>2023-06-15</td>
                <td>2023-06-17</td>
                <td>
                  <button
                    className="btn btn-secondary btn-xs"
                    data-bs-toggle="modal"
                    data-bs-target="#updatecourse8cb1edea-5d62-4b00-b5d0-2a2974584bd8"
                  >
                    <i className="bi-node-plus" />{" "}
                  </button>
                  <button
                    className="btn btn-danger btn-xs"
                    data-bs-toggle="modal"
                    data-bs-target="#delete"
                  >
                    <i className="bi-trash" />{" "}
                  </button>
                  <a
                    href="/add_enrollement/"
                    className="btn btn-primary btn-xs"
                  >
                    <i className="bi-binoculars-fill text-white" />
                  </a>
                </td>
              </tr>
              <tr role="row" className="even">
                <td className="sorting_1">2</td>
                <td>IMDEMO02</td>
                <td>
                  Feeroz Khan <br />
                  <span className="text-primary"> </span>
                </td>
                <td>MPPSC MAINS (Warrior Batch)</td>
                <td>2023-12-08</td>
                <td>2023-12-10</td>
                <td>
                  <button
                    className="btn btn-secondary btn-xs"
                    data-bs-toggle="modal"
                    data-bs-target="#updatecoursed59383c9-4de9-4071-88c0-e5f342dff34c"
                  >
                    <i className="bi-node-plus" />{" "}
                  </button>
                  <button
                    className="btn btn-danger btn-xs"
                    data-bs-toggle="modal"
                    data-bs-target="#delete"
                  >
                    <i className="bi-trash" />{" "}
                  </button>
                  <a
                    href="/add_enrollement/"
                    className="btn btn-primary btn-xs"
                  >
                    <i className="bi-binoculars-fill text-white" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            className="dataTables_info"
            id="example3_info"
            role="status"
            aria-live="polite"
          >
            Showing 1 to 2 of 2 entries
          </div>
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="example3_paginate"
          >
            <a
              className="paginate_button previous disabled"
              aria-controls="example3"
              data-dt-idx={0}
              tabIndex={0}
              id="example3_previous"
            >
              <i className="fa fa-angle-double-left" aria-hidden="true" />
            </a>
            <span>
              <a
                className="paginate_button current"
                aria-controls="example3"
                data-dt-idx={1}
                tabIndex={0}
              >
                1
              </a>
            </span>
            <a
              className="paginate_button next disabled"
              aria-controls="example3"
              data-dt-idx={2}
              tabIndex={0}
              id="example3_next"
            >
              <i className="fa fa-angle-double-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <AddDemoClass
        show={addDemoModelShow}
        onHide={() => setAddDemoModelShow(false)}
      />
      {addDemoModelShow ? <div class="modal-backdrop fade show"></div> : ""}
    </>
  );
};

export default DemoClassTable;
