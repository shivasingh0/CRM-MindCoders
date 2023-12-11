import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isNotificationShow, setIsNotificationShow] = useState(false);
  const [isProfileShow, setIsProfileShow] = useState(false);
  const Navigate = useNavigate();

  const Login = () => {
    localStorage.removeItem('user')
    Navigate('/login')
  }

  return (
    <>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar"> 11/04/2023 03:20 PM </div>
              </div>
              <div className="navbar-nav header-right">
                <div className="nav-item d-flex align-items-center">
                  {/* <div className="input-group search-area mr-2">
                    <span className="input-group-text">
                      <a href="javascript:void(0)">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                            fill="var(--secondary)"
                          />
                        </svg>
                      </a>
                    </span>
                     <input
                      type="text"
                      className="form-control"
                      placeholder="Search here..."
                    /> 
                  </div> */}
                  <ul className="d-flex">
                      <li className="nav-item dropdown notification_dropdown">
                        <a
                          className={
                            isNotificationShow ? "nav-link show" : "nav-link"
                          }
                          href="/#"
                          role="button"
                          data-bs-toggle="dropdown"
                          onClick={() => {
                            setIsNotificationShow(!isNotificationShow);
                          }}
                        >
                          <i class="fa-solid fa-bell fa-lg"></i>
                        </a>
                        <div
                          className={
                            isNotificationShow
                              ? "dropdown-menu dropdown-menu-end show"
                              : "dropdown-menu dropdown-menu-end"
                          }
                        >
                          <div
                            id="DZ_W_Notification1"
                            className="widget-media dlab-scroll p-4"
                            style={{ height: 380 }}
                          >
                            <ul className="timeline">
                              <li>
                                <div className="timeline-panel">
                                  <div className="media me-2 media-info">
                                    {" "}
                                    KG{" "}
                                  </div>
                                  <div className="media-body">
                                    <h6 className="mb-1">
                                      Resport created successfully
                                    </h6>
                                    <small className="d-block">
                                      29 July 2020 - 02:26 PM
                                    </small>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <a
                            className="all-notification"
                            href="/#"
                          >
                            See all notifications <i className="ti-arrow-end" />
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown notification_dropdown">
                        <a  href="/#"
                          className="nav-link bell-link "
                        >
                          
                          <i class="fa-solid fa-envelope fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                  <ul>
                    <li className="nav-item dropdown header-profile">
                      <a
                        className={isProfileShow ? "nav-link show" : "nav-link"}
                        href="/#"
                        role="button"
                        data-bs-toggle="dropdown"
                        onClick={()=>setIsProfileShow(!isProfileShow)}
                      >
                        <img src="images/profile.png" width={20} alt="" />
                      </a>
                      <div className={isProfileShow ? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end"} data-bs-popper= {isProfileShow ? "none" : ""}>
                        <a
                          href="./app-profile.html"
                          className="dropdown-item ai-icon"
                        >
                          <i class="fa-regular fa-user"></i>
                          <span className="ms-2">Profile </span>
                        </a>
                        <a
                          href="subscription.html"
                          className="dropdown-item ai-icon"
                        >
                          <i className="bi-cast text-secondary" />
                          <span className="ms-2">My Subscription </span>
                        </a>
                        <Link
                          to="/login"
                          className="dropdown-item ai-icon"
                          onClick={Login}
                        >
                          <i className="bi bi-box-arrow-right text-danger" />
                          <span className="ms-2">Logout </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <div className="dlab-side-menu">
                  <div className="search-coundry d-flex align-items-center"></div>
                  <div className="sidebar-social-link ">
                    
                  </div>
                  
                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
