import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddNewCourse = () => {
  const Navigate = useNavigate()

  const saveCourse = () => {
    Navigate('/courses')
  }

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h4>Add New Course Details </h4>
          </div>
          <div className="card-body">
            <form className="row">
              <div className="col-md-4 mb-2">
                <label className="mb-1  mt-2">
                  <strong>Course Name*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="student name"
                />
              </div>
              <div className="col-md-4 mb-2">
                <label className="mt-3">
                  <strong>Course Name*</strong>
                </label>
                <select className='default-select  form-control wide'>
                  <option value="">-Choose course category-</option>
                  <option value="">Frontend</option>
                  <option value="">Backend</option>
                  <option value="">Full Stack</option>
                  <option value="">Data Analytics</option>
                  <option value="">Data Science</option>
                  <option value="">Digital Marketing</option>
                </select>
                {/* <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="student name"
                /> */}
              </div>

              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Price*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Course Price"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Faculty Name*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Faculty Name"
                />
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <label className="mb-1">
                  <strong>Course Added by*</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="Course Added by"
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={saveCourse}
                >
                  <i className="bi-binoculars-fill" /> Save Details
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="card">
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
                    <option>Frontend Development Course</option>
                    <option>Backend Development Course</option>
                    <option>React JS Course</option>
                    <option>MERN Stack Course</option>
                    <option>Data Analytics Course</option>
                    <option>Data Science Course</option>
                    <option>Digital Marketing Course</option>
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
                    <option>Net Banking</option>
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
                <button
                  type="submit"
                  className="btn btn-secondary"
                  // onClick={saveDetails}
                >
                  <i className="bi-binoculars-fill" /> Save Details
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default AddNewCourse