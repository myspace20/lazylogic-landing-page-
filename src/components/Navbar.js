import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";
import logo from '../Lazy Log/Lazy Logo1.png'
 
export default function Navbar({handleMenu}) {
  return (
    <nav>
        <div className='logo-group'>
            <NavLink to='/' className='logo'>
                <img src={logo} />
            </NavLink>
            <div className='logo-letter'>
                <h1 className='logo-h1'>LazyLogic</h1>
                <span>Doing the impossible</span>
            </div>
        </div>
        <ul className='desktop-links'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <div className='hamburger'>
            <HiMenu style={{fontSize:'50px', color:'lightGray'}} onClick={handleMenu}/>
        </div>
        <div className='get-in-touch-desktop'>
            <button onClick={useNavigate('/contact')}>Get in touch</button>
        </div>
    </nav>
  )
}
