import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import v1 from '../video/StarNight.mp4';
import classes from './styles/BackgroundVideo.module.css';


function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="navbar-logo">
                        TA
                        
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times slow-spin' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link className="nav-links" to="/home" onClick={closeMenu}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/work" onClick={closeMenu}>
                            WORK
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/aboutus" onClick={closeMenu}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/contactus" onClick={closeMenu}>
                            CONTACT
                        </Link>
                    </li>
                </ul>

            </nav>
            <div>
                <div className="heading">
                    <div className={classes.Container}>
                        <video width="100%" height="100%" autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                            <source src={v1} type="video/mp4" />
                        </video>
                        <div className={classes.Content}>
                            <div className={classes.SubContent} >
                                <h1 className="social">TITANIUM ARTS</h1>
                                <p>This is my React JS website to portray my work of art</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;