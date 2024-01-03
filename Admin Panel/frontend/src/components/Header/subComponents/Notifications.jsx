import React, { useState } from "react";

const Notifications = () => {
  const [isNotificationShow, setIsNotificationShow] = useState(false);

  return (
    <>
      <div
        className={isNotificationShow ? "nav-link show" : "nav-link"}
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
                <div className="media me-2 media-info"> KG </div>
                <div className="media-body">
                  <h6 className="mb-1">Reports created successfully</h6>
                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <a className="all-notification" href="#">
          See all notifications
          <i className="ti-arrow-end" />
        </a>
      </div>
    </>
  );
};

export default Notifications;
