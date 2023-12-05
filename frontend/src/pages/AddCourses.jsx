import React from 'react'

const AddCourses = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col-xl-12 col-xxl-12 col-sm-12">
                                <div className="card h-auto">
                                    <div className="card-body">
                                        <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
                                            <h4 className="card-title">All Courses</h4>
                                            <button
                                                className="btn btn-primary btn-sm"
                                                data-bs-toggle="modal"
                                                data-bs-target="#addcourse"
                                            >
                                                <i className="bi-bag-plus-fill" /> Add Course
                                            </button>
                                        </div>
                                        <hr />
                                        <div className="table-responsive mt-10">
                                            <table id="example3" className="display">
                                                <thead>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th>ID</th>
                                                        <th>Course Name</th>
                                                        <th>Batch Name</th>
                                                        <th>Course Fees</th>
                                                        <th>Active</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>IMGNS01</td>
                                                        <td>MPPSC Mains (Hindi Medium)</td>
                                                        <td>Pathshala Batch</td>
                                                        <td>Rs.75000</td>
                                                        <td>Rs.75000</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-secondary btn-xs"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#addcourse"
                                                            >
                                                                <i className="bi-node-plus" /> edit
                                                            </button>
                                                            <button
                                                                className="btn btn-danger btn-xs"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete"
                                                            >
                                                                <i className="bi-trash" /> delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>IMGNS02</td>
                                                        <td>MPPSC Prelims (Hindi &amp; English Medium)</td>
                                                        <td>Target Batch</td>
                                                        <td>Rs.35000</td>
                                                        <td>Rs.35000</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-secondary btn-xs"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#addcourse"
                                                            >
                                                                <i className="bi-node-plus" /> edit
                                                            </button>
                                                            <button
                                                                className="btn btn-danger btn-xs"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete"
                                                            >
                                                                <i className="bi-trash" /> delete
                                                            </button>
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
    )
}

export default AddCourses