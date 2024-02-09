import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { axiosClient } from "../../../webServices/Getway";
import { webURLs } from "../../../webServices/WebURLs";
import { toast } from "react-toastify";
import { saveAlert } from "../../alerts/saveAlert";
import DateTime from "../../dateTime/DateTime";
import { getToken } from "../../../helpers/Helpers";



const AddEnquiries = (props) => {

  const initialFormState = {
    fullName: "",
    email: "",
    mobile: "",
    college_name: "",
    qualification: "",
    course: "",
    city: "",
    batch_year: "",
    alternative_No: "",
    counselors: "",
    priority: "",
    lead_status: "",
    final_price: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // Add Enquiry API Integration
  const addEnquery = async (e) => {
    // e.preventDefault();

    try {
      
      let result = await axiosClient.post(webURLs.ADD_STUDENT, formData);

      if (result.data.status) {
        localStorage.setItem("fullName", formData.fullName);
        document.getElementById("close").click();
        toast.success("Enquiry added", {
          position: toast.POSITION.TOP_CENTER,
        });
        // await saveAlert();
      } else {
        toast.error("Enter valid details", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Enquiry failed:", error);
      toast.error("Failed. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // update state
  const updateState = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(()=>{
    addEnquery()
  },[])

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
            <h5 className="text-white">Add New Enquery</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="modal-body">
            <div className="widget-heading d-flex justify-content-between align-items-center">
              {/* <h5 /> */}
              <div>
                <h5>
                  <DateTime />
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
                    value={formData.qualification}
                    name="qualification"
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
                    <option >Frontend Development</option>
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
                {/* <div className="col-md-4 mb-2 mt-2">
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
                </div> */}
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
              <div
                type="submit"
                className="mt-4 btn btn-secondary"
                onClick={addEnquery}
              >
                <i className="bi-binoculars-fill" /> Save Student Details
              </div>
            </form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button id="close" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default AddEnquiries;
