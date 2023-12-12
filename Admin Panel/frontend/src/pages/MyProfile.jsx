import React from "react";

const MyProfile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="row">
              <div className="widget-heading d-flex justify-content-between align-items-center">
                <h4 className="mb-3">Nirlip Sports and Fitness Hub</h4>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4">
                <div className="card profile-widget">
                  <div className="card-body">
                    <div className="widget-courses align-items-center d-flex justify-content-between style-1 flex-wrap">
                      <div className="d-flex">
                        <img src="images/svg/degree-certificate.svg" alt="" />
                        <div className="ms-4">
                          <h4>60</h4>
                          <span>Total Orders</span>
                        </div>
                      </div>
                      <a href="subscription.html">
                        <i className="fa fa-angle-right text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4">
                <div className="card profile-widget">
                  <div className="card-body">
                    <div className="widget-courses align-items-center d-flex justify-content-between style-1 flex-wrap">
                      <div className="d-flex">
                        <img src="images/svg/cup.svg" alt="" />
                        <div className="ms-4">
                          <h4>25</h4>
                          <span>Total Products</span>
                        </div>
                      </div>
                      <a href="subscription.html">
                        <i className="fa fa-angle-right text-secondary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-4">
                <div className="card profile-widget">
                  <div className="card-body">
                    <div className="widget-courses align-items-center d-flex justify-content-between style-1 flex-wrap">
                      <div className="d-flex">
                        <img src="images/svg/microscope.svg" alt="" />
                        <div className="ms-4">
                          <h4>15</h4>
                          <span>Enquiries</span>
                        </div>
                      </div>
                      <a href="subscription.html">
                        <i className="fa fa-angle-right text-secondary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Lastest Orders</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="example4"
                        className="display"
                        style={{ minWidth: 845 }}
                      >
                        <thead>
                          <tr>
                            <th>No.</th>
                            <th>Invoice No.</th>
                            <th>Client Name</th>
                            <th>Product Name </th>
                            <th>Payment Type </th>
                            <th>Status </th>
                            <th>Date</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01</td>
                            <td>#54605</td>
                            <td>
                              <b>Client Name</b> <br />{" "}
                              <span className="text-primary">
                                +91 9876543210
                              </span>
                            </td>
                            <td>Badminton</td>
                            <td>Cash</td>
                            <td>
                              <span className="badge badge-primary">Paid</span>
                            </td>
                            <td>25/10/2022</td>
                            <td>
                              <strong>Rs.1200</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>01</td>
                            <td>#54605</td>
                            <td>
                              <b>Client Name</b> <br />{" "}
                              <span className="text-primary">
                                +91 9876543210
                              </span>
                            </td>
                            <td>Badminton</td>
                            <td>Cash</td>
                            <td>
                              <span className="badge light badge-warning">
                                Pending
                              </span>
                            </td>
                            <td>25/10/2022</td>
                            <td>
                              <strong>Rs.1200</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>01</td>
                            <td>#54605</td>
                            <td>
                              <b>Client Name</b> <br />{" "}
                              <span className="text-primary">
                                +91 9876543210
                              </span>
                            </td>
                            <td>Badminton</td>
                            <td>Cash</td>
                            <td>
                              <span className="badge light badge-danger">
                                Cancel
                              </span>
                            </td>
                            <td>25/10/2022</td>
                            <td>
                              <strong>Rs.1200</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>01</td>
                            <td>#54605</td>
                            <td>
                              <b>Client Name</b> <br />{" "}
                              <span className="text-primary">
                                +91 9876543210
                              </span>
                            </td>
                            <td>Badminton</td>
                            <td>Cash</td>
                            <td>
                              <span className="badge light badge-success">
                                On going
                              </span>
                            </td>
                            <td>25/10/2022</td>
                            <td>
                              <strong>Rs.1200</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
