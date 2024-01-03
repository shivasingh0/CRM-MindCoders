import React, { useState } from "react";

const Emails = () => {
  const [isEmailsShow, setIsEmailsShow] = useState(false);

  return (
    <>
      <div
        className={isEmailsShow ? "nav-link show" : "nav-link"}
        role="button"
        data-bs-toggle="dropdown"
        onClick={() => {
            setIsEmailsShow(!isEmailsShow);
        }}
      >
        <i class="fa-solid fa-envelope fa-lg"></i>
      </div>
      <div
      style={{marginLeft:"120px"}}
        className={
            isEmailsShow
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
                  <h6 className="mb-1">No Emails Found</h6>
                  <small className="d-block">03 Jan 2024 - 02:26 PM</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <a className="all-notification" href="#">
          See all emails
          <i className="ti-arrow-end" />
        </a>
      </div>
    </>
  );
};

export default Emails;
