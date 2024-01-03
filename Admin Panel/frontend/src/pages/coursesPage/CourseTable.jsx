import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import EditCourse from "../../components/modals/Edit/EditCourse";
import { deleteAlert } from "../../components/alerts/deleteAlert";

const CourseTable = () => {
  const [editModalShow, setEditModalShow] = useState(false);
  
  const handleDelete = async () => {   
    await deleteAlert();
  };

  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>
          <span className="badge badge-primary mr-2">Total Courses- 7</span>
          {/* <span className="badge badge-secondary">
                          Today Enquiries- 5 Students{" "}
                        </span> */}
        </h4>
        <div>
          <Link to="/courses/addnewcourse">
            <button
              className="btn btn-secondary btn-sm mr-2"
              data-bs-toggle="modal"
              data-bs-target="#enquiries"
              // onClick={() => setModalShow(true)}
              variant="primary"
            >
              <i className="bi-person-lines-fill" /> Add New Course
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="table-responsive mt-10">
        <table
          id="example3"
          className="display dataTable no-footer"
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
                style={{ width: "63.9875px" }}
              >
                No.
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example3"
                rowSpan={1}
                colSpan={1}
                aria-label="Course Name: activate to sort column ascending"
                style={{ width: "191.65px" }}
              >
                Course Name
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example3"
                rowSpan={1}
                colSpan={1}
                aria-label="Batch Name: activate to sort column ascending"
                style={{ width: "206.438px" }}
              >
                Course category
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example3"
                rowSpan={1}
                colSpan={1}
                aria-label="Course Fees: activate to sort column ascending"
                style={{ width: "162.65px" }}
              >
                Course Fees
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example3"
                rowSpan={1}
                colSpan={1}
                aria-label="Course Fees: activate to sort column ascending"
                style={{ width: "162.65px" }}
              >
                Faculty Name
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example3"
                rowSpan={1}
                colSpan={1}
                aria-label="Course Fees: activate to sort column ascending"
                style={{ width: "162.65px" }}
              >
                Course Added By
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example3"
                rowSpan={1}
                colSpan={1}
                aria-label="Active: activate to sort column ascending"
                style={{ width: "128.575px" }}
              >
                Active
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="example3"
                rowSpan={1}
                colSpan={1}
                aria-label="Action: activate to sort column ascending"
                style={{ width: "277.475px" }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Modal for updatecourse*/}
            {/* Modal for delete*/}
            {/* Modal for updatecourse*/}
            {/* Modal for delete*/}
            {/* Modal for updatecourse*/}
            {/* Modal for delete*/}
            <tr role="row" className="odd">
              <td className="sorting_1">1</td>
              <td>MPPSC MAINS </td>
              <td>Backend</td>
              <td>50000</td>
              <td>Name</td>
              <td>Name</td>
              <td>
                <button className="btn btn-success btn-xs">active</button>
              </td>
              <td>
                <button
                  className="btn btn-secondary btn-xs"
                  data-bs-toggle="modal"
                  data-bs-target="#updatecoursee3d98a50-ce39-41f3-931a-4ddbe861897e"
                  onClick={() => setEditModalShow(true)}
                >
                  <i className="bi-node-plus" />
                  edit
                </button>
                <button
                  className="btn btn-danger btn-xs"
                  data-bs-toggle="modal"
                  data-bs-target="#delete"
                  onClick={handleDelete}
                >
                  <i className="bi-trash" /> delete
                </button>
              </td>
            </tr>
            <tr role="row" className="even">
              <td className="sorting_1">2</td>
              <td>MPPSC MAINS </td>
              <td>Frontend</td>
              <td>12000</td>
              <td>Name</td>
              <td>Name</td>
              <td>
                <button className="btn btn-success btn-xs">active</button>
              </td>
              <td>
                <button
                  className="btn btn-secondary btn-xs"
                  data-bs-toggle="modal"
                  data-bs-target="#updatecourseae9de728-123c-438d-85b7-ca262a56c557"
                  onClick={() => setEditModalShow(true)}
                >
                  <i className="bi-node-plus" /> edit
                </button>
                <button
                  className="btn btn-danger btn-xs"
                  data-bs-toggle="modal"
                  data-bs-target="#delete"
                  onClick={handleDelete}
                >
                  <i className="bi-trash" /> delete
                </button>
              </td>
            </tr>
            <tr role="row" className="odd">
              <td className="sorting_1">3</td>
              <td>MPPSC MAINS </td>
              <td>Full stack</td>
              <td>3000</td>
              <td>Name</td>
              <td>Name</td>
              <td>
                <button className="btn btn-success btn-xs">active</button>
              </td>
              <td>
                <button
                  className="btn btn-secondary btn-xs"
                  data-bs-toggle="modal"
                  data-bs-target="#updatecourseef59c871-e654-4ff5-bcaf-12e975f6bdef"
                  onClick={() => setEditModalShow(true)}
                >
                  <i className="bi-node-plus" /> edit
                </button>
                <button
                  className="btn btn-danger btn-xs"
                  data-bs-toggle="modal"
                  data-bs-target="#delete"
                  onClick={handleDelete}
                >
                  <i className="bi-trash" /> delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* --------------- Modals----------------- */}
      <EditCourse show={editModalShow} onHide={() => setEditModalShow(false)} />
      {editModalShow ? <div class="modal-backdrop fade show"></div> : ""}
      <Outlet />
    </>
  );
};

export default CourseTable;
