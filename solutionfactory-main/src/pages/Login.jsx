import React, { useState } from 'react';
import '../style/Login.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/button";

function LoginForm() {
  const [email, setEmail] = useState('example@example.com');
  const [password, setPassword] = useState('password');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    // Perform further actions like submitting the form
    // or making an API request
  };

  return (
    <div>
      <Header />
      <div className='loginCard'>
        <h2>Happy to see you again!</h2>
        <form className='connexionForm' onSubmit={validateForm}>
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
          <p className='textLink'>Don't have an account ? <a className='signInLink' href='/signin'>Sign in</a></p>
          <Button to="/loan_application" text="Log in" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginForm;
