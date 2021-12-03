import './Home.css';
import React, { useState } from 'react';
import gamersLogo from './images/GamersLogo.png';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
  
  function Home() {
  
    const [values, setValues] = useState({
        userName: "",
        password: "",
      });
  
      const [submitted, setSubmitted ] = useState(false);
      const [valid, setValid] = useState(false);
  
      const handleUserNameChange = (event) => {
        setValues({...values, userName: event.target.value})
      }
  
      const handlePasswordChange = (event) => {
        setValues({...values, password: event.target.value})
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        if(values.userName && values.password) {
          setValid(true);
        }
        setSubmitted(true);
      }
      let navigate = useNavigate();
      function handleLoginClick () {
        console.log("CLICKED")
        navigate('/')
      }
      function handleRegisterClick () {
        console.log("CLICKED")
        navigate('/Register')
      }
    return (
        <div className="Home">
        <header className="Home-header">
        <img id="picture" src={gamersLogo} alt="GamersOnly Logo"/>  

        <button id="button1" onClick = {handleLoginClick}> Login</button>
        <button id="button2" onClick = {handleRegisterClick}> Sign up</button>

      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? <div className="success-message">Success! Thank you for signing in!</div>: null}
          <input
            onChange={handleUserNameChange}
            value={values.userName}
            id="user-name"
            className="form-field"
            type="text"
            placeholder="Username"
            name="userName"
          />
          {submitted && !values.userName ? <span>Please enter a username</span>: null}
  
          <input
            onChange={handlePasswordChange}
            value={values.password}
            id="user-password"
            className="form-field"
            type="password"
            placeholder="Password"
            name="password"
          />
          {submitted && !values.password ? <span>Please enter a password</span>: null}
  
          <button className="form-field" type="submit">Sign In</button>
          {/* <button className="form-field" onClick= {registerHandler}>Register</button> */}
        </form>
      </div>
  
          <p>
            Find some Gamers
          </p>
        </header>
  
      </div>
    );
  }
  
//   function Next() {
//     return (
//       <div>
//         <h2>Sign In</h2>
//       </div>
//     );
//   }
  
  // function Register() {
  //   return (
  //     <div>
  //       <h2>Register</h2>
  //     </div>
  //   );
  // }

  export default Home;