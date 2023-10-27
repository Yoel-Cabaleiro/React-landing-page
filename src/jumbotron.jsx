import React from "react";
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


function Jumbotron(){
    return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome to my page!</h1>
        <p className="col-md-12 fs-4">This is an example of a landing page using React. This could be a portfolio, where you would see some of my projects and contact info. Hope you enjoy!</p>
        <button className="btn btn-primary btn-lg" type="button">Contact me!</button>
      </div>
    </div>
    )
}

export default Jumbotron