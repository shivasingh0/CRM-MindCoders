import React from 'react'

const CourseDetails = () => {
    return (
        <>
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col-xl-12 col-xxl-12 col-sm-12">
                                    <div className="card h-auto">
                                        <div className="card-body">
                                            <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
                                                <h4>Courses Offered</h4>
                                            </div>
                                            <hr />
                                            <div className="table-responsive mt-10">
                                                <table id="example3" className="display">
                                                    <thead>
                                                        <tr className="text-center">
                                                            <th>No.</th>
                                                            <th>Course ID</th>
                                                            <th>Course Name</th>
                                                            <th>Current Students</th>
                                                            <th>Syllabus</th>
                                                            <th>Faculties</th>
                                                            <th>Total Fees</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="text-center">
                                                            <td>01</td>
                                                            <td>STEP#CL12NJ</td>
                                                            <td>
                                                                <b className="text-secondary">Class 12 NEET/JEE</b>
                                                            </td>
                                                            <td>10 Students</td>
                                                            <td>
                                                                <a href="" target="_blank" className="text-primary">
                                                                    <u>view syllabus</u>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <u
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#faculties"
                                                                    className="text-primary"
                                                                >
                                                                    view faculties
                                                                </u>
                                                            </td>
                                                            <td>
                                                                <u
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#fees"
                                                                    className="text-primary"
                                                                >
                                                                    view fees
                                                                </u>
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
            </div>

        </>
    )
}

export default CourseDetails