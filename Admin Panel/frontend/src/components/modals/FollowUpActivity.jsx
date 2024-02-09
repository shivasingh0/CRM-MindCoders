import React from "react";
import { Modal } from "react-bootstrap";
import { dateFormat } from "../../helpers/Helpers";

const FollowUpActivity = (props) => {
  const { customer } = props;

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
            <h5 className="text-white">Add New Enquiry</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="card-body">
            <div className="widget-heading d-flex justify-content-between align-items-center">
              <h5>Student Name</h5>
              <div>
                <h5>
                  <i className="bi-calendar2-event" />
                  {dateFormat(customer?.createdAt)}
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
                    <option value=""> {customer?.lead_status} </option>
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
                          {customer?.lead_status}
                        </button>
                        Student is interested but need to some time. Next Call:
                        20/05/2023
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
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          <div type="submit" class="mt-4 btn btn-secondary">
            <i class="bi-binoculars-fill"></i> Add Followup message
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FollowUpActivity;
