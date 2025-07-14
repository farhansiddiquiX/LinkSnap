// Footer.jsx
import React from 'react'
import './Footer.css'
import { FiPhone, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FiPhone className="icon" /> +91‑7304733943</p>
          <p><FiMail className="icon" /> farhaansiddiqui7861@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow</h4>
          <p><a href="https://github.com/farhansiddiquiX" target="_blank" rel="noopener noreferrer">GitHub - farhansiddiquiX</a></p>
          <p><a href="https://linkedin.com/in/farhan-siddiqui7" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
        <div className="footer-section">
          <h4>About LinkSnap</h4>
          <p>
            LinkSnap is your lightning-fast, web-based tool for shortening long URLs into clean, shareable links in seconds. 
            Simply paste your link, click shorten, and copy your new URL—no sign-up or extensions required.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} LinkSnap. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
