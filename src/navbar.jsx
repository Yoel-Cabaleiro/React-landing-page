import React from "react";
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
  return (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Yoel's React Practice</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarCollapse">
      <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Contact</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Navbar
