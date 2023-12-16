import React, { useState } from "react";
import AddTeam from "../../components/modals/AddTeam";

const Teams = () => {
  const [modalShow, setModalShow] = useState(false);
    
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
                      <h4>
                        <span className="badge badge-primary mr-2">
                          Total Teams - 20
                        </span>
                      </h4>
                      <div>
                        <button
                          className="btn btn-secondary btn-sm mr-2"
                          data-bs-toggle="modal"
                          data-bs-target="#addcourse"
                          onClick={() => setModalShow(true)}
                        >
                          <i className="bi-person-lines-fill" /> Add New Team
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* Teams Cards */}
                    <div className="container">
                      <div className="row justify-content-around">
                        <div class="team-card col-lg-3 col-xl-3 col-md-6 col-sm-12">
                          <div className="team-card-text">
                            <h3>Team Spartan</h3>
                            <p>Team Discription</p>
                            <span className="btn btn-secondary btn-sm mr-2">
                              More Info
                            </span>
                          </div>
                        </div>
                        <div class="team-card col-lg-3 col-xl-3 col-md-6 col-sm-12">
                          <div className="team-card-text">
                            <h3>Team Spartan</h3>
                            <p>Team Discription</p>
                            <span className="btn btn-secondary btn-sm mr-2">
                              More Info
                            </span>
                          </div>
                        </div>
                        <div class="team-card col-lg-3 col-xl-3 col-md-6 col-sm-12">
                          <div className="team-card-text">
                            <h3>Team Spartan</h3>
                            <p>Team Discription</p>
                            <span className="btn btn-secondary btn-sm mr-2">
                              More Info
                            </span>
                          </div>
                        </div>
                        <div class="team-card col-lg-3 col-xl-3 col-md-6 col-sm-12">
                          <div className="team-card-text">
                            <h3>Team Spartan</h3>
                            <p>Team Discription</p>
                            <span className="btn btn-secondary btn-sm mr-2">
                              More Info
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddTeam show={modalShow} onHide={() => setModalShow(false)} />
      {modalShow ? <div class="modal-backdrop fade show"></div> : ""}
    </>
  );
};

export default Teams;
