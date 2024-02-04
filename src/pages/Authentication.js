// Authentication.js

import React, { useState } from "react";

import { loginUser, registerUser } from "./../Firebase";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [process, setProcess] = useState("email");
  const [showemail, setShowemail] = useState(true);
  const [showphone, setShowphone] = useState(false);

  const handleSignIn = async () => {
    console.log("Sign In");
    const response = await loginUser(email, password);
    console.log("User Login", response);
    window.alert("User Created", response);
    // Handle sign-in logic here (e.g., validate email/phone and password).
  };

  const handleSignUp = async () => {
    const response = await registerUser(email, password);
    console.log("User CREATED", response);
    window.alert("User Created", response);
  };

  const onEmailshowhandler = () => {
    setShowemail(true);
    setShowphone(false);
  };
  const onPhoneshowhandler = () => {
    setShowphone(true);
    setShowemail(false);
  };

  return (
    <div className="authentication-container">
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <div className="sign-in-options">
        <label>
          <input
            onChange={(e) => setIsSignUp(!e.target.checked)}
            type="radio"
            name="sign-in-option"
            checked={!isSignUp}
          />
          SignIn
        </label>
        <label>
          <input
            onChange={(e) => setIsSignUp(e.target.checked)}
            type="radio"
            name="sign-in-option"
            checked={isSignUp}
          />
          SignUp
        </label>
      </div>

      <form>
        {/* <div className="sign-in-options">
          <label>
            <input
              onChange={onEmailshowhandler}
              type="radio"
              name="sign-in-option"
              value="email"
            />
            Email
          </label>
          <label>
            <input
              onChange={onPhoneshowhandler}
              type="radio"
              name="sign-in-option"
              value="email"
            />
            Phone
          </label>
        </div> */}

        {process === "email" && showemail ? (
          <div className="email-auth">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}

        <button type="button" onClick={handleSignIn}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Authentication;
