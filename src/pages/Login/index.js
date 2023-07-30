import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputString from "../../components/Input/InputString";
import Footer from "../../components/Footer";
import ErrorMessage from "../../components/ErrorMessage";
import axiosRes from "../../api/axiosRes";
import SpriteImage from "../../components/SpriteImage";
import "./index.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosRes(
      "https://jsonplaceholder.typicode.com/users",
      (res) => {
        const data = res.data;
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
      },
      (err) => {
        alert("Error With the API");
      }
    );
  };

  return (
    <>
      <div className="loginPage">
        <div className="loginArea container">
          <div className="loginIntro">
            <img src={require("../../images/intro.jpg")} alt="Intro" />
          </div>
          <div className="loginForm">
            <div className="loginDetails">
              <div className="logoLogin">
              <SpriteImage iconName="logoMain" />
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div>
                  <p>
                    <InputString
                      inputType="text"
                      inputReqired={true}
                      inputPlaceholder="Phone number, username, or email"
                      onChangeInput={setUserName}
                    />
                  </p>
                  <p>
                    <InputString
                      inputType="password"
                      inputReqired={true}
                      inputPlaceholder="Password"
                      onChangeInput={setuserPassword}
                    />
                  </p>
                  <div className="loginButton">
                    <Button btnName="Log in" btnWidth="block" />
                  </div>
                </div>
              </form>
              <div>
                <div className="loginElse">
                  <p>OR</p>
                </div>
                <div className="fbLogin">
                  <Link>
                    <SpriteImage iconName="facebook" />
                    Log in with Facebook
                  </Link>
                </div>
                {showError ? (
                  <ErrorMessage
                    errorType="text"
                    errorMessage="Sorry, your password was incorrect. Please double-check your password."
                  />
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
      <Footer />
    </>
  );
};

export default Login;
