import React from 'react';
import logo from './logo.png';

function Navbar({ mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt='Logo' style={{width:'80px' , height: '50px'}} />
        </a>
        <div className="form-check form-switch" style={{ transform: 'scale(1.2)' }}>
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
