import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import {motion} from 'framer-motion'



function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <motion.div className="navbar-container"
                 whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)"
                }}>
                    <Link to="/home" className="navbar-logo"
                       
                    >
                        TA
                        
                    </Link>
                </motion.div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times slow-spin' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <motion.li className='nav-item'
                    whileHover={{
                        scale: 1.3,
                        color: '#f8e112'
                    }}
                    >
                        <Link className="nav-links" to="/home" onClick={closeMenu}>
                            HOME
                        </Link>
                    </motion.li>
                    <motion.li
                    whileHover={{
                        scale: 1.3,
                        color: '#f8e112'
                    }}>
                        <Link className="nav-links" to="/work" onClick={closeMenu}>
                            WORK
                        </Link>
                    </motion.li>
                    <motion.li
                    whileHover={{
                        scale: 1.3,
                        color: '#f8e112'
                    }}>
                        <Link className="nav-links" to="/aboutus" onClick={closeMenu}>
                            ABOUT
                        </Link>
                    </motion.li>
                    <motion.li
                    whileHover={{
                        scale: 1.3,
                        color: '#f8e112'
                    }}>
                        <Link className="nav-links" to="/contactus" onClick={closeMenu}>
                            CONTACT
                        </Link>
                    </motion.li>
                </ul>

            </nav>
            

            
        </>
    );
}

export default Header;