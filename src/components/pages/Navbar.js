import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCarSportSharp } from 'react-icons/io5';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

 
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleCLick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/Home' className="navbar-logo" onClick={closeMobileMenu}>
                        <IoCarSportSharp className="navbar-icon"/>
                        S-CARS
                    </Link>
                    <div className="menu-icon" onClick={handleCLick}>
                        {click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to='/Home' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Cars' className="nav-links" onClick={closeMobileMenu}>
                                Cars
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Home' className="nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/Home' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle="btn--outline">SIGN UP NOW
                                    </Button>
                                </Link>
                            ) :  (
                                <Link to='/Home' className="btn-link">
                                    <Button buttonStyle="btn--outline"
                                    buttonSize="btn--mobile">
                                        SIGN UP NOW
                                    </Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;