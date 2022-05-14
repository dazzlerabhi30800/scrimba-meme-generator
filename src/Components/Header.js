import React from 'react';
import './Header.css';


function Navbar() {
    return(
        <header className='header'>
            <img src="./images/troll-face.png" width="50px" height="50px" alt="" />
            <h1 className="heading">Meme Generator</h1>
            <h4 className="title">React Course - Project 3</h4>
        </header>
    )
}

export default Navbar;