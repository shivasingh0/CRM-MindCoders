import React from "react";
import Table from "../../components/Table";

const LeadTable = () => {
  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <div>
          <input type="date" className="form-control mt-3" />
        </div>
        <div>
          <button
            className="btn btn-secondary btn-sm mr-2"
            data-bs-toggle="modal"
            data-bs-target="#enquiries"
          >
            <i className="bi-person-lines-fill" /> Add Leads
          </button>
        </div>
      </div>
      <hr />
      <div className="table-responsive">
        <div id="example4_wrapper" className="dataTables_wrapper no-footer">
          <div className="dataTables_length" id="example4_length">
            <label>
              Show{" "}
              <select
                name="example4_length"
                aria-controls="example4"
                className=""
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>{" "}
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
          <Table />
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
    </>
  );
};

export default LeadTable;
