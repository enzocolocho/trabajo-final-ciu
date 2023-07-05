import React from 'react';
import '../footer.css';
import instagram from '../imagenes/signo-de-instagram.png';
import twitter from '../imagenes/signo-de-twitter.png';
import github from '../imagenes/signo-de-github.png';
import gohan from '../imagenes/gohan.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="contacto">
                <p>+54 11 2806 4376</p>
                <p>enzo.colocho.99@gmail.com</p>
            </div>
            <div className="gohan">
                <img src={gohan} alt="gohan" width="auto" height="150px"/>
            </div>
            <div className="redes">
                <div className="instagram">
                    <a href="https://www.instagram.com/enzocolochoo/" target='__blank'>
                        <img src={instagram} alt="instagram" />
                    </a>
                </div>
                <div className="twitter">
                    <a href="https://twitter.com/EnzoColochoo" target='__blank'>
                        <img src={twitter} alt="twitter" />
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/enzocolocho" target='__blank'>
                        <img src={github} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;