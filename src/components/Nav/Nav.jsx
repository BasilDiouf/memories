import "./Nav.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "./../../assets/icons/logo-new.png";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`Navbar ${showLinks ? "show-nav" : "hide_nav"} `}>
      <div className="Navbar__logo">{/* <img src={logo} alt="" /> */}</div>
      <ul className="Navbar__links">
        <li className="Navbar__item slideInDown-1">
          <a href="/" className="Navbar__link">
            Profil
          </a>
        </li>
        <li className="Navbar__item slideInDown-2">
          <a href="/" className="Navbar__link">
            My Memory
          </a>
        </li>
        <li className="Navbar__item slideInDown-3">
          <Link to="/signup" className="Navbar__link">
            Inscription
          </Link>
        </li>
        <li className="Navbar__item slideInDown-4">
          <a href="/" className="Navbar__link">
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
  );
};

export default Nav;
