import React from "react";
import { Button, Modal } from "react-bootstrap";

const ViewFee = (props) => {
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
            <h5 className="text-white">Payment History</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
        <div className="card-body">
              <div className="col-md-12">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex px-0 justify-content-between">
                    <span className="mb-0 text-secondary">
                      Mr. Pankaj Singh (IMGS01)
                    </span>
                    <span className="mb-0 text-secondary">
                      MPPSC MAINS (Pathshala Batch) : Rs.75000.00
                    </span>
                  </li>
                  <li className="list-group-item d-flex px-0 justify-content-between">
                    <span className="mb-0 text-secondary" />
                    <span className="mb-0 text-secondary">
                      Discount : - Rs.10000.00
                    </span>
                  </li>
                  <li className="list-group-item d-flex px-0 justify-content-between">
                    <span className="mb-0 text-secondary" />
                    <span className="mb-0 text-secondary">
                      Recieved Amount: Rs.35000.00
                    </span>
                  </li>
                  <li className="list-group-item d-flex px-0 justify-content-between">
                    <span className="mb-0 text-secondary" />
                    <span className="mb-0 text-danger">
                      Due Amount: Rs.30000.00
                    </span>
                  </li>
                </ul>
              </div>
              <div id="DZ_W_TimeLine11" className="widget-timeline style-3 p-3">
                <h4 className="mt-3">Payment Activity</h4>
                <ul className="timeline-active">
                  <li className="d-flex align-items-baseline">
                    <h4 className="font-w400 time">12/05/2023</h4>
                    <div className="panel">
                      <a
                        className="timeline-panel text-muted d-flex align-items-center"
                        href="#"
                      >
                        <h4 className="mb-0">
                          <button className="btn btn-warning mr-2">
                            Rs.35000.00{" "}
                          </button>
                          Payment Mode: via UPI and Transaction No./Cheque No.:
                          1234567890
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
                          <button className="btn btn-danger mr-2">
                            Rs.10000.00{" "}
                          </button>
                          Discount Amount
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
                          <button className="btn btn-warning mr-2">
                            Rs.30000.00{" "}
                          </button>
                          Payment Mode: via UPI and Transaction No./Cheque No.:
                          1234567890
                        </h4>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-baseline">
                    <h4 className="font-w400 time">13/05/2023</h4>
                    <div className="panel">
                      <a
                        className="timeline-panel text-muted d-flex align-items-center"
                        href="#"
                      >
                        <h4 className="mb-0">
                          <button className="btn btn-primary mr-2">
                            Rs.30000.00{" "}
                          </button>
                          Next Due Date: 13/06/2023 by Student Name.
                        </h4>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-baseline">
                    <h4 className="font-w400 time">13/05/2023</h4>
                    <div className="panel">
                      <a
                        className="timeline-panel text-muted d-flex align-items-center"
                        href="#"
                      >
                        <h4 className="mb-0">
                          <button className="btn btn-primary mr-2">
                            Rs.30000.00{" "}
                          </button>
                          Modify Next Due Date: 25/06/2023 by Student Name.
                        </h4>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewFee;
