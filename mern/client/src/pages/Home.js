import React, { Component, useEffect } from 'react';
import './homeStyles.css'
import { useHistory } from "react-router-dom";
import logo from "./GamersLogo.png";




function Home() {
        let history = useHistory(); 

        return (
            <div className='page' id="landing-wrapper">
                <img src={logo} alt="stuff"/> 
                <button onClick={() => {history.push('/logIn')}} className='primary'>Sign Up / Login</button>;
                <header id="showcase">
                    <h1 className='title'> 
                        <div className='fade-in-text' > Welcome to GamersOnly</div>
                    </h1> 
                </header>
                <br></br>
                <br></br>
                <div id="content" class="container">
                    If you're looking for fellow lonely gamers, you've come to the right place! Find your dream five stack or duo partner today.
                </div>
               
            </div>
        );
}
 
export default Home;