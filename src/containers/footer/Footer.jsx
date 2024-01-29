import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="store__footer section__padding">
      <div className="store__footer-heading">
        <h2 className="gradient__text">
          Stay Connected and Explore more, Follow Us for Updates, and Experience Unmatched Footwear Excellence
        </h2>
      </div>
      <div className="store__footer-btn">
        <p>Receive Updates</p>
      </div>
      <div className="store__footer-links">
        <div className="store__footer-links_logo">
          <img src={logo} alt="" />
          <p>Maharashtra, Pune - 411060</p>
        </div>
        <div className="store__footer-links_div">
          <h3>Links</h3>
          <p>Stores</p>
          <p>Social Media</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
        <div className="store__footer-links_div">
          <h3>Company</h3>
          <p>Terms & conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
          <p>FAQs</p>
        </div>
        <div className="store__footer-links_div">
          <h3>Other</h3>
          <p>Customer Reviews</p>
          <p>Gift Cards</p>
          <p>Customer Support</p>
          <p>Delivery details</p>
        </div>
      </div>
      <div className="store__footer-copyright">
        <p>Shoemagine. All rights are reserved.</p>
      </div>
    </div>
  )
}

export default Footer