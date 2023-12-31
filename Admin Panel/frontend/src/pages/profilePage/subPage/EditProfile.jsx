import React from "react";
import EditBtnComponent from "../EditBtnComponent";

const EditProfile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="row">
              <EditBtnComponent />
              <div className="main-content">
                <div className="dashboard-breadcrumb mb-25">
                  <h2>Edit Profile</h2>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="panel">
                      <div className="panel-body">
                        <div
                          className="tab-content profile-edit-tab"
                          id="nav-tabContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="nav-edit-profile"
                            role="tabpanel"
                            aria-labelledby="nav-edit-profile-tab"
                            tabIndex={0}
                          >
                            <form>
                              <div className="profile-edit-tab-title">
                                <h6>User Information</h6>
                              </div>
                              <div className="public-information mb-25">
                                <div className="row g-4">
                                  <div className="col-md-12">
                                    <div className="row g-3">
                                      <div className="col-md-4 col-sm-6">
                                        <div className="input-group">
                                          <span className="input-group-text">
                                            <i className="fa-light fa-envelope" />
                                          </span>
                                          <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            defaultValue="example@mail.com"
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="col-sm-4">
                                        <div className="input-group">
                                          <span className="input-group-text">
                                            <i class="fa-solid fa-user"></i>
                                          </span>
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                            defaultValue="Mitchell C. Shay"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 col-sm-6">
                                        <div className="input-group">
                                          <span className="input-group-text">
                                            <i className="fa-solid fa-phone" />
                                          </span>
                                          <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Phone"
                                            defaultValue="+0 123 456 789"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-8 mb-4">
                                        <textarea
                                          className="form-control h-150-p"
                                          placeholder="Biography"
                                          defaultValue={
                                            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="profile-edit-tab-title">
                                <h6>Social Information</h6>
                              </div>
                              <div className="social-information">
                                <div className="row g-3">
                                  <div className="col-sm-6">
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="fa-brands fa-linkedin-in" />
                                      </span>
                                      <input
                                        type="url"
                                        className="form-control"
                                        placeholder="Linkedin"
                                        defaultValue="https://www.linkedin.com/"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="fa-brands fa-instagram" />
                                      </span>
                                      <input
                                        type="url"
                                        className="form-control"
                                        placeholder="Instagram"
                                        defaultValue="https://www.instagram.com/"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
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
      </div>
    </>
  );
};

export default EditProfile;
