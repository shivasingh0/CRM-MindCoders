import React from "react";
import { useNavigate } from "react-router-dom";

const NewAdmission = () => {

  const Navigate = useNavigate()

  const saveDetails = () => {
    Navigate('/admissions')
  }

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h4>Student Personal Details </h4>
          </div>
          <div className="card-body">
            <form className="row">
              <div className="col-md-4 mb-2">
                <label className="mb-1  mt-2">
                  <strong>Name of the Candidate*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="student name"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-2 mt-2">
                  <strong>Gender*</strong>
                </label>
                <select className="default-select  form-control wide">
                  <option disabled="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Date of Birth*</strong>
                </label>
                <input
                  type="number"
                  className="form-control mt-10"
                  placeholder="DD-MM-YYYY"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Mobile Number*</strong>
                </label>
                <input
                  type="number"
                  className="form-control mt-10"
                  placeholder="+91 | Mobile Number"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Email Id*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="email id"
                />
              </div>
              <div className="col-md-4 mb-2">
                <label className="mb-1  mt-2">
                  <strong>Father's Name*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Father's name"
                />
              </div>
              <div className="col-md-4 mb-2">
                <label className="mb-1  mt-2">
                  <strong>Mother's Name*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Mother's name"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Parent's Mobile Number*</strong>
                </label>
                <input
                  type="number"
                  className="form-control mt-10"
                  placeholder="+91 | Mobile Number"
                />
              </div>
              <div className="col-md-4 mb-2">
                <label className="mb-1  mt-2">
                  <strong>Father's Occupation*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="father's occupation"
                />
              </div>
              <div className="col-md-4 mb-2">
                <label className="mb-1  mt-2">
                  <strong>Academic Qualification*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="qualification"
                />
              </div>
              <div className="col-md-4 mb-2">
                <label className="mb-1  mt-2">
                  <strong>Year of Passing*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="passing year"
                />
              </div>
              <div className="col-md-4 mb-2">
                <label className="mb-1  mt-2">
                  <strong>Marks Obtained*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="marks"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>City name</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="city name"
                />
              </div>
              <div className="col-md-8 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Full Address*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="full address"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Source of Admission</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="source name"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Referral Person Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="person name"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="form-label" htmlFor="customFile">
                  Upload Photo
                </label>
                <input type="file" className="form-control" id="customFile" />
              </div>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>Course FEE Details </h4>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-4 mb-2 mt-2">
                  <label className="mb-2 mt-2">
                    <strong>Mention the Course You Wish to Join*</strong>
                  </label>
                  <select className="default-select  form-control wide">
                    <option disabled="">Select Course</option>
                    <option>MPPSC MAINS Hindi Medium</option>
                    <option>MPPSC MAINS English Medium</option>
                    <option>MPPSC Prelims Bilingual</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Course Fees</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="INR.75000"
                    defaultValue="INR.75000"
                    disabled=""
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Discount(%)</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="discount %"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Discount Amount</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="discount amount"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Payable Amount</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="payable amount"
                    defaultValue="Rs.75000"
                    disabled=""
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-2 mt-2">
                    <strong>Payment Mode*</strong>
                  </label>
                  <select className="default-select mt-2  form-control wide">
                    <option disabled="">Select Mode</option>
                    <option>UPI Payment</option>
                    <option>Cash</option>
                    <option>Cheque</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Transaction No./Cheque No.</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="enter number"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Bank Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="enter number"
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="mb-1  mt-2">
                    <strong>Recieved Amount</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="enter recieved amount"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-secondary" onClick={saveDetails}>
                  <i className="bi-binoculars-fill" /> Save Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAdmission;
