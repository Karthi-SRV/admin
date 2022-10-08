import React from "react";
import "./header.scss";
import logo from "../../assets/images/okr-logo.png";

function Header() {
  return (
    <div className="header-section d-flex align-items-center justify-content-center px-3 py-2">
      <div className="d-flex align-items-center">
        <div className="logo">
          <img alt="logo" className="w-100 h-100" src={logo} />
        </div>
        <span className="ps-2 f-20 f-w-600 l-h-normal txt-black flex-1">
          Dashboard - Digite Collaborative OKRs
        </span>
      </div>
      <div className="ms-5">
      </div>
    </div>
  );
}

export default Header;
