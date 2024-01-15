import "./Nav.scss";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { actionToggleIsOpen } from "../../store/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";
import LoginBox from "../LoginBox/LoginBox";

// import logo from "./../../assets/icons/logo-new.png";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // au click on veut changer la valeur de isOpen ET refaire le redu du composant Settings
    // on va utiliser un dispatch d'action
    dispatch(actionToggleIsOpen());
  };
  const isOpen = useSelector(
    (state: RootState) => state.loginPopupReducer.isOpen
  );
  return (
    <>
      <nav className={`Navbar ${showLinks ? "show-nav" : "hide_nav"} `}>
        <div className="Navbar__logo">{/* <img src={logo} alt="" /> */}</div>
        <ul className="Navbar__links">
          <li className="Navbar__item slideInDown-1">
            <a href="/" className="Navbar__link">
              Home
            </a>
          </li>
          <li className="Navbar__item slideInDown-2">
            <a href="/memories" className="Navbar__link">
              Memories
            </a>
          </li>
          <li className="Navbar__item slideInDown-3">
            <a href="/profil" className="Navbar__link">
              Profil
            </a>
          </li>
          <li className="Navbar__item slideInDown-4">
            <a href="/memory" className="Navbar__link">
              My Memory
            </a>
          </li>
          <li className="Navbar__item slideInDown-5">
            <a href="/" className="Navbar__link last" onClick={handleClick}>
              Connexion
            </a>
          </li>
        </ul>
        <button
          className="Navbar__burger"
          onClick={handleShowLinks}
          type="button"
        >
          <span className="Burger__bar" />
        </button>
      </nav>
      {isOpen && <LoginBox />}
    </>
  );
};

export default Nav;
