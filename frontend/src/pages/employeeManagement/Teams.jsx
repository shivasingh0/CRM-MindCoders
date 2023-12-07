import React, { useState } from 'react'
import AddTeam from '../../modals/AddTeam';


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
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddTeam show={modalShow} />
      {modalShow?<div class="modal-backdrop fade show"></div>:""}
    </>
  )
}

export default Teams;