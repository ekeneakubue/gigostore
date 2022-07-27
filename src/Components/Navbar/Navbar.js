import React from 'react'
import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'



export default function Navbar(){
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }
  return(
    <header>
        <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#'>My Work</a>
            <a href='/#'>Blogs</a>
            <a href='/#'>About</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>      
  )
}