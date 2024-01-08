import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import { showDialogThreeBtn } from "./sweetAlertUtil";
import { axiosClient } from "../../../webServices/Getway";
import { webURLs } from "../../../webServices/WebURLs";
import { toast } from "react-toastify";

const initialFormState = {
  fullName: "",
  email: "",
  mobile: "",
  college_name: "",
  course: "",
  city: "",
  batch_year: "",
  alternative_No: "",
  counselors: "",
  priority: "",
  lead_status: "",
  final_price: "",
};

const AddStudents = (props) => {
  const [formData, setFormData] = useState(initialFormState);

  // API Integration
  const addEnquery = async (e) => {
    e.preventDefault();

    // if (
    //   !formData.fullName ||
    //   !formData.email ||
    //   !formData.mobile ||
    //   !formData.college_name ||
    //   !formData.course ||
    //   !formData.city ||
    //   !formData.batch_year ||
    //   !formData.alternative_No ||
    //   !formData.counselors ||
    //   !formData.priority ||
    //   !formData.lead_status ||
    //   !formData.final_price
    // ) {
    //   // await showDialogThreeBtn();
    //   return;
    // }
    try {
      let userData = JSON.parse(localStorage.getItem("user"));
      let token = userData.data.token;
      let result = await axiosClient.post(webURLs.ADD_STUDENT, formData, {
        headers : {
          "Authorization" : `Bearer ${token}`,
          "Content-Type" : "application/json"
        }
      });

      if (result.data.status) {
        localStorage.setItem("fullName", formData.fullName);
        document.getElementById("close").click();
      } else {
        toast.error("Enter valid details", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // update state
  const updateState = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="gradient-5">
          <Modal.Header closeButton>
            <h5 className="text-white">Add New Student</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="modal-body">
            <div className="widget-heading d-flex justify-content-between align-items-center">
              {/* <h5 /> */}
              <div>
                <h5>
                  <i className="bi-calendar2-event" /> Date: 12/03/2023 03:43 PM
                </h5>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Name of the Candidate*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Student name"
                    value={formData.fullName}
                    name="fullName"
                    onChange={updateState}
                    required
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Mobile Number*</strong>
                  </label>
                  <input
                    type="tel"
                    className="form-control mt-10"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    name="mobile"
                    onChange={updateState}
                    required
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Alternate Mobile Number*</strong>
                  </label>
                  <input
                    type="tel"
                    className="form-control mt-10"
                    placeholder="Alternate Mobile Number"
                    value={formData.alternative_No}
                    name="alternative_No"
                    onChange={updateState}
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Email Id*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Email id"
                    value={formData.email}
                    name="email"
                    onChange={updateState}
                    required
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>City*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="City"
                    value={formData.city}
                    name="city"
                    onChange={updateState}
                    required
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>College Name*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="College"
                    value={formData.college_name}
                    name="college_name"
                    onChange={updateState}
                    required
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Academic Qualification*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Qualification"
                    value={formData.course}
                    name="course"
                    onChange={updateState}
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Year of Passing*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Passing year"
                    value={formData.batch_year}
                    name="batch_year"
                    onChange={updateState}
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Course Name*</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">-Select Course-</option>
                    <option>Frontend Development</option>
                    <option>Backend Development</option>
                    <option>MERN Stack</option>
                    <option>Digital Marketing</option>
                    <option>Data Analytics</option>
                    <option>Data Science</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Course Price</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Rs. 10000/-"
                    disabled
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Final Course Price</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Final Price"
                    value={formData.final_price}
                    name="final_price"
                    onChange={updateState}
                    required
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-1">
                    <strong>Referral Person Name*</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="Referral person name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="">
                    <strong>Counselor</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Counselor name"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-2">
                    <strong>Priority</strong>
                  </label>
                  <select
                    className="default-select form-control wide"
                    value={formData.priority}
                    name="priority"
                    onChange={updateState}
                    required
                  >
                    <option disabled="">-Select Status-</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                    <option>None</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-2">
                    <strong>Enquiry Status</strong>
                  </label>
                  <select
                    className="default-select form-control wide"
                    value={formData.lead_status}
                    name="lead_status"
                    onChange={updateState}
                    required
                  >
                    <option disabled="">-Select Status-</option>
                    <option>Interested</option>
                    <option>Call Back</option>
                    <option>Confused</option>
                    <option>Not Interested</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="enquiry.html"
                  type="submit"
                  className="btn btn-secondary"
                  onClick={addEnquery}
                >
                  <i className="bi-binoculars-fill" /> Save Student Details
                </a>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button id="close" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddStudents;
