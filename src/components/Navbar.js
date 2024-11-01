import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'
import {Link} from 'react-scroll'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
            <Link to='home' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}><img src={logo} alt='logo'/></Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='home' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='aboutUs' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='events' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Events</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='calendar' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Calendar</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='research' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Research</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='team' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Exec</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='joinUs' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Join Us</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
