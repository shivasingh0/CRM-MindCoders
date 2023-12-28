import React from "react";

const InnerLayout = ({children}) => {
    
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerLayout;
