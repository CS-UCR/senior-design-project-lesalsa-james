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
                <h1 className='title'> Find some gamers, Gamer!</h1>
                <h2 className='game'>Game: </h2>
                <h2 className='rank'>Rank: </h2>
                <h2 className='playstyle'>Playstyle: </h2>
                <h2 className='numplayers'># Players: </h2>
                <button onClick={() => {history.push('/chat')}} className='chat'>Chat Anonymously</button>

                <button className='val'>Valorant</button>
                <button className='league'>League</button>
              
                <button className='bronze'>Bronze</button>
                <button className='silver'>Silver</button>
                <button className='gold'>Gold</button>
                <button className='plat'>Platinum</button>
                <button className='diamond'>Diamond</button>
              
                <button className='casual'>Casual</button> 
                <button className='competitive'>Competitive</button> 

                <input className='enter'></input>  

            </div>
        );
}
 
export default Home;