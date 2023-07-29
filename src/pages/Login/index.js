import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [useList, setUsersList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsersList(data);
      });
  };

  return (
    <div className="loginPage">
      <div className="loginArea container">
        <div className="loginIntro">
          <img src={require("../../images/intro.jpg")} alt="Intro" />
        </div>
        <div className="loginForm">
          <div>
            <div className="logoLogin">
              <img
                src={require("../../images/logoIntro.jpg")}
                alt="Login Logo"
              />
            </div>
            <form action="">
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
                <div>
                  <Link to="/dashboard">
                    <button onClick={handleSubmit}>Log in</button>
                  </Link>
                </div>
              </div>
            </form>
            <div>
              <div className="loginElse">
                <p>OR</p>
              </div>
              <div>
                <p>Log in with facebook</p>
              </div>
              <p>
                Sorry, your password was incorrect. Please double-check your
                password.
              </p>
              <div>
                <p>forgot password</p>
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
