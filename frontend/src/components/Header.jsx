import React from 'react'

const Header = () => {
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
                                    <div className="input-group search-area mr-2">
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
                                    </div>
                                </div>
                                <div className="dlab-side-menu">
                                    <div className="search-coundry d-flex align-items-center"></div>
                                    <div className="sidebar-social-link ">
                                        <ul>
                                            <li className="nav-item dropdown notification_dropdown">
                                                <a
                                                    className="nav-link"
                                                    href="javascript:void(0);"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <svg
                                                        width={24}
                                                        height={23}
                                                        viewBox="0 0 24 23"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M18.7071 8.56414C18.7071 9.74035 19.039 10.4336 19.7695 11.2325C20.3231 11.8211 20.5 12.5766 20.5 13.3963C20.5 14.215 20.2128 14.9923 19.6373 15.6233C18.884 16.3798 17.8215 16.8627 16.7372 16.9466C15.1659 17.0721 13.5937 17.1777 12.0005 17.1777C10.4063 17.1777 8.83505 17.1145 7.26375 16.9466C6.17846 16.8627 5.11602 16.3798 4.36367 15.6233C3.78822 14.9923 3.5 14.215 3.5 13.3963C3.5 12.5766 3.6779 11.8211 4.23049 11.2325C4.98384 10.4336 5.29392 9.74035 5.29392 8.56414V8.16515C5.29392 6.58996 5.71333 5.55995 6.577 4.55164C7.86106 3.08114 9.91935 2.19922 11.9558 2.19922H12.0452C14.1254 2.19922 16.2502 3.12359 17.5125 4.65728C18.3314 5.64484 18.7071 6.63146 18.7071 8.16515V8.56414ZM9.07367 19.1136C9.07367 18.642 9.53582 18.426 9.96318 18.3336C10.4631 18.2345 13.5093 18.2345 14.0092 18.3336C14.4366 18.426 14.8987 18.642 14.8987 19.1136C14.8738 19.5626 14.5926 19.9606 14.204 20.2134C13.7001 20.5813 13.1088 20.8143 12.4906 20.8982C12.1487 20.9397 11.8128 20.9407 11.4828 20.8982C10.8636 20.8143 10.2723 20.5813 9.76938 20.2125C9.37978 19.9606 9.09852 19.5626 9.07367 19.1136Z"
                                                            fill="#130F26"
                                                        />
                                                    </svg>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <div
                                                        id="DZ_W_Notification1"
                                                        className="widget-media dlab-scroll p-4"
                                                        style={{ height: 380 }}
                                                    >
                                                        <ul className="timeline">
                                                            <li>
                                                                <div className="timeline-panel">
                                                                    <div className="media me-2 media-info"> KG </div>
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
                                                    <a className="all-notification" href="javascript:void(0);">
                                                        See all notifications <i className="ti-arrow-end" />
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown notification_dropdown">
                                                <a className="nav-link bell-link " href="javascript:void(0);">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.9394 3.57129C18.2804 3.57129 19.5704 4.06765 20.5194 4.95828C21.4694 5.84704 22.0004 7.04579 22.0004 8.30073V15.6993C22.0004 18.3122 19.7304 20.4287 16.9394 20.4287H7.0604C4.2694 20.4287 2.0004 18.3122 2.0004 15.6993V8.30073C2.0004 5.68783 4.2594 3.57129 7.0604 3.57129H16.9394ZM18.5304 9.69615L18.6104 9.62123C18.8494 9.34964 18.8494 8.9563 18.5994 8.68471C18.4604 8.54517 18.2694 8.45994 18.0704 8.44121C17.8604 8.43091 17.6604 8.4974 17.5094 8.62852L13.0004 12C12.4204 12.4505 11.5894 12.4505 11.0004 12L6.5004 8.62852C6.1894 8.41312 5.7594 8.44121 5.5004 8.69407C5.2304 8.94693 5.2004 9.34964 5.4294 9.6306L5.5604 9.75234L10.1104 13.077C10.6704 13.4891 11.3494 13.7138 12.0604 13.7138C12.7694 13.7138 13.4604 13.4891 14.0194 13.077L18.5304 9.69615Z"
                                                            fill="#130F26"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul>
                                        <li className="nav-item dropdown header-profile mt-2">
                                            <a
                                                className="nav-link"
                                                href="javascript:void(0);"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                            >
                                                <img src="images/profile.png" width={20} alt="" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a
                                                    href="./app-profile.html"
                                                    className="dropdown-item ai-icon"
                                                >
                                                    <svg
                                                        id="icon-user2"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-secondary"
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx={12} cy={7} r={4} />
                                                    </svg>
                                                    <span className="ms-2">Profile </span>
                                                </a>
                                                <a href="subscription.html" className="dropdown-item ai-icon">
                                                    <i className="bi-cast text-secondary" />
                                                    <span className="ms-2">My Subscription </span>
                                                </a>
                                                <a href="./login.html" className="dropdown-item ai-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-danger"
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                        <polyline points="16 17 21 12 16 7" />
                                                        <line x1={21} y1={12} x2={9} y2={12} />
                                                    </svg>
                                                    <span className="ms-2">Logout </span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Header