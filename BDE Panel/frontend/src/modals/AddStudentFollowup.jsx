import React from "react";

const AddStudentFollowup = () => {
  return (
    <>
      <div className="modal fade" id="followup">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header gradient-5">
              <h4 className="text-white"> Add Followup Activity</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="card-body">
              <div className="widget-heading d-flex justify-content-between align-items-center">
                <h5>Student Name</h5>
                <div>
                  <h5>
                    <i className="bi-calendar2-event" /> Enquiry Date:
                    12/03/2023 03:43 PM
                  </h5>
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-3 mb-2 mt-2">
                    <label className="mb-2 mt-2">
                      <strong>Lead Status*</strong>
                    </label>
                    <select className="default-select  form-control wide">
                      <option disabled="">Select Status</option>
                      <option>Interested</option>
                      <option>Call Back</option>
                      <option>Not Interested</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-2">
                    <label className="mb-1  mt-2">
                      <strong>Next Call*</strong>
                    </label>
                    <input
                      type="date"
                      className="form-control mt-10"
                      placeholder="qualification"
                    />
                  </div>
                  <div className="col-md-6 mb-2 mt-2">
                    <label className="mb-1">
                      <strong>Followup Massage</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control mt-10"
                      placeholder=" followup massage"
                    />
                  </div>
                </div>
              </form>
              <div id="DZ_W_TimeLine11" className="widget-timeline style-3 p-3">
                <h4 className="mt-3">Followup Activity</h4>
                <ul className="timeline-active">
                  <li className="d-flex align-items-baseline">
                    <h4 className="font-w400 time">12/05/2023</h4>
                    <div className="panel">
                      <a
                        className="timeline-panel text-muted d-flex align-items-center"
                        href="#"
                      >
                        <h4 className="mb-0">
                          <button className="btn btn-secondary mr-2">
                            Interested{" "}
                          </button>
                          Student is interested but need to some time. Next
                          Call: 20/05/2023
                        </h4>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-baseline">
                    <h4 className="font-w400 time">12/05/2023</h4>
                    <div className="panel">
                      <a
                        className="timeline-panel text-muted d-flex align-items-center"
                        href="#"
                      >
                        <h4 className="mb-0">
                          <button className="btn btn-info mr-2">
                            Call back{" "}
                          </button>{" "}
                          Student is not interested.
                        </h4>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudentFollowup;
