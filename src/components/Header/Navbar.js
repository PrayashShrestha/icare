import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUserCategory } from "../../actions/Actions";
import { auth } from "../../Firebase";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const [logged, setLogged] = useState("");
  const [click, setClick] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [option, handleShowOption] = useState(false);

  const user = useSelector((state) => state.user.user);
  const category = useSelector((state) => state.user.category);
  const dispatch = useDispatch();

  //Menu Button Setting with resize
  const showButton = () => {
    if (window.innerWidth <= 768) {
      setMenuButton(true);
      handleShowOption(true);
    } else {
      setMenuButton(false);
      handleShowOption(false);
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
        {!category && (
          <li className="nav__item">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "aliceblue" }}
              onClick={closeNav}
            >
              About I-care
            </Link>
          </li>
        )}
        <li className="nav__item">
          {category ? (
            <Link
              to="/doctors"
              style={{ textDecoration: "none", color: "aliceblue" }}
              onClick={closeNav}
            >
              Doctors
            </Link>
          ) : (
            <Link
              to="/consult"
              style={{ textDecoration: "none", color: "aliceblue" }}
              onClick={closeNav}
            >
              Consult Doctor
            </Link>
          )}
        </li>
        {category && (
          <li className="nav__item">
            <Link
              to="/users"
              style={{ textDecoration: "none", color: "aliceblue" }}
              onClick={closeNav}
            >
              Users
            </Link>
          </li>
        )}
        {!category && (
          <li className="nav__item">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "aliceblue" }}
              onClick={closeNav}
            >
              Contact
            </Link>
          </li>
        )}
        <li className="nav__item-logging">
          {logged ? (
            <button
              onClick={() => {
                handleShowOption(!option);
              }}
            >
              {logged}
            </button>
          ) : (
            <Link
              to="/forms"
              style={{ textDecoration: "none", color: "aliceblue" }}
              onClick={closeNav}
            >
              Signin
            </Link>
          )}
        </li>
        {/* Only show when user is in mobile view and is logged in */}
        {logged && option && !category && (
          <li className="nav__item-mobile">
            <p
              onClick={() => {
                history.push("/profile");
                closeNav();
              }}
            >
              Profile
            </p>
          </li>
        )}
        {logged && option && (
          <li className="nav__item-mobile">
            <p
              onClick={() => {
                auth.signOut();
                setLogged("");
                dispatch(setUserCategory(""));
                history.push("/");
                history.go(0); //reload the page
                setClick(false); //close the nav in mobile view
              }}
            >
              Logout
            </p>
          </li>
        )}
      </ul>

      {/* shows only when the user is logged  and in bigger screen*/}
      {logged && option && (
        <div className="navItem__options">
          {/* after onclick we need to make dissapear the option so we set it back to false
          but we donot do it in logout coz after logout we have set the options to display none when logged is false */}
          {!category && (
            <p
              onClick={() => {
                handleShowOption(false);
                history.push("/profile");
              }}
            >
              Profile
            </p>
          )}
          <p
            onClick={() => {
              auth.signOut();
              setLogged("");
              dispatch(setUserCategory(""));
              history.push("/");
              history.go(0); //reload the page
              setClick(false); //close the nav in mobile view
            }}
          >
            Logout
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
