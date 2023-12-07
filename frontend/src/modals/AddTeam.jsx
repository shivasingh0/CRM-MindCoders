import Button from "react-bootstrap/Button";

function AddTeam(props) {
  return (
    <>
      <div className={props.show?"modal fade show":"modal fade"} id="addcourse">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header gradient-5">
              <h4 className="text-white"> Add/Edit Course</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="widget-heading d-flex justify-content-between align-items-center">
                {/* <h5 /> */}
                <div>
                  <h5>
                    <i className="bi-calendar2-event" /> Date: 12/03/2023 03:43
                    PM
                  </h5>
                </div>
              </div>
              <form>
                <div className="mb-4">
                  <label className="mb-1">
                    <strong>Course Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="enter course name"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-1">
                    <strong>Batch Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="enter batch name"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-1">
                    <strong>Course Fees </strong>
                  </label>
                  <input
                    type="text"
                    className="form-control mt-10"
                    placeholder="enter course fees"
                  />
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-secondary btn-block">
                    add Course
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Button>Close</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTeam;
