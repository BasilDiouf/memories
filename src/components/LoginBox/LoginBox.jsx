/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./LoginBox.scss";

export const LoginBox = (props) => {
  return (
    <div className="box-container">
      <div className="top-container">
        <div className="header-container">
          <div className="header-text">Welcome</div>
          <div className="header-text">Back</div>
          <div className="small-text">Connectez-vous!</div>
        </div>
        <div className="backdrop"></div>
      </div>
      <div className="login-form">
        <form autoComplete="off" className="form">
          <label className="email-label" htmlFor="email">
            Entrez votre Email
          </label>
          <input
            className="login-input"
            type="email"
            id="email"
            placeholder="Email"
            pattern=".+@example\.com"
            size="30"
            required
          />
          <label className="pass-label" htmlFor="pass">
            Entrez votre mot de passe
          </label>
          <input
            className="login-input"
            type="password"
            id="pass"
            name="password"
            placeholder="Mot de passe"
            minLength="8"
            required
          />
        </form>
        <p className="signup-message">
          Pas encore inscrit ? <Link to="/signup">Inscivez-vous!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginBox;
