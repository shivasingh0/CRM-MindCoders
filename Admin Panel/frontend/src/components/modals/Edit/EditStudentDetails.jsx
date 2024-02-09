import React, { useEffect, useState } from "react";
import DateTime from "../../dateTime/DateTime";
import { Modal } from "react-bootstrap";

const EditStudentDetails = (props) => {
  const { customer } = props;
  // const [formData, setFormData] = useState(customer);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (customer) {
      setFormData(customer);
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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
            <h5 className="text-white">Update Student Details</h5>
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
                    value={formData?.fullName}
                    name="fullName"
                    onChange={handleChange}
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
                    value={formData?.mobile}
                    name="mobile"
                    onChange={handleChange}
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
                    value={formData?.alternative_No}
                    name="alternative_No"
                    onChange={handleChange}
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
                    value={formData?.email}
                    name="email"
                    onChange={handleChange}
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
                    value={formData?.city}
                    name="city"
                    onChange={handleChange}
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
                    value={formData?.college_name}
                    name="college_name"
                    onChange={handleChange}
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
                    value={formData?.qualification}
                    name="qualification"
                    onChange={handleChange}
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
                    value={formData?.batch_year}
                    name="batch_year"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Course Name*</strong>
                  </label>
                  <select
                    className="default-select  form-control wide"
                    value={formData?.course}
                    name="course"
                    onChange={handleChange}
                  >
                    <option>-Select Course-</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Data Science">Data Science</option>
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
                    // value={formData.priority}
                    name="priority"
                    // onChange={updateState}
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
                    // value={formData.lead_status}
                    name="lead_status"
                    // onChange={updateState}
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
                // onClick={addEnquery}
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

export default EditStudentDetails;
