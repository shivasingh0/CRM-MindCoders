import React from 'react'

const AddFollowup = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-xxl-4">
                        <div className="card instructors-box h-auto">
                            <div className="card-body">
                                <div className="instructors-media mt-3">
                                    <div className="instructors-media-info text-center mt-4">
                                        <img src="images/profile.png" alt="" />
                                        <ul className="list-group list-group-flush mt-4">
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <strong>Student</strong>
                                                <span className="mb-0">Student Name</span>
                                            </li>
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <strong>Mobile</strong>
                                                <span className="mb-0">+919876543210</span>
                                            </li>
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <strong>Parent's Mobile</strong>
                                                <span className="mb-0">NAN</span>
                                            </li>
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <strong>Email</strong>
                                                <span className="mb-0">studentname@gmail.com</span>
                                            </li>
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <strong className="text-start" style={{ width: 80 }}>
                                                    Address
                                                </strong>
                                                <span className="mb-0 text-end">
                                                    128, Near HDS Hospital, Vijay Nagar, Bhopal 456000
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex px-0 justify-content-between">
                                                <strong>Member Since</strong>
                                                <span className="mb-0 text-left">12 October 2022</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="achievements ">
                                    <div className="card-schedule mb-4">
                                        <div className="d-flex justify-content-between content align-items-center">
                                            <button
                                                className="btn btn-primary btn-sm text-left"
                                                data-bs-toggle="modal"
                                                data-bs-target=".bd-example-modal-lg"
                                            >
                                                <i className="bi-pencil-square" /> edit details
                                            </button>
                                        </div>
                                    </div>
                                    <h4 className="text-start mb-4">Achievements</h4>
                                    <div className="achievements-content flex-wrap">
                                        <span>
                                            <img src="images/svg/planet.svg" alt="" />
                                        </span>
                                        <span>
                                            <img src="images/svg/skill.svg" alt="" />
                                        </span>
                                        <span>
                                            <img src="images/svg/readingtime.svg" alt="" />
                                        </span>
                                        <span>
                                            <img src="images/svg/puzzle.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-xxl-8">
                        <div className="card h-auto">
                            <div className="card-body mr-2">
                                <div className="widget-heading d-flex justify-content-between align-items-center">
                                    <h4 className="mt-2">
                                        NEET (Advanced+Mains) <br />
                                        <small>
                                            <i className="bi-clipboard-data" /> Medical
                                        </small>
                                    </h4>
                                    <button
                                        className="btn btn-primary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addfollowup"
                                    >
                                        <i className="bi-bag-plus-fill" /> Add Followup
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card h-auto">
                            <div className="card-body mr-2">
                                <div id="DZ_W_TimeLine11" className="widget-timeline style-3 p-2">
                                    <ul className="timeline-active">
                                        <li className="d-flex align-items-baseline">
                                            <h4 className="font-w600 time text-primary">
                                                18 Februaury 2022
                                                <br /> 10:10 AM
                                            </h4>
                                            <div className="panel">
                                                <a
                                                    className="timeline-panel d-flex text-muted align-items-center"
                                                    href="#"
                                                >
                                                    <div className="badge badge-xl badge-warning">
                                                        <i className="bi bi-folder-symlink" />
                                                    </div>
                                                    <h4 className="mb-0">
                                                        <span>
                                                            Student got 151 marks in neet entrance exams. Need full
                                                            information about our course packages{" "}
                                                        </span>
                                                    </h4>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-baseline">
                                            <h4 className="font-w600 time text-primary">
                                                18 Februaury 2022
                                                <br /> 10:10 AM
                                            </h4>
                                            <div className="panel">
                                                <a
                                                    className="timeline-panel d-flex text-muted align-items-center"
                                                    href="#"
                                                >
                                                    <div className="badge badge-xl badge-warning">
                                                        <i className="bi bi-folder-symlink" />
                                                    </div>
                                                    <h4 className="mb-0">
                                                        <span>Student is interested but need some time. </span>{" "}
                                                    </h4>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddFollowup