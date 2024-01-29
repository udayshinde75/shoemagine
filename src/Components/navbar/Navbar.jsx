import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='store__navbar'>
      <div className='store__navbar-links'>
        <div className='store__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className="store__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#About">About</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#products">Products</a></p>
          <p><a href="#buynow">Buy Now</a></p>
          <p><a href="#bestsellers">Best Sellers</a></p>
        </div>
      </div>
      <div className="store__navbar-sign">
        <button type='button'>Sign Up</button>
      </div>
      <div className="store__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="store__navbar-menu_container">
            <div className="store__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#About">About</a></p>
              <p><a href="#features">Features</a></p>
              <p><a href="#products">Products</a></p>
              <p><a href="#buynow">Buy Now</a></p>
              <p><a href="#bestsellers">Best Sellers</a></p>
              <div className="store__navbar-menu_container-links-sign">
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar