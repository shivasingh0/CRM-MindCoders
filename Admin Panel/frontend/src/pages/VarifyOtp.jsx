import OTPInput from "otp-input-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VarifyOtp = () => {
  const [otp, setOtp] = useState("");
  const Navigate = useNavigate()

  function submitOTP() {
    Navigate('/')
  }

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="text-center">
            <Link to="" className="brand-logo">
              <img src="images/logo.webp" alt="logo" width={250} />
              <h4 className="card-title mt-2">Welcome To Mind Coders</h4>
            </Link>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 mt-5">
              <img src="./images/enter-otp.webp" alt="login-img" height={350} />
            </div>
            <div className="col-lg-5 mt-6">
              <div className="card rounded-3 effect2 h-auto mt-4">
                <div className="card-header text-center">
                  <h4 className="card-title">Varify OTP</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <form
                      className="form-valide-with-icon needs-validation"
                      noValidate=""
                    >
                      <div className="tab-content mt-4" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active "
                          id="nav-about"
                          role="tabpanel"
                          aria-labelledby="nav-about-tab"
                        >
                          <div className="mb-3 mt-4 ms-5">
                            <label
                              className="text-label form-label"
                              htmlFor="validationCustomUsername"
                            >
                              Please enter OTP
                            </label>
                            <div className="input-group ">
                              <OTPInput
                                value={otp}
                                onChange={setOtp}
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                autoFocus
                                // className="opt-container "
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn me-2 btn-primary btn-block fs-15"
                            onClick={submitOTP}
                          >
                            Submit OTP
                          </button>
                        </div>
                      </div>
                    </form>
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

export default VarifyOtp;
