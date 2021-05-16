import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const [logged, setLogged] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setMenuButton(true);
    } else {
      setMenuButton(false);
    }
  };

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    console.log(user);
    setLogged(user);
  }, [user]);
  return (
    <div className="navbar">
      <span className="nav__number">
        Hotline: <span>+977-98438151</span>
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
          {logged ? (
            <button
              onClick={() => {
                auth.signOut();
                setLogged("");
                history.go(0); //reload the page
              }}
            >
              {logged}
            </button>
          ) : (
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "rgb(202, 197, 192)" }}
            >
              Signin
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
