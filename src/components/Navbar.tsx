import React, { useEffect } from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          Logo
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
