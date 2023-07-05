import React from 'react';
import '../header.css';
import logo from '../imagenes/logo-frikis.png';


const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="logo" width="64px" height="64px" />
                <h1>Frikis Dragon Ball</h1>
            </div>
            <div className="menu">
                <div className="personajes">
                    <a href="#main-personajes">Personajes</a>
                </div>
                <div className="about-me">
                    <a href="#main-about-me">About me</a>
                </div>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
                </style>
            </div>
        </div>
    );
}

export default Header;