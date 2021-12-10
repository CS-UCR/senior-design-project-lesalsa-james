import './Home.css';
import React, { useState } from 'react';
import gamersLogo from './images/GamersLogo.png';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
// import React, { useState } from 'react';

  // This site has 3 pages, all of which are rendered
  // dynamically in the browser (not server rendered).
  //
  // Although the page does not ever refresh, notice how
  // React Router keeps the URL up to date as you navigate
  // through the site. This preserves the browser history,
  // making sure things like the back button and bookmarks
  // work properly.
  
  export default function BasicExample() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Next">Sign In</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          {/* <Routes>
            <Route exact path="/" element = {<Home />} />
            </Route>
            {/* <Route path="/Next">
              <Next />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>}
          </Routes> */}
        </div>
      </Router>
    );
  }
  
  // You can think of these components as "pages"
  // in your app.
  
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
    return (
        <div className="Home">
        <header className="Home-header">
        <img class="picture" src={gamersLogo} alt="GamersOnly Logo"/>  

        <button class="button1"> Login</button>
        <button class="button2"> Sign up</button>

  
  
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
  
//   function Register() {
//     return (
//       <div>
//         <h2>Register</h2>
//       </div>
//     );
//   }

//export default Landing;