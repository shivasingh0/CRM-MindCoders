
import { Modal, Button } from "react-bootstrap";

function AddTeam(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <div className="gradient-5">
          <Modal.Header closeButton>
            <h5 className="text-white">Add New Team</h5>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="modal-body">
            <div className="widget-heading d-flex justify-content-between align-items-center">
              <div></div>
            </div>
            <form>
              <div className="mb-4">
                <label className="mb-1">
                  <strong>Team Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control mt-10"
                  placeholder="team name"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1">
                  <strong>Team Discription</strong>
                </label>
                <textarea
                  className="form-control mt-10"
                  name=""
                  id=""
                  cols="66"
                  rows="2"
                  placeholder="team discription"
                ></textarea>
              </div>
              <div className="text-center mt-4">
                <Button type="submit" className="btn-block">
                  Save Team
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-footer">
            <Button closeButton>Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTeam;
