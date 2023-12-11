import React, { useEffect, useRef } from "react";
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

const Dashboard = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    // Access the chart instance using chartRef.current
    // You can perform additional operations or access properties/methods of the chart here
    if (chartRef.current) {
      // Example: chartRef.current.options.title.text = "New Title";
    }
  }, [chartRef]);
  
  const options = {
    animationEnabled: true,
    title: {
      text: "Customer Satisfaction"
    },
    subtitles: [{
      text: "71% Positive",
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      showInLegend: true,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { name: "Unsatisfied", y: 5 },
        { name: "Very Unsatisfied", y: 31 },
        { name: "Very Satisfied", y: 40 },
        { name: "Satisfied", y: 17 },
        { name: "Neutral", y: 7 }
      ]
    }]
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col-xl-4 col-xxl-4 col-sm-4">
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
              </div>
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
              <div className="col-xl-4 col-xxl-4 col-sm-4">
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
              </div>
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
            </div>
          </div>
        </div>
        {/* <div className="widget-heading d-flex justify-content-between align-items-center">
          <h4 className="m-0">All Courses (3)</h4>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="card all-crs-wid">
              <div className="card-body">
                <div className="courses-bx">
                  <div className="dlab-media">
                    <img src="images/course-1.png" alt="" />
                  </div>
                  <div className="dlab-info">
                    <div className="dlab-title d-flex justify-content-between">
                      <div>
                        <h4>
                          <a href="">MPPSC Mains Foundation (Hindi Medium)</a>
                        </h4>
                        <span>Pathshala Batch</span>
                      </div>
                      <h4 className="text-primary">
                        <span>Rs.</span>75000
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between content align-items-center">
                      <span> 35 Total Students </span>
                      <a href="" className="btn btn-secondary btn-sm mt-4">
                        view course
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card all-crs-wid">
              <div className="card-body">
                <div className="courses-bx">
                  <div className="dlab-media">
                    <img src="images/course-2.png" alt="" />
                  </div>
                  <div className="dlab-info">
                    <div className="dlab-title d-flex justify-content-between">
                      <div>
                        <h4>
                          <a href="">MPPSC Mains Foundation (English Medium)</a>
                        </h4>
                        <span>Pathshala Batch</span>
                      </div>
                      <h4 className="text-primary">
                        <span>Rs.</span>75000
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between content align-items-center">
                      <span> 35 Total Students </span>
                      <a href="" className="btn btn-secondary btn-sm mt-4">
                        view course
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card all-crs-wid">
              <div className="card-body">
                <div className="courses-bx">
                  <div className="dlab-media">
                    <img src="images/course-3.png" alt="" />
                  </div>
                  <div className="dlab-info">
                    <div className="dlab-title d-flex justify-content-between">
                      <div>
                        <h4>
                          <a href="">MPPSC Prelims Arjun (Bilingual Batch)</a>
                        </h4>
                        <span>Targeted Batch 2022</span>
                      </div>
                      <h4 className="text-primary">
                        <span>Rs.</span>35000
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between content align-items-center">
                      <span> 35 Total Students </span>
                      <a href="" className="btn btn-secondary btn-sm mt-4">
                        view course
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
         <div>
      <CanvasJSChart
        options={options}
        onRef={chart => chartRef.current = chart}
      />
      {/* You can get a reference to the chart instance as shown above using onRef.
          This allows you to access all chart properties and methods */}
    </div>
      </div>
    </>
  );
};

export default Dashboard;
