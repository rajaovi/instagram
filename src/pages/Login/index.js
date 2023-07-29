import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  return (
    <div className="loginPage">
      <div className="loginArea">
        <div className="loginIntro">
          <img src="../../logo.jpg" alt="Intro" />
        </div>
        <div className="loginForm">
          <div className="logoLogin">
            <img src="../../logo.jpg" alt="Login Logo" />
          </div>
          <form>
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
                  <button>Log in</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
