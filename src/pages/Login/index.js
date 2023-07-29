import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.map((product) => {
          if (
            product.username === userName &&
            product.username === userPassword
          ) {
            navigate("/dashboard");
            setShowError(false);
          } else {
            setShowError(true);
          }
        });
      });
  };

  return (
    <div className="loginPage">
      <div className="loginArea container">
        <div className="loginIntro">
          <img src={require("../../images/intro.jpg")} alt="Intro" />
        </div>
        <div className="loginForm">
          <div className="loginDetails">
            <div className="logoLogin">
              <img
                src={require("../../images/logoIntro.jpg")}
                alt="Login Logo"
              />
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <p>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    placeholder="Phone number, username, or email"
                  />
                </p>
                <p>
                  <input
                    type="password"
                    value={userPassword}
                    onChange={(e) => {
                      setuserPassword(e.target.value);
                    }}
                    placeholder="Password"
                  />
                </p>
                <div className="loginButton">
                  <button>Log in</button>
                </div>
              </div>
            </form>
            <div>
              <div className="loginElse">
                <p>OR</p>
              </div>
              <div className="fbLogin">
                <Link>Log in with Facebook</Link>
              </div>
              {showError ? (
                <p className="errorMessage">
                  Sorry, your password was incorrect. Please double-check your
                  password.
                </p>
              ) : (
                ""
              )}
              <div className="forgotPwd">
                <Link>Forgot password?</Link>
              </div>
            </div>
          </div>
          <div className="signUp">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
