import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
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
          <Link to="/forms">
            <Button>Login</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
