import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../webServices/Getway";
import { webURLs } from "../webServices/WebURLs";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  // Login API Integration
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password.",{
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }
    try {
      let result = await axiosClient.post(webURLs.LOGIN, { email, password });

      if (result.data.status) {
        localStorage.setItem("user", JSON.stringify(result.data));
        Navigate("/");
      } else {
        toast.error("Enter valid details",{
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.",{
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="text-center">
            <Link href="" className="brand-logo">
              <img src="images/logo.webp" alt="logo" width={250} />
              <h4 className="card-title mt-2">Welcome To Mind Coders</h4>
            </Link>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src="./images/login-img.webp" alt="login-img" height={450} />
            </div>
            <div className="col-lg-5 mt-4">
              <div className="card rounded-3 effect2 h-auto mt-4">
                <div className="card-header text-center">
                  <h4 className="card-title">Login to Continue</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <form
                      className="form-valide-with-icon needs-validation"
                      noValidate=""
                    >
                      <div className="tab-content mt-4" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-about"
                          role="tabpanel"
                          aria-labelledby="nav-about-tab"
                        >
                          <div className="mb-3 mt-4">
                            <label
                              className="text-label form-label"
                              htmlFor="validationCustomUsername"
                            >
                              Please enter email id
                            </label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <i
                                  className="fa fa-user"
                                  style={{ color: "#031c54" }}
                                />
                              </span>
                              <input
                                type="email"
                                className="form-control"
                                placeholder=" Email ID"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              className="text-label form-label"
                              htmlFor="dlab-password"
                            >
                              Password *
                            </label>
                            <div className="input-group transparent-append">
                              <span className="input-group-text">
                                <i
                                  className="fa fa-lock"
                                  style={{ color: "#031c54" }}
                                />
                              </span>
                              <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <span
                                className="input-group-text show-pass"
                                onClick={() => {
                                  setShowPassword(!showPassword);
                                }}
                              >
                                {showPassword ? (
                                  <i class="fa-solid fa-eye"></i>
                                ) : (
                                  <i className="fa-solid fa-eye-slash" />
                                )}
                              </span>
                            </div>
                          </div>
                          <div className=" m-2 d-flex justify-content-between">
                            <Link to={"/forgotpassword"}>
                              <u>Forgot password</u>
                            </Link>
                          </div>
                          <button
                            type="submit"
                            className="btn me-2 btn-primary btn-block fs-15"
                            onClick={handleLogin}
                          >
                            Login
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
      <ToastContainer limit={3}></ToastContainer>
    </>
  );
};

export default Login;
