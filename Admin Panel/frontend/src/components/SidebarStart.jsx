import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarStart = () => {

  const Navigate = useNavigate()
  const location = useLocation();

  const login = () =>{
    localStorage.removeItem('user')
    Navigate("/login")
  }

  return (
    <>
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <ul className="metismenu" id="menu">
            {/* Dashboard start */}
            <li className={location.pathname === "/" ? "mm-active" : ""}>
              <Link to="/" aria-expanded="false">
                <i className="bi bi-grid text-color" />
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            {/* Dashboard end */}
            {/* Students Management start */}
            <li className="nav-divider ng-scope mt-10 text-th" translate="">
              <u>Student Management</u>
            </li>
            <li className={location.pathname === "/students" ? "mt-10 mm-active" : "mt-10"}>
              <Link to="/students" aria-expanded="false">
                <i className="bi-person-lines-fill text-color" />
                <span className="nav-text">Total Students</span>
              </Link>
            </li>
            <li className={location.pathname === "/enquiries" ? "mm-active" : ""}>
              <Link to="/enquiries" aria-expanded="false">
                <i className="bi-person-lines-fill text-color" />
                <span className="nav-text"> Enquiries</span>
              </Link>
            </li>
            <li className={location.pathname === "/admissions" ? "mm-active" : ""}>
              <Link to="/admissions" aria-expanded="false">
                <i className="bi-binoculars-fill text-color" />
                <span className="nav-text">Admissions</span>
              </Link>
            </li>
            {/* Students Management end */}
            {/* Employees Management start */}
            <li className="nav-divider ng-scope mt-10 text-th" translate="">
            <u>Employees Management</u>
            </li>
            <li className={location.pathname === "/employees" ? "mt-10 mm-active" : "mt-10"}>
              <Link to="/employees" aria-expanded="false">
                <i className="bi-person-lines-fill text-color" />
                <span className="nav-text"> Total Employees</span>
              </Link>
            </li>
            <li className={location.pathname === "/teams" ? "mm-active" : ""}>
              <Link to="/teams" aria-expanded="false">
                <i className="bi-person-lines-fill text-color" />
                <span className="nav-text">Teams</span>
              </Link>
            </li>
            <li className={location.pathname === "/lead-distribution" ? "mm-active" : ""}>
              <Link to="/lead-distribution" aria-expanded="false">
                <i className="bi-person-lines-fill text-color" />
                <span className="nav-text">Lead Distribution</span>
              </Link>
            </li>
            {/* Employees Management end */}

            {/* <li className="mt-10">
              <Link to="/feescollection" aria-expanded="false">
                <i className="bi-calendar2-event" />
                <span className="nav-text">Fee collection</span>
              </Link>
            </li> 
            <li className="mt-10">
              <Link to="gst_reporting.html" aria-expanded="false">
                <i className="bi-wallet2" />
                <span className="nav-text">GST Reporting</span>
              </Link>
            </li>
            <li className="mt-10">
              <Link to="cash_deposite.html" aria-expanded="false">
                <i className="bi-cash-stack" />
                <span className="nav-text">Cash Deposite</span>
              </Link>
            </li> */}

            {/* <li className="nav-divider ng-scope text-th mt-10" translate="">
              Teacher Management
            </li>
            <li className="mt-10">
              <Link to="/teachecreation" aria-expanded="false">
                <i className="bi-cast" />
                <span className="nav-text">Teacher Creation</span>
              </Link>
            </li>
            <li>
              <Link to="performance_report.html" aria-expanded="false">
                <i className="bi bi-calendar2-event" />
                <span className="nav-text">Performance report</span>
              </Link>
            </li>
            <li>
              <Link to="staff_attendance.html" aria-expanded="false">
                <i className="bi bi-book-half" />
                <span className="nav-text">Staff Attendance</span>
              </Link>
            </li>
            <li className="nav-divider ng-scope mt-10 text-th" translate="">
              Course
            </li>
            <li className="mt-10">
              <Link to="/addcourses" aria-expanded="false">
                <i className="bi-journals" />
                <span className="nav-text">Course Creation</span>
              </Link>
            </li>
            <li>
              <Link to="batches.html" aria-expanded="false">
                <i className="bi-earbuds" />
                <span className="nav-text">Batches</span>
              </Link>
            </li>
            <li>
              <Link to="fees.html" aria-expanded="false">
                <i className="bi-bag-plus-fill" />
                <span className="nav-text">Course Fees</span>
              </Link>
            </li> */}
            <li className="nav-divider ng-scope text-th" translate="">
              More
            </li>
            <li className={location.pathname === "/support" ? "mt-10 mm-active" : "mt-10"}>
              <Link to="/support" aria-expanded="false">
                <i className="bi-info-square text-color" />
                <span className="nav-text">Help &amp; Support</span>
              </Link>
            </li>
            <li className={location.pathname === "/setting" ? "mm-active" : ""}>
              <Link to="/setting" aria-expanded="false">
                <i className="bi bi-gear-wide-connected text-color" />
                <span className="nav-text">Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/login" aria-expanded="false" onClick={login}>
              <i className="bi bi-box-arrow-right text-danger" />
                <span className="nav-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarStart;
