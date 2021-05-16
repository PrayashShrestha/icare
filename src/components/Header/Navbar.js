import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const [logged, setLogged] = useState("");
  const [click, setClick] = useState(false);
  const [menuButton, setMenuButton] = useState(false);

  const user = useSelector((state) => state.user.user);

  //Menu Button Setting with resize
  const showButton = () => {
    if (window.innerWidth <= 768) {
      setMenuButton(true);
    } else {
      setMenuButton(false);
    }
  };

  //function to make change in cross and bars
  const menuClick = () => {
    setClick(!click);
  };

  //function to close the nav if any item is clicked
  const closeNav = () => {
    setClick(false);
  };

  //useEffect hook for setting user
  useEffect(() => {
    setLogged(user);
  }, [user]);

  //calliing show button  function whenever the screen is resized
  useEffect(() => {
    showButton();
  }, []);

  //adding the event listener for window resize and calling the function
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar" className={click ? "navbar active" : "navbar "}>
      <span className="nav__number">
        Hotline: <span>+977-98438151</span>
      </span>

      {/* vary the menu and cross button */}
      {menuButton && (
        <div className="menuIcon">
          <i
            onClick={menuClick}
            className={click ? "fas fa-times cross" : "fas fa-bars menu"}
          ></i>
        </div>
      )}

      {/* nav-Items */}
      <ul className={click ? "nav__items active" : "nav__items "}>
        <li className="nav__item">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "aliceblue" }}
            onClick={closeNav}
          >
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "aliceblue" }}
            onClick={closeNav}
          >
            About I-care
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/consult"
            style={{ textDecoration: "none", color: "aliceblue" }}
            onClick={closeNav}
          >
            Consult Doctor
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "aliceblue" }}
            onClick={closeNav}
          >
            Contact
          </Link>
        </li>
        <li className="nav__item">
          {logged ? (
            <button
              onClick={() => {
                auth.signOut();
                setLogged("");
                history.go(0); //reload the page
                setClick(false); //close the nav
              }}
            >
              {logged}
            </button>
          ) : (
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "rgb(202, 197, 192)" }}
              onClick={closeNav}
            >
              Signin
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
