import Header from "../components/Header";
import Footer from "../components/Footer";
import '../style/AccountCreation.css'
import Button from "../components/button";


import React, { useState } from 'react';

export default function SignInForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [birthdateError, setBirthdateError] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = (e) => {
    e.preventDefault();

    const namePattern = /^[A-Za-z]+$/;
    const birthdatePattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!firstName.match(namePattern)) {
      setFirstNameError('Please enter a valid first name (only letters).');
      return;
    } else {
      setFirstNameError('');
    }

    if (!lastName.match(namePattern)) {
      setLastNameError('Please enter a valid last name (only letters).');
      return;
    } else {
      setLastNameError('');
    }

    if (!birthdate.match(birthdatePattern)) {
      setBirthdateError('Please enter a valid birthdate (dd/mm/yyyy).');
      return;
    } else {
      setBirthdateError('');
    }

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
      <div className="signInCard">
      <h2>Sign In</h2>
      <form className="signInForm" onSubmit={validateForm}>
        <div>
            <label>First Name:</label>
            <br />
            <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            />
            <span className="error">{firstNameError}</span>
            <br />
        </div >
        <div>
            <label>Last Name:</label>
            <br />
            <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
            />
            <span className="error">{lastNameError}</span>
            <br />
        </div>
        <div>
            <label>Birthdate (dd/mm/yyyy):</label>
            <br />
            <input
            type="text"
            value={birthdate}
            onChange={handleBirthdateChange}
            required
            />
            <span className="error">{birthdateError}</span>
            <br />
        </div>
        <div>
            <label>Email:</label>
            <br />
            <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            />
            <span className="error">{emailError}</span>
            <br />
            <label>Password:</label>
            <br />
            <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            />
            <span className="error">{passwordError}</span>
            <br />
        </div>
        <p className='textLink'>Already have an account ? <a className='logInLink' href='/login'>Log in</a></p>

        <Button to="/loan_application" text="Create an account" />
      </form>
    </div>
    <Footer />
    </div>
  );
}

