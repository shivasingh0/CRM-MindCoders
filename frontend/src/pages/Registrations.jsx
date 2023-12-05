import React from 'react'

const Registrations = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Student Enrollments</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table
                                                id="example4"
                                                className="display"
                                                style={{ minWidth: 845 }}
                                            >
                                                <thead>
                                                    <tr className="text-center">
                                                        <th>No.</th>
                                                        <th>Registration No.</th>
                                                        <th>Student Name</th>
                                                        <th>Course Name </th>
                                                        <th>Course Price </th>
                                                        <th>No. of Installments </th>
                                                        <th>Mode of Payment </th>
                                                        <th>Registration Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="text-center">
                                                        <td>01</td>
                                                        <td>
                                                            <b className="text-primary">STEPCL9A01</b>
                                                        </td>
                                                        <td>
                                                            <a href="addfollowup.html">
                                                                <b>Student Name</b> <br />
                                                                <span className="text-primary">+91 9876543210</span>
                                                            </a>
                                                        </td>
                                                        <td>NEET Crash Course</td>
                                                        <td>INR.25000</td>
                                                        <td>Full Payment</td>
                                                        <td>via UPI</td>
                                                        <td>
                                                            <b>25/10/2022</b> <br />
                                                            <span className="text-primary">10:30 AM </span>
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

export default Registrations