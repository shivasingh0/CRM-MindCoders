import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Range from "../../components/rangeForPayment/Range";
import ViewFee from "../../components/modals/View/ViewFee";

const FeeTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const Navigate = useNavigate();

  function printInvoice() {
    Navigate("/invoice");
  }

  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>Fee Collection</h4>
      </div>
      <hr />
      <div className="table-responsive">
        <table id="example4" className="display" style={{ minWidth: 1150 }}>
          <thead>
            <tr className="text-center">
              <th>No.</th>
              <th>Student Name</th>
              <th>Fee Amount </th>
              <th>Discount Amt </th>
              <th>Final Amount </th>
              <th>Recieved Amt</th>
              <th>Pending Amount </th>
              <th>Next Due Date </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>
                <div
                  className="d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#studentdetails"
                >
                  <h4 className="mb-0 fs-16 font-w500">
                    Student Name <br />
                    9876543210
                  </h4>
                </div>
              </td>
              <td>Rs.75000.00</td>
              <td>
                <button
                  className="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#discount"
                >
                  Rs.15000.00
                </button>
              </td>
              <td>Rs.75000.00</td>
              <Range />
              <td>
                <button className="btn btn-danger">Rs.25000.00</button>{" "}
              </td>
              <td>13/06/2023 </td>
              <td>
                <i
                  onClick={() => setModalShow(true)}
                  className="bi-clipboard-data mr-2 text-primary pointer"
                />
                <i className="bi-whatsapp mr-2" />
                <a href="/invoice" target="_blank">
                  <i className="bi-printer text-success" />
                </a>
              </td>
            </tr>
            <tr className="text-center">
              <td>1</td>
              <td>
                <div
                  className="d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#studentdetails"
                >
                  <h4 className="mb-0 fs-16 font-w500">
                    Student Name <br />
                    9876543210
                  </h4>
                </div>
              </td>
              <td>Rs.75000.00</td>
              <td>
                <button
                  className="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#discount"
                >
                  Rs.15000.00
                </button>
              </td>
              <td>Rs.60000.00</td>
              {/* <td>
                                <button
                                  className="btn btn-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#recieved"
                                >
                                  Rs.50000.00{" "}
                                </button>
                              </td> */}
              <Range />
              <td>
                <button className="btn btn-danger">Rs.10000.00</button>{" "}
              </td>
              <td>13/06/2023 </td>
              <td>
                <i
                  onClick={() => setModalShow(true)}
                  className="bi-clipboard-data mr-2 text-primary pointer"
                />
                <i className="bi-whatsapp mr-2" />
                <a href="/invoice" target="_blank">
                  <i className="bi-printer text-success" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ViewFee show={modalShow} onHide={() => setModalShow(false)} />
      {modalShow ? <div class="modal-backdrop fade show"></div> : ""}
    </>
  );
};

export default FeeTable;
