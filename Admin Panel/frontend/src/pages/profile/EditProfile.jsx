import React from "react";

const EditProfile = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="panel">
            <div className="panel-header">
              <nav>
                <div
                  className="btn-box d-flex flex-wrap gap-1"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="btn btn-sm btn-outline-primary"
                    id="nav-edit-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-edit-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-edit-profile"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Edit Profile
                  </button>
                  <button
                    className="btn btn-sm btn-outline-primary active"
                    id="nav-change-password-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-change-password"
                    type="button"
                    role="tab"
                    aria-controls="nav-change-password"
                    aria-selected="true"
                  >
                    Change Password
                  </button>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    id="nav-other-settings-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-other-settings"
                    type="button"
                    role="tab"
                    aria-controls="nav-other-settings"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Other Settings
                  </button>
                </div>
              </nav>
            </div>
            <div className="panel-body">
              <div className="tab-content profile-edit-tab" id="nav-tabContent">
                <div
                  className="tab-pane fade"
                  id="nav-edit-profile"
                  role="tabpanel"
                  aria-labelledby="nav-edit-profile-tab"
                  tabIndex={0}
                >
                  <form>
                    <div className="profile-edit-tab-title">
                      <h6>Public Information</h6>
                    </div>
                    <div className="public-information mb-25">
                      <div className="row g-4">
                        <div className="col-md-3">
                          <div className="admin-profile">
                            <div className="image-wrap">
                              <div className="part-img rounded-circle overflow-hidden">
                                <img
                                  src="assets/images/admin.png"
                                  alt="admin"
                                />
                              </div>
                              <button className="image-change">
                                <i className="fa-light fa-camera" />
                              </button>
                            </div>
                            <span className="admin-name">Mitchell C. Shay</span>
                            <span className="admin-role">Graphic Designer</span>
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="row g-3">
                            <div className="col-sm-6">
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="fa-light fa-user" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name"
                                  defaultValue="Mitchell C. Shay"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="fa-light fa-at" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Username"
                                  defaultValue="@mitchellc"
                                />
                              </div>
                            </div>
                            <div className="col-12">
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
                      <h6>Private Information</h6>
                    </div>
                    <div className="private-information mb-25">
                      <div className="row g-3">
                        <div className="col-md-4 col-sm-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-light fa-user" />
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Unique ID"
                              defaultValue="1D233"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className="input-group flex-nowrap">
                            <span className="input-group-text">
                              <i className="fa-light fa-user-tie" />
                            </span>
                            <select
                              className="form-control select-search select2-hidden-accessible"
                              data-placeholder="Role"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option value="">Role</option>
                              <option value={0}>Admin</option>
                              <option value={1}>Manager</option>
                              <option value={2}>Project Manager</option>
                              <option value={3}>Managing Director</option>
                              <option value={4}>Chairman</option>
                              <option value={5} selected="">
                                Graphic Designer
                              </option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              style={{ width: "25.6px" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-control select-search"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-labelledby="select2-81gm-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-81gm-container"
                                    title="Graphic Designer"
                                  >
                                    Graphic Designer
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className="input-group flex-nowrap">
                            <span className="input-group-text">
                              <i className="fa-light fa-circle-check" />
                            </span>
                            <select
                              className="form-control select2-hidden-accessible"
                              data-placeholder="Status"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option value="">Status</option>
                              <option value={0} selected="">
                                Enable
                              </option>
                              <option value={1}>Disable</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              style={{ width: "25.6px" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-control"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-labelledby="select2-rv7n-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-rv7n-container"
                                    title="Enable"
                                  >
                                    Enable
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
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
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-light fa-phone" />
                            </span>
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Phone"
                              defaultValue="+0 123 456 789"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-light fa-globe" />
                            </span>
                            <input
                              type="url"
                              className="form-control"
                              placeholder="Website"
                              defaultValue="https://themeforest.net/"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control h-100-p"
                            placeholder="Address"
                            defaultValue={"California, United States"}
                          />
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
                              <i className="fa-brands fa-facebook-f" />
                            </span>
                            <input
                              type="url"
                              className="form-control"
                              placeholder="Facebook"
                              defaultValue="https://www.facebook.com/"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-brands fa-twitter" />
                            </span>
                            <input
                              type="url"
                              className="form-control"
                              placeholder="Twitter"
                              defaultValue="https://twitter.com/"
                            />
                          </div>
                        </div>
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
                        <div className="col-sm-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-brands fa-youtube" />
                            </span>
                            <input
                              type="url"
                              className="form-control"
                              placeholder="Youtube"
                              defaultValue="https://www.youtube.com/"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-brands fa-pinterest-p" />
                            </span>
                            <input
                              type="url"
                              className="form-control"
                              placeholder="Pinterest"
                              defaultValue="https://www.pinterest.com/"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade active show"
                  id="nav-change-password"
                  role="tabpanel"
                  aria-labelledby="nav-change-password-tab"
                  tabIndex={0}
                >
                  <form>
                    <div className="profile-edit-tab-title">
                      <h6>Change Password</h6>
                    </div>
                    <div className="social-information">
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-light fa-lock" />
                            </span>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Current Password"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-light fa-lock" />
                            </span>
                            <input
                              type="url"
                              className="form-control"
                              placeholder="New Password"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-light fa-lock" />
                            </span>
                            <input
                              type="url"
                              className="form-control"
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-other-settings"
                  role="tabpanel"
                  aria-labelledby="nav-other-settings-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="profile-edit-tab-title">
                        <h6>Activity Email Settings</h6>
                      </div>
                      <div className="activity-email-settings">
                        <form>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="activity-email-settings-1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="activity-email-settings-1"
                            >
                              Someone adds you as a connection
                            </label>
                          </div>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="activity-email-settings-2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="activity-email-settings-2"
                            >
                              you're sent a direct message
                            </label>
                          </div>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="activity-email-settings-3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="activity-email-settings-3"
                            >
                              New membership approval
                            </label>
                          </div>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="activity-email-settings-4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="activity-email-settings-4"
                            >
                              Send Copy To Personal Email
                            </label>
                          </div>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="activity-email-settings-5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="activity-email-settings-5"
                            >
                              Tips on getting more out of PCT-themes
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="profile-edit-tab-title">
                        <h6>Product Email Settings</h6>
                      </div>
                      <div className="product-email-settings">
                        <form>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="product-email-settings-1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="product-email-settings-1"
                            >
                              Someone adds you as a connection
                            </label>
                          </div>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="product-email-settings-2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="product-email-settings-2"
                            >
                              you're sent a direct message
                            </label>
                          </div>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="product-email-settings-3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="product-email-settings-3"
                            >
                              New membership approval
                            </label>
                          </div>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="product-email-settings-4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="product-email-settings-4"
                            >
                              Send Copy To Personal Email
                            </label>
                          </div>
                          <div className="form-check mb-15">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="product-email-settings-5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="product-email-settings-5"
                            >
                              Tips on getting more out of PCT-themes
                            </label>
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
    </>
  );
};

export default EditProfile;
