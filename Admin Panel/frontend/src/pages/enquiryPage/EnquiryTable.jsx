import React, { useEffect, useState } from "react";

// Import Components
import * as COMPONENT from "../../routes/ComponentRoute";
import { axiosClient } from "../../webServices/Getway";
import { webURLs } from "../../webServices/WebURLs";
import { dateFormat, getDataFromSessionStorage, getToken } from "../../helpers/Helpers";

const TableComponent = (props) => {
  const [addEnqueryModalShow, setAddEnqueryModalShow] = useState(false);
  const [viewStudentDetailsModalShow, setViewStudentDetailsModalShow] =
    useState(false);
  const [followUpModalShow, setFollowUpModalShow] = useState(false);
  const [editStudentDetails, setEditStudentDetails] = useState(false);
  const [getAllData, setGetAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    getEnquiries();
  }, []);

  const getEnquiries = async () => {
    setIsLoading(true);

    try {
  
      let response = await axiosClient.get(webURLs.ENQUIRIES);

      // Check if response is successful
      if (response && response.data) {
        setGetAllData(response.data.data);
        // console.log(response.data);
      } else {
        throw new Error("No data received from the server");
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
      setError(error.message); // Update error state to display to the user
    } finally {
      setIsLoading(false);
    }
  };

  const openViewStudentDetailsModal = (customer) => {
    setSelectedCustomer(customer);
    setViewStudentDetailsModalShow(true);
  };

  const folloupMessage = (customer) => {
    setSelectedCustomer(customer);
    setFollowUpModalShow(true);
  };

  // const editStudentsDetails = (customer) => {
  //   setSelectedCustomer(customer);
  //   setEditStudentDetails(true);
  // };

  const editStudentsDetails = (customerId) => {
    // Find the selected customer using the ID
    const selectedCustomer = getAllData.find(customer => customer.id === customerId);
    
    // Update the selected customer in the state
    setSelectedCustomer(selectedCustomer);
  
    // Show the edit student details modal
    setEditStudentDetails(true);
  };

  // Function to refresh data after saving details
  const refreshData = () => {
    // You can call the getEnquiries function to fetch updated data
    getEnquiries();
    // You can also close the addEnqueryModalShow modal if needed
    setAddEnqueryModalShow(false);
  };

  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>
          <span className="badge badge-primary mr-2">
            Total Enquiries- 20 Students{" "}
          </span>
          <span className="badge badge-secondary">
            Today Enquiries- 5 Students{" "}
          </span>
        </h4>
        <div>
          <button
            className="btn btn-secondary btn-sm mr-2"
            data-bs-toggle="modal"
            data-bs-target="#enquiries"
            onClick={() => setAddEnqueryModalShow(true)}
            variant="primary"
          >
            <i className="bi-person-lines-fill" /> Add New Enquery
          </button>
        </div>
      </div>
      <hr />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="table-responsive">
          <div id="example4_wrapper" className="dataTables_wrapper no-footer">
            <div className="dataTables_length" id="example4_length">
              <label>
                Show
                <select
                  name="example4_length"
                  aria-controls="example4"
                  className=""
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                entries
              </label>
            </div>
            <div id="example4_filter" className="dataTables_filter">
              <label>
                Search:
                <input
                  type="search"
                  className=""
                  placeholder=""
                  aria-controls="example4"
                />
              </label>
            </div>
            <table
              id="example4"
              className="display dataTable no-footer"
              style={{ minWidth: 845 }}
              role="grid"
              aria-describedby="example4_info"
            >
              <thead>
                <tr className="text-center" role="row">
                  <th>No.</th>
                  <th>Student Name</th>
                  <th>Mobile</th>
                  <th>Enquiry Date</th>
                  <th>Status</th>
                  <th>Next Call</th>
                  <th>Course Name </th>
                  <th>Priority </th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {getAllData?.length > 0 ? (
                  getAllData.map((customer, index) => (
                    <tr className="text-center" key={index}>
                      <td>{index + 1}</td>
                      <td>{customer.fullName}</td>
                      <td>{customer.mobile}</td>
                      {/* Assuming done is a boolean field */}
                      <td>{dateFormat(customer?.createdAt)}</td>
                      <td>{customer.lead_status}</td>
                      <td>{customer.nextCall}</td>
                      <td>{customer.course}</td>
                      <td>{customer.priority}</td>
                      <td>
                        <i
                          className="bi-eye mr-2 text-dark pointer"
                          title="view details"
                          onClick={() => openViewStudentDetailsModal(customer)}
                        />
                        <i
                          className="bi-chat-right-dots text-primary mr-2 pointer"
                          title="followup message"
                          onClick={() => folloupMessage(customer)}
                        />
                        <i
                          className="bi-pencil-square mr-2 text-danger pointer"
                          title="edit details"
                          onClick={() => editStudentsDetails(customer.id)}
                        />
                        <i
                          className="bi-binoculars-fill text-secondary mr-2"
                          title="Addmission"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9">No Result Found</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div
              className="dataTables_info"
              id="example4_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 2 of 2 entries
            </div>
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="example4_paginate"
            >
              <a
                className="paginate_button previous disabled"
                aria-controls="example4"
                data-dt-idx={0}
                tabIndex={0}
                id="example4_previous"
              >
                <i className="fa fa-angle-double-left" aria-hidden="true" />
              </a>
              <span>
                <a
                  className="paginate_button current"
                  aria-controls="example4"
                  data-dt-idx={1}
                  tabIndex={0}
                >
                  1
                </a>
              </span>
              <a
                className="paginate_button next disabled"
                aria-controls="example4"
                data-dt-idx={2}
                tabIndex={0}
                id="example4_next"
              >
                <i className="fa fa-angle-double-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
      {/* --------------------- Modals -------------------------- */}
      {/* Add students modal */}
      <COMPONENT.ADD_ENQUIRIES
        show={addEnqueryModalShow}
        onHide={() => setAddEnqueryModalShow(false)}
      />
      {addEnqueryModalShow ? <div class="modal-backdrop fade show"></div> : ""}
      {/* View details modal */}
      <COMPONENT.VIEW_STUDENT_DETAILS
        show={viewStudentDetailsModalShow}
        onHide={() => setViewStudentDetailsModalShow(false)}
        customer={selectedCustomer}
      />
      {viewStudentDetailsModalShow ? (
        <div class="modal-backdrop fade show"></div>
      ) : (
        ""
      )}
      {/* Follow-up message modal */}
      <COMPONENT.FOLLOW_UP_ACTIVITY
        show={followUpModalShow}
        onHide={() => setFollowUpModalShow(false)}
        // onAddEnquirySuccess={refreshData} // Pass the function to be called after successful save
        customer={selectedCustomer}
      />
      {followUpModalShow ? <div class="modal-backdrop fade show"></div> : ""}
      {/* Edit student details modal */}
      <COMPONENT.EDIT_STUDENT_DETAILS
        show={editStudentDetails}
        onHide={() => setEditStudentDetails(false)}
        customer={selectedCustomer}
      />
      {editStudentDetails ? <div class="modal-backdrop fade show"></div> : ""}
    </>
  );
};

export default TableComponent;
