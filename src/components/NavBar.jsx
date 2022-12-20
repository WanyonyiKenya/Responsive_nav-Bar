import React, {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const navRef = useRef()

    const showNav = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#'>My Account</a>
            <a href='/#'>Blog</a>
            <a href='/#'>Finance</a>
            <a href='/#'>About me</a>
            <button className='nav-btn  nav-close' onClick={showNav}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNav}>
            <FaBars />
        </button>
    </header>
  )
}

export default NavBar