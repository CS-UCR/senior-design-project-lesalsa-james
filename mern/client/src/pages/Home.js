import React, { Component, useEffect } from 'react';
import './homeStyles.css'
import { useHistory } from "react-router-dom";
import logo from "./GamersLogo.png";





function Home() {
        let history = useHistory(); 

        return (
            <div className='page'>
                <img src={logo} alt="stuff"/> 
                <button onClick={() => {history.push('/logIn')}} className='primary'>Sign Up / Login</button>;
                <h1 className='title'> Welcome to GamersOnly</h1>
               

                


            </div>
        );
}
 
export default Home;