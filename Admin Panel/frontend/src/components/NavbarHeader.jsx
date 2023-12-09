import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarHeader = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  function toggle() {
    setIsHamburgerActive(!isHamburgerActive);
    let ele = document.getElementById("main-wrapper");
    let cls = ele.className;
    // console.log(cls);
    if (cls === "show") {
      ele.classList.add("menu-toggle");
    } else {
      ele.classList.remove("menu-toggle");
    }
  }

  return (
    <>
      <div className="nav-header">
        <Link to="/" className="brand-logo">
          <img src="images/logo.webp" alt="img" />
        </Link>
        <div className="nav-control">
          <div
            className={isHamburgerActive ? "hamburger is-active" : "hamburger"}
            onClick={() => {
              toggle();
            }}
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarHeader;