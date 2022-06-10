import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu dropdown-menu-dark bg-dark" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="form-check form-switch mx-3">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toogleMode}/>
            <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
        </div>
        </div>
      </div>
      
    </nav>
  );
}



Navbar.prototype = {
  title: PropTypes.string.isRequired,
  co: PropTypes.number.isRequired
};

Navbar.defaultProps = {
  title: "set title",
  co: "set co"
}