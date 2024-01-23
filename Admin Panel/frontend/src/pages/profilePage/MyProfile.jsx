import React, { useEffect, useState } from "react";
import EditBtnComponent from "./EditBtnComponent";

const MyProfile = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    if (userDetails) {
      setUserData(userDetails.data);
    }
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="row">
              <EditBtnComponent />
              <div className="d-flex gap-4">
                <div className="col-md-4">
                  <div className="panel profile-card">
                    <div className="panel-body">
                      <div className="profile-sidebar">
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="profile-sidebar-title">
                            User Information
                          </h4>
                        </div>
                        <div className="top">
                          <div className="image-wrap">
                            <div className="part-img rounded-circle overflow-hidden">
                              <img
                                src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
                                alt="admin"
                              />
                            </div>
                          </div>
                          <div className="part-txt">
                            <h3 className="admin-name">{userData?.fullName}</h3>
                            <h5 className="admin-role">{userData?.role}</h5>
                          </div>
                        </div>
                        <div className="bottom">
                          {" "}
                          <hr />
                          <h6 className="profile-sidebar-subtitle">
                            Communication Info
                          </h6>
                          <ul>
                            <li>
                              <span>Full Name : </span>
                              {userData?.fullName}
                            </li>
                            <li>
                              <span>Mobile : </span>(+91){userData?.mobile}
                            </li>
                            <li>
                              <span>Mail : </span>
                              {userData?.email}
                            </li>
                            <li>
                              <span>Address : </span>
                              {userData?.address}
                            </li>
                            {/* <li>
                              <span>Joining Date : </span>24 Nov 2022
                            </li> */}
                          </ul>
                          <h6 className="profile-sidebar-subtitle">About Me</h6>
                          <p>
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-card profile-card-block">
                  <div className="profile-card-body">
                    <h5 className="mb-2 mt-4">Personal Skills</h5>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3">
                        <i class="fa-regular fa-circle-check fa-xl text-primary mr-2"></i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li className="mb-3">
                        <i class="fa-regular fa-circle-check fa-xl text-primary mr-2"></i>
                        Aliquam ultrices tellus in auctor blandit.
                      </li>
                      <li className="mb-3">
                        <i class="fa-regular fa-circle-check fa-xl text-primary mr-2"></i>
                        Etiam tincidunt erat non ante sagittis bibendum.
                      </li>
                      <li className="mb-3">
                        <i class="fa-regular fa-circle-check fa-xl text-primary mr-2"></i>
                        Nunc malesuada massa ut nisl sollicitudin semper.
                      </li>
                      <li>
                        <i class="fa-solid fa-circle-check fa-xl text-primary mr-2"></i>
                        Fusce et arcu in dui feugiat finibus.
                      </li>
                    </ul>
                    <h5 className="mb-2 mt-4">Professional Skills</h5>
                    <div className="iq-progress-bar-linear d-inline-block w-100 mb-3">
                      <span>PHP</span>
                      <span className="float-right">90%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="iq-progress-bar-linear d-inline-block w-100 mb-3">
                      <span>MySQl</span>
                      <span className="float-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="iq-progress-bar-linear d-inline-block w-100 mb-3">
                      <span>React</span>
                      <span className="float-right">65%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="iq-progress-bar-linear d-inline-block w-100 mb-3">
                      <span>Node Js</span>
                      <span className="float-right">70%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="iq-progress-bar-linear d-inline-block w-100">
                      <span>Angular Js</span>
                      <span className="float-right">55%</span>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
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

export default MyProfile;
