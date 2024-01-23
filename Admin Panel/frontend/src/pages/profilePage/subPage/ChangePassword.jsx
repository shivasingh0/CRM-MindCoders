import React, { useEffect, useState } from "react";
import EditBtnComponent from "../EditBtnComponent";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../../webServices/Getway";
import { webURLs } from "../../../webServices/WebURLs";

const ChangePassword = () => {
  const { adminId } = useParams()
  console.log(adminId);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [token, setToken] = useState()
 
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem("user"))
    const Token = userData?.data?.token;
    setToken(Token)
  },[])

  const handleTogglePasswordVisibility = (passwordType) => {
    if (passwordType === "current") {
      setShowCurrentPassword(!showCurrentPassword);
    } else if (passwordType === "new") {
      setShowNewPassword(!showNewPassword);
    } else if (passwordType === "confirm") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  // Change password API Integration
  const handleChangePassword = async (e) => {
    e.preventDefault()
    if (!currentPassword || !newPassword || !newPassword !== confirmNewPassword) {
      console.error('Password change failed. Please check your inputs.');
    }

    try {
      const result = await axiosClient.put(`${webURLs.CHANGE_PASSWORD}${adminId}`, {password:currentPassword,new_password: newPassword},{
        headers:{
          "Authorization" : `Bearer ${token}`
        },
        
      } )

      if (result.data.success) {
        console.log("Password Chnage");
      } else {
        console.log("Password change failed");
      }

    } catch (error) {
      console.log('An error occurred during the password change request.', error);
    }

  };
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="row">
              <EditBtnComponent/>
              <div className="panel-body">
                <div
                  className="tab-content profile-edit-tab"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade"
                    id="nav-edit-profile"
                    role="tabpanel"
                    aria-labelledby="nav-edit-profile-tab"
                    tabIndex={0}
                  >
                    {/* <form>
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
                              <span className="admin-name">
                                Mitchell C. Shay
                              </span>
                              <span className="admin-role">
                                Graphic Designer
                              </span>
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
                    </form> */}
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
                              <i class="fa-solid fa-lock"></i>
                              </span>
                              <input
                                 type={showCurrentPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Current Password"
                                onChange={(e) => setCurrentPassword(e.target.value)}
                              />
                              <span
                                className="input-group-text show-pass"
                                onClick={()=>handleTogglePasswordVisibility("current")}
                              >
                                {showCurrentPassword ? (
                                  <i class="fa-solid fa-eye"></i>
                                ) : (
                                  <i className="fa-solid fa-eye-slash" />
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="input-group">
                              <span className="input-group-text">
                              <i class="fa-solid fa-lock"></i>
                              </span>
                              <input
                                 type={showNewPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="New Password"
                                onChange={(e) => setNewPassword(e.target.value)}
                              />
                              <span
                                className="input-group-text show-pass"
                                onClick={() => handleTogglePasswordVisibility("new")}
                              >
                                {showNewPassword ? (
                                  <i class="fa-solid fa-eye"></i>
                                ) : (
                                  <i className="fa-solid fa-eye-slash" />
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="input-group">
                              <span className="input-group-text">
                              <i class="fa-solid fa-lock"></i>
                              </span>
                              <input
                                 type={showConfirmPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                              />
                              <span
                                className="input-group-text show-pass"
                                onClick={() => handleTogglePasswordVisibility("confirm")}
                              >
                                {showConfirmPassword ? (
                                  <i class="fa-solid fa-eye"></i>
                                ) : (
                                  <i className="fa-solid fa-eye-slash" />
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={handleChangePassword}>
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
    </>
  );
};

export default ChangePassword;
