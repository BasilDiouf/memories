import React from "react";
import "./LoginBox.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  actionToggleIsSignUp,
  actionToggleIsOpen,
} from "../../store/actions/loginActions";

export const LoginBox = () => {
  const isSignUp = useSelector(
    (state: RootState) => state.loginPopupReducer.isSignUp
  );

  const isOpen = useSelector(
    (state: RootState) => state.loginPopupReducer.isOpen
  );

  const dispatch: AppDispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(actionToggleIsSignUp());
  };

  const handleCloseClick = () => {
    dispatch(actionToggleIsOpen());
  };

  return (
    <section className="container forms">
      <div className={isSignUp ? "form show-signup" : "form login"}>
        <div className="form-content">
          <header>Login</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>
            <div className="form-link">
              {/* <a href="#" className="forgot-pass">
                Forgot password?
              </a> */}
            </div>
            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Don&apos;t have an account?{" "}
              <a href="#" className="link signup-link" onClick={handleSignUp}>
                Signup
              </a>
            </span>
          </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <img src="#" alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
          <a href="#" className="close-button" onClick={handleCloseClick}>
            FERMER
          </a>
        </div>
      </div>
      {/* signup-form */}
      <div className={isSignUp ? "form show-signup" : "form signup"}>
        <div className="form-content">
          <header>Signup</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="password"
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>
            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Already have an account?{" "}
              <a href="#" className="link login-link" onClick={handleSignUp}>
                Login
              </a>
            </span>
          </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <img src="#" alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
          <a href="#" className="close-button" onClick={handleCloseClick}>
            FERMER
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginBox;
