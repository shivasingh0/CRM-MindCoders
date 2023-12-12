import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const Navigate = useNavigate()

    function errorPage() {
        Navigate('/')
    }

  return (
    <>
      <div className="errorPageContainer">
        <div className="contain">
          <h1>404 - Page Not Found</h1>
          <h4>Sorry, the page you are looking for does not exist.</h4>
          <Button onClick={errorPage} >Go back to dashboard</Button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
