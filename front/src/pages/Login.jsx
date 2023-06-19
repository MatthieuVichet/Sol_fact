import React, { useState } from "react";
import "../style/Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/button";
import api_link from "../constants";

function LoginForm() {
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("password");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailPattern)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else {
      setPasswordError("");
    }
    // Submit the form or perform further actions here
    handleSubmission(email, password);
  };

  const handleSubmission = (email, password) => {
    // Handle the submission of email and password
    fetch(api_link + "/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        // store the token in the local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_id", data.user_id);

        if (data.token) {
          window.location.href = "/loan_application";
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };
  return (
    <div>
      <Header />
      <div className="loginCard">
        <h2>Happy to see you again!</h2>
        <form className="connexionForm" onSubmit={validateForm}>
          <div>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <span className="error">{emailError}</span>
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span className="error">{passwordError}</span>
          </div>
          <p className="textLink">
            Don't have an account ?{" "}
            <a className="signInLink" href="/signin">
              Sign in
            </a>
          </p>
          <Button
            onClick={() => handleSubmission(email, password)}
            text="Log in"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginForm;
