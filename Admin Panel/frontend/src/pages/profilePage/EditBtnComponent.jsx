import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const EditBtnComponent = () => {
  const location = useLocation();
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  useEffect(() => {
    setIsActiveBtn(
      location.pathname === "/profile" ||
        location.pathname === "/profile/editprofile" ||
        location.pathname === "/profile/changepassword"
    );
  }, [location.pathname]);

  return (
    <>
      <div className=" widget-heading d-flex justify-content-between align-items-center">
        <div className="panel-header">
          <nav>
            <div
              className="btn-box d-flex flex-wrap gap-1"
              id="nav-tab"
              role="tablist"
            >
              <Link to="/profile">
                <button
                  className={classNames("btn btn-sm btn-outline-primary", {
                    active: isActiveBtn && location.pathname === "/profile",
                  })}
                  type="button"
                >
                  My Profile
                </button>
              </Link>
              <Link to="/profile/editprofile">
                <button
                  className={classNames("btn btn-sm btn-outline-primary", {
                    active:
                      isActiveBtn &&
                      location.pathname === "/profile/editprofile",
                  })}
                  type="button"
                >
                  Edit Profile
                </button>
              </Link>
              <Link to="/profile/changepassword">
                <button
                  className={classNames("btn btn-sm btn-outline-primary", {
                    active:
                      isActiveBtn &&
                      location.pathname === "/profile/changepassword",
                  })}
                  type="button"
                >
                  Change Password
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default EditBtnComponent;
