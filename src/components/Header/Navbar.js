import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="nav__number">
        Hotline: <span>+977-9843818951</span>
      </span>
      <ul className="nav__items">
        <li className="nav__item">
          <Link to="/" style={{ textDecoration: "none", color: "aliceblue" }}>
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "aliceblue" }}
          >
            About I-care
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/consult"
            style={{ textDecoration: "none", color: "aliceblue" }}
          >
            Consult Doctor
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "aliceblue" }}
          >
            Contact
          </Link>
        </li>
        <li className="nav__item-btn">
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "rgb(202, 197, 192)" }}
          >
            Signin
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
