import Modal from "@mui/material/Modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase";
const Authentication = (props) => {
  const [status, setStatus] = useState("Sign-in");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});

  const handleStatusSignIn = () => setStatus("Sign-up");
  const handleStatusSignUp = () => setStatus("Sign-in");

  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignOut = async () => {
    await signOut(auth);
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("result", result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  return (
    <div>
      {status === "Sign-in" ? (
        <Modal
          className="authentication-modal-signin"
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="authentication-container">
            <div className="Signin">
              <h1>Sign In</h1>
              <IoMdClose onClick={props.handleClose} />
            </div>

            <p>
              Don't have an account yet?{" "}
              <span onClick={handleStatusSignIn}>Sign up</span> for free
            </p>
            <div className="input-container">
              <input
                placeholder="Your email"
                onChange={(event) => setSignInEmail(event.target.value)}
                value={signInEmail}
              />
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(event) => setSignInPassword(event.target.value)}
                  value={signInPassword}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <p className="forgot-password">Forgot your password?</p>
            <button className="signin-button" onClick={handleSignIn}>
              Log In
            </button>
            <p className="or">or Log-in with</p>
            <button className="google-button" onClick={signInWithGoogle}>
              {" "}
              <FcGoogle />
              Sign in with Google
            </button>
          </div>
        </Modal>
      ) : (
        <Modal
          className="authentication-modal-signup"
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="authentication-container">
            <div className="Signin">
              <h1>Sign Up</h1>
              <IoMdClose onClick={props.handleClose} />
            </div>

            <p>
              Already have an account?{" "}
              <span onClick={handleStatusSignUp}>Log in</span>
            </p>
            <div className="input-container">
              <input
                placeholder="Name"
                onChange={(event) => setSignUpName(event.target.value)}
                value={signUpName}
              />
              <input
                placeholder="Your email"
                onChange={(event) => setSignUpEmail(event.target.value)}
                value={signUpEmail}
              />
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(event) => setSignUpPassword(event.target.value)}
                  value={signUpPassword}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button className="signin-button" onClick={handleSignUp}>
              Sign Up
            </button>
            <p className="or">or Sign Up with</p>
            <button className="google-button" onClick={signInWithGoogle}>
              {" "}
              <FcGoogle />
              Sign up with Google
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Authentication;
