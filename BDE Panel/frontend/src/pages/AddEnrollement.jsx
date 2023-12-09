import React from 'react'

const AddEnrollement = () => {
    return (
        <>
            <>
                <div classname="container-fluid">
                    <div classname="card">
                        <div classname="card-header">
                            <h4>Student Personal Details </h4>
                        </div>
                        <div classname="card-body">
                            <form classname="row">
                                <div classname="col-md-4 mb-2">
                                    <label classname="mb-1  mt-2">
                                        <strong>Name of the Candidate*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="student name"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2 mt-2">
                                    <label classname="mb-2 mt-2">
                                        <strong>Gender*</strong>
                                    </label>
                                    <select classname="default-select  form-control wide">
                                        <option disabled="">Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div classname="col-md-4 mb-2 mt-2">
                                    <label classname="mb-1">
                                        <strong>Date of Birth*</strong>
                                    </label>
                                    <input
                                        type="number"
                                        classname="form-control mt-10"
                                        placeholder="DD-MM-YYYY"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2 mt-2">
                                    <label classname="mb-1">
                                        <strong>Mobile Number*</strong>
                                    </label>
                                    <input
                                        type="number"
                                        classname="form-control mt-10"
                                        placeholder="+91 | Mobile Number"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2 mt-2">
                                    <label classname="mb-1">
                                        <strong>Email Id*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="email id"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2">
                                    <label classname="mb-1  mt-2">
                                        <strong>Father's Name*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="Father's name"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2">
                                    <label classname="mb-1  mt-2">
                                        <strong>Mother's Name*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="Mother's name"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2 mt-2">
                                    <label classname="mb-1">
                                        <strong>Parent's Mobile Number*</strong>
                                    </label>
                                    <input
                                        type="number"
                                        classname="form-control mt-10"
                                        placeholder="+91 | Mobile Number"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2">
                                    <label classname="mb-1  mt-2">
                                        <strong>Father's Occupation*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="father's occupation"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2">
                                    <label classname="mb-1  mt-2">
                                        <strong>Academic Qualification*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="qualification"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2">
                                    <label classname="mb-1  mt-2">
                                        <strong>Year of Passing*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="passing year"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2">
                                    <label classname="mb-1  mt-2">
                                        <strong>Marks Obtained*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="marks"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2 mt-2">
                                    <label classname="mb-1">
                                        <strong>City name</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="city name"
                                    />
                                </div>
                                <div classname="col-md-8 mb-2 mt-2">
                                    <label classname="mb-1">
                                        <strong>Full Address*</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="full address"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2 mt-2">
                                    <label classname="mb-1">
                                        <strong>Source of Admission</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="source name"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2 mt-2">
                                    <label classname="mb-1">
                                        <strong>Referral Person Name</strong>
                                    </label>
                                    <input
                                        type="text"
                                        classname="form-control mt-10"
                                        placeholder="person name"
                                    />
                                </div>
                                <div classname="col-md-4 mb-2 mt-2">
                                    <label classname="form-label" htmlfor="customFile">
                                        Upload Photo
                                    </label>
                                    <input type="file" classname="form-control" id="customFile" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div classname="card">
                        <div classname="card-header">
                            <h4>Course FEE Details </h4>
                        </div>
                        <div classname="card-body">
                            <form>
                                <div classname="row">
                                    <div classname="col-md-4 mb-2 mt-2">
                                        <label classname="mb-2 mt-2">
                                            <strong>Mention the Course You Wish to Join*</strong>
                                        </label>
                                        <select classname="default-select  form-control wide">
                                            <option disabled="">Select Course</option>
                                            <option>MPPSC MAINS Hindi Medium</option>
                                            <option>MPPSC MAINS English Medium</option>
                                            <option>MPPSC Prelims Bilingual</option>
                                        </select>
                                    </div>
                                    <div classname="col-md-4 mb-2">
                                        <label classname="mb-1  mt-2">
                                            <strong>Course Fees</strong>
                                        </label>
                                        <input
                                            type="text"
                                            classname="form-control mt-10"
                                            placeholder="INR.75000"
                                            defaultvalue="INR.75000"
                                            disabled=""
                                        />
                                    </div>
                                    <div classname="col-md-4 mb-2">
                                        <label classname="mb-1  mt-2">
                                            <strong>Discount(%)</strong>
                                        </label>
                                        <input
                                            type="text"
                                            classname="form-control mt-10"
                                            placeholder="discount %"
                                        />
                                    </div>
                                    <div classname="col-md-4 mb-2">
                                        <label classname="mb-1  mt-2">
                                            <strong>Discount Amount</strong>
                                        </label>
                                        <input
                                            type="text"
                                            classname="form-control mt-10"
                                            placeholder="discount amount"
                                        />
                                    </div>
                                    <div classname="col-md-4 mb-2">
                                        <label classname="mb-1  mt-2">
                                            <strong>Payable Amount</strong>
                                        </label>
                                        <input
                                            type="text"
                                            classname="form-control mt-10"
                                            placeholder="payable amount"
                                            defaultvalue="Rs.75000"
                                            disabled=""
                                        />
                                    </div>
                                    <div classname="col-md-4 mb-2">
                                        <label classname="mb-2 mt-2">
                                            <strong>Payment Mode*</strong>
                                        </label>
                                        <select classname="default-select mt-2  form-control wide">
                                            <option disabled="">Select Mode</option>
                                            <option>UPI Payment</option>
                                            <option>Cash</option>
                                            <option>Cheque</option>
                                        </select>
                                    </div>
                                    <div classname="col-md-4 mb-2">
                                        <label classname="mb-1  mt-2">
                                            <strong>Transaction No./Cheque No.</strong>
                                        </label>
                                        <input
                                            type="text"
                                            classname="form-control mt-10"
                                            placeholder="enter number"
                                        />
                                    </div>
                                    <div classname="col-md-4 mb-2">
                                        <label classname="mb-1  mt-2">
                                            <strong>Bank Name</strong>
                                        </label>
                                        <input
                                            type="text"
                                            classname="form-control mt-10"
                                            placeholder="enter number"
                                        />
                                    </div>
                                    <div classname="col-md-4 mb-2">
                                        <label classname="mb-1  mt-2">
                                            <strong>Recieved Amount</strong>
                                        </label>
                                        <input
                                            type="text"
                                            classname="form-control mt-10"
                                            placeholder="enter recieved amount"
                                        />
                                    </div>
                                </div>
                                <div classname="mt-4">
                                    <button type="submit" classname="btn btn-secondary">
                                        <i classname="bi-binoculars-fill">
                                            {" "}
                                            Submit{"{"}" "{"}"}
                                        </i>
                                    </button>
                                    <i classname="bi-binoculars-fill"></i>
                                </div>
                                <i classname="bi-binoculars-fill"></i>
                            </form>
                        </div>
                        <i classname="bi-binoculars-fill"></i>
                    </div>
                    <i classname="bi-binoculars-fill"></i>
                </div>
                <i classname="bi-binoculars-fill"></i>
            </>

        </>
    )
}

export default AddEnrollement