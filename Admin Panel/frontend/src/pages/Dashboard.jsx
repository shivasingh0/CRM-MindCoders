import PieChart from "../components/charts/PieChart";
import BarCharts from "../components/charts/BarCharts";
import LineChart from "../components/charts/LineChart";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-xl-12 col-xxl-12">
            <div className="row">
            <div className="col-xl-4 col-xxl-4 col-sm-4">
                <div className="card bg-secondary widget-courses style-2">
                  <div className="card-body">
                    <div className="lign-items-center d-flex justify-content-between flex-wrap">
                      <div className="d-flex">
                        <img src="./images/enquiry.webp" alt="enquiry" />
                        <div className="ms-4">
                          <h4 className="fs-18 font-w700">32 </h4>
                          <span>Total Enquiries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-4 col-xxl-4 col-sm-4">
                <div className="card bg-secondary widget-courses style-2">
                  <div className="card-body">
                    <div className="align-items-center d-flex justify-content-between flex-wrap">
                      <div className="d-flex">
                        <img src="./images/users.webp" alt="users" />
                        <div className="ms-4">
                          <h4 className="fs-18 font-w700">120 </h4>
                          <span>Total Students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-4 col-xxl-4 col-sm-4">
                <div className="card bg-secondary widget-courses style-2">
                  <div className="card-body">
                    <div className="align-items-center d-flex justify-content-between flex-wrap">
                      <div className="d-flex">
                        <img src="./images/Notepad.webp" alt="notepad" />
                        <div className="ms-4">
                          <h4 className="fs-18 font-w700">10 </h4>
                          <span>Total Admission</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-4 col-xxl-4 col-sm-4">
                <div className="card bg-secondary widget-courses style-2">
                  <div className="card-body">
                    <div className="align-items-center d-flex justify-content-between flex-wrap">
                      <div className="d-flex">
                        <img src="./images/Teamwork.webp" alt="teamwork" />
                        <div className="ms-4">
                          <h4 className="fs-18 font-w700">2 </h4>
                          <span>Total Teams</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-4 col-xxl-4 col-sm-4">
                <div className="card bg-secondary widget-courses style-2">
                  <div className="card-body">
                    <div className="lign-items-center d-flex justify-content-between flex-wrap">
                      <div className="d-flex">
                        <img src="./images/employees.webp" alt="employees" />
                        <div className="ms-4">
                          <h4 className="fs-18 font-w700">200 </h4>
                          <span>Total Employees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-xl-4 col-xxl-4 col-sm-4">
                <div className="card bg-secondary widget-courses style-2">
                  <div className="card-body">
                    <div className="lign-items-center d-flex justify-content-between flex-wrap">
                      <div className="d-flex">
                        <img src="./images/lead.webp" alt="lead" />
                        <div className="ms-4">
                          <h4 className="fs-18 font-w700">20 </h4>
                          <span>Lead Distribution</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-xxl-4 col-sm-4">
                <div className="card bg-secondary widget-courses style-2">
                  <div className="card-body">
                    <div className="lign-items-center d-flex justify-content-between flex-wrap">
                      <div className="d-flex">
                        <img src="./images/courses.webp" alt="courses" />
                        <div className="ms-4">
                          <h4 className="fs-18 font-w700">20 </h4>
                          <span>Total Courses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-xxl-4 col-sm-4">
                <div className="card bg-secondary widget-courses style-2">
                  <div className="card-body">
                    <div className="lign-items-center d-flex justify-content-between flex-wrap">
                      <div className="d-flex">
                        <img src="./images/demo.webp" alt="lead" />
                        <div className="ms-4">
                          <h4 className="fs-18 font-w700">20 </h4>
                          <span>Demo Classes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-xl-12 col-xxl-12">
              <div className="row">
                <div className="d-flex align-items-center justify-content-between card">
                  <PieChart />
                  <BarCharts />
                </div>
                <div className="card">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
