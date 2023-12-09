import React from 'react'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-6">
                    <div className="col-lg-7 mt-6">
                        <img src="images/login.gif" alt="" height="auto" width={650} />
                    </div>
                    <div className="col-lg-5">
                        <div className="text-center mt-5">
                            <a href="" className="brand-logo">
                                <img src="images/logo.png" />
                            </a>
                            <h4 className="card-title mt-4">Welcome To Stepup Academy</h4>
                        </div>
                        <div className="card rounded-3 effect2 h-auto">
                            <div className="card-header text-center">
                                <h4 className="card-title">Login to Continue</h4>
                            </div>
                            <div className="card-body">
                                <div className="basic-form">
                                    <form
                                        className="form-valide-with-icon needs-validation"
                                        noValidate=""
                                    >
                                        <nav>
                                            <div
                                                className="nav nav-tabs justify-content-start tab-auto"
                                                id="nav-tab"
                                                role="tablist"
                                            >
                                                <button
                                                    className="nav-link active"
                                                    id="nav-about-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-about"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="nav-about"
                                                    aria-selected="true"
                                                >
                                                    Receptionist Login
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    id="nav-reviews-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-reviews"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="nav-reviews"
                                                    aria-selected="false"
                                                >
                                                    HR Login
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    id="nav-reviews-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#nav-reviews2"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="nav-reviews"
                                                    aria-selected="false"
                                                >
                                                    {" "}
                                                    Admin Login
                                                </button>
                                            </div>
                                        </nav>
                                        <div className="tab-content mt-4" id="nav-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="nav-about"
                                                role="tabpanel"
                                                aria-labelledby="nav-about-tab"
                                            >
                                                <div className="mb-3 mt-4">
                                                    <label
                                                        className="text-label form-label"
                                                        htmlFor="validationCustomUsername"
                                                    >
                                                        Please enter mobile number
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text">
                                                            {" "}
                                                            <i
                                                                className="fa fa-user"
                                                                style={{ color: "#031c54" }}
                                                            />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="validationCustomUsername"
                                                            placeholder=" +91 | Phone Number"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        className="text-label form-label"
                                                        htmlFor="dlab-password"
                                                    >
                                                        Password *
                                                    </label>
                                                    <div className="input-group transparent-append">
                                                        <span className="input-group-text">
                                                            {" "}
                                                            <i
                                                                className="fa fa-lock"
                                                                style={{ color: "#031c54" }}
                                                            />
                                                        </span>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="dlab-password"
                                                            placeholder="Enter password"
                                                            required=""
                                                        />
                                                        <span className="input-group-text show-pass">
                                                            <i className="fa fa-eye-slash" />
                                                            <i className="fa fa-eye" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="invalidCheck2"
                                                            required=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="invalidCheck2"
                                                        >
                                                            Check Me out
                                                        </label>
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn me-2 btn-primary btn-block fs-15"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="nav-reviews"
                                                role="tabpanel"
                                                aria-labelledby="nav-reviews-tab"
                                            >
                                                <div className="mb-3 mt-4">
                                                    <label
                                                        className="text-label form-label"
                                                        htmlFor="validationCustomUsername"
                                                    >
                                                        Please enter mobile number
                                                    </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text">
                                                            {" "}
                                                            <i
                                                                className="fa fa-user"
                                                                style={{ color: "#031c54" }}
                                                            />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="validationCustomUsername"
                                                            placeholder=" +91 | Phone Number"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        className="text-label form-label"
                                                        htmlFor="dlab-password"
                                                    >
                                                        Password *
                                                    </label>
                                                    <div className="input-group transparent-append">
                                                        <span className="input-group-text">
                                                            {" "}
                                                            <i
                                                                className="fa fa-lock"
                                                                style={{ color: "#031c54" }}
                                                            />
                                                        </span>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="dlab-password"
                                                            placeholder="Enter password"
                                                            required=""
                                                        />
                                                        <span className="input-group-text show-pass">
                                                            <i className="fa fa-eye-slash" />
                                                            <i className="fa fa-eye" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="invalidCheck2"
                                                            required=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="invalidCheck2"
                                                        >
                                                            Check Me out
                                                        </label>
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn me-2 btn-primary fs-20 btn-block"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login