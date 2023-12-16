import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ fullscreenHandle }) => {
  const [isNotificationShow, setIsNotificationShow] = useState(false);
  const [isProfileShow, setIsProfileShow] = useState(false);
  const Navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(
    !!document.fullscreenElement
  );

  const handleFullscreenToggle = () => {
    if (isFullScreen) {
      fullscreenHandle.exit();
      document.removeEventListener("fullscreenchange", () => {
        setIsFullScreen(!!document.fullscreenElement);
      });
    } else {
      fullscreenHandle.enter();
      document.addEventListener("fullscreenchange", () => {
        setIsFullScreen(!!document.fullscreenElement);
      });
    }
    setIsFullScreen(!isFullScreen);
  };

  const Login = () => {
    localStorage.removeItem("user");
    Navigate("/login");
  };

  return (
    <>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <h2 className="crm-heading"> CRM </h2>
                <div className="dashboard_bar"> 11/04/2023 03:20 PM </div>
              </div>
              <div className="navbar-nav header-right">
                <div className="nav-item d-flex align-items-center">
                  <ul className="d-flex">
                    <li className="nav-item dropdown notification_dropdown">
                      <div
                        className={
                          isNotificationShow ? "nav-link show" : "nav-link"
                        }
                        role="button"
                        data-bs-toggle="dropdown"
                        onClick={() => {
                          setIsNotificationShow(!isNotificationShow);
                        }}
                      >
                        <i class="fa-solid fa-bell fa-lg"></i>
                      </div>
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
                        <a className="all-notification" href="/#">
                          See all notifications <i className="ti-arrow-end" />
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown notification_dropdown">
                      <div className="nav-link bell-link" role="button">
                        <i class="fa-solid fa-envelope fa-lg"></i>
                      </div>
                    </li>
                    <li className="nav-item dropdown notification_dropdown">
                      <div className="nav-link bell-link" role="button">
                        {/* <i class={ isFullScreen ? "fa-solid fa-expand" title="Fullscreen" : ></i> */}
                        <i
                          class={
                            isFullScreen
                              ? "fa-solid fa-compress"
                              : "fa-solid fa-expand"
                          }
                          onClick={handleFullscreenToggle}
                        ></i>
                      </div>
                    </li>
                  </ul>
                  <ul>
                    <li className="nav-item dropdown header-profile">
                      <Link
                        className={isProfileShow ? "nav-link show" : "nav-link"}
                        // to=""
                        role="button"
                        data-bs-toggle="dropdown"
                        onClick={() => setIsProfileShow(!isProfileShow)}
                      >
                        <img src="images/profile.png" width={20} alt="" />
                      </Link>
                      <div
                        className={
                          isProfileShow
                            ? "dropdown-menu dropdown-menu-end show"
                            : "dropdown-menu dropdown-menu-end"
                        }
                        data-bs-popper={isProfileShow ? "none" : ""}
                      >
                        <Link to="/profile" className="dropdown-item ai-icon">
                          <i class="fa-regular fa-user"></i>
                          <span className="ms-2">Profile </span>
                        </Link>
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
