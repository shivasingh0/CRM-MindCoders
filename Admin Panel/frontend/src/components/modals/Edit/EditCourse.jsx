import React from "react";
import { Button, Modal } from "react-bootstrap";

const EditCourse = (props) => {
  return (
    <>
    <Modal
        {...props}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="gradient-5">
          <Modal.Header closeButton>
            <h5 className="text-white">Add New Student</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
        <div className="modal-body">
          <div className="widget-heading d-flex justify-content-between align-items-center">
            {/* <h5 /> */}
            <div>
              <h5 className="datetime">Date: 28/12/2023 12:42:2</h5>
            </div>
          </div>
          <form
            className="needs-validation"
            action="/update_course/"
            method="post"
            id="my2Form"
            encType="multipart/form-data"
            noValidate=""
          />
          <input
            type="hidden"
            name="id"
            defaultValue="e3d98a50-ce39-41f3-931a-4ddbe861897e"
          />
          <div className="mb-4">
            <label className="mb-1">
              <strong>Course Name</strong>
            </label>
            <input
              type="text"
              name="coursename"
              className="form-control mt-10"
              defaultValue="MPPSC MAINS "
            />
          </div>
          <div className="mb-4">
            <label className="mb-1">
              <strong>Batch Name</strong>
            </label>
            <input
              type="text"
              name="batchname"
              className="form-control mt-10"
              defaultValue="Warrior Batch"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1">
              <strong>Course Fees </strong>
            </label>
            <input
              type="text"
              name="fees"
              className="form-control mt-10"
              defaultValue={50000}
            />
          </div>
          <div className="mb-4">
            <label className="mb-1">
              <strong>Status </strong>
            </label>
            <input
              type="text"
              name="activestatus"
              className="form-control mt-10"
              defaultValue="active"
            />
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-secondary btn-block">
              add Course
            </button>
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

export default EditCourse;
