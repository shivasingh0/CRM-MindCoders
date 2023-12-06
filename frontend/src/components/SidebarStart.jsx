import React from "react";
import { Link } from "react-router-dom";

const SidebarStart = () => {
  return (
    <>
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <ul className="metismenu" id="menu">
            <li className="mm-active">
              <Link to="/" aria-expanded="false">
                <i className="bi bi-grid" />
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-divider ng-scope mt-10 text-th" translate="">
              Student Management
            </li>
            <li className="mt-10">
              <Link to="/enquiries" aria-expanded="false">
                <i className="bi-person-lines-fill" />
                <span className="nav-text"> Enquiries</span>
              </Link>
            </li>
            <li>
              <Link to="/admissions" aria-expanded="false">
                <i className="bi-binoculars-fill" />
                <span className="nav-text">Admissions</span>
              </Link>
            </li>
            <li className="nav-divider ng-scope mt-10 text-th" translate="">
              Billing &amp; Invoices
            </li>
            <li className="mt-10">
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
            </li>
            <li className="nav-divider ng-scope text-th mt-10" translate="">
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
            </li>
            <li className="nav-divider ng-scope text-th" translate="">
              More
            </li>
            <li>
              <Link to="support.html" aria-expanded="false">
                <i className="bi-info-square" />
                <span className="nav-text">Help &amp; Support</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarStart;
