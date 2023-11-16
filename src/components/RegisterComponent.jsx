import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
import DevCoveLogo from "../assets/DevCoveLogo.png";
import { useNavigate } from "react-router-dom";
import { getUniqueID } from "../helpers/getUniqueId";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";




export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created!");
      postUserData({
        userID: getUniqueID(),
        name: credentails.name,
        email: credentails.email,
        imageLink:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      });
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <div className="container" style={containerStyles}>
      <div className="login-wrapper" style={logoContainerStyles}>
        <img src={Dragon} alt="Dragon Photo" style={logoStyles } />
      </div>
      <div className="login-wrapper" style={registerContainerStyles}>
        <div className="login-wrapper-inner">
          <h1 className="heading" style={{ fontSize: "4em" , marginBottom: "-.10em"}}>Join DevCove Today</h1>
          <p>Your Tech Odyssey Begins Here</p>

          <div className="auth-inputs">
            <input
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  name: event.target.value,
                })
              }
              type="text"
              className="common-input"
              placeholder="Your Name"
            />
            <input
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  email: event.target.value,
                })
              }
              type="email"
              className="common-input"
              placeholder="Email"
            />
            <input
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  password: event.target.value,
                })
              }
              type="password"
              className="common-input"
              placeholder="Password (6 or more characters)"
            />
          </div>
          <button onClick={register} className="login-btn">
            Agree & Join
          </button>
        </div>

        <hr className="hr-text" data-content="or" />
        <div className="google-btn-container">
          <p className="go-to-signup">
            Already on DevCove?{" "}
            <span className="join-now" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
