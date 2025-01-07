import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerSection">
          <h3 className="footerTitle">About Us</h3>
          <p className="footerText">Eat-Now is the fastest growing online food delivery service. We bring food from your favorite restaurants directly to your doorstep.</p>
        </div>
        <div className="footerSection">
          <h3 className="footerTitle">Quick Links</h3>
          <ul className="footerList">
            <li><a href="/" className="footerLink">Home</a></li>
            <li><a href="/menu" className="footerLink">Menu</a></li>
            <li><a href="/about" className="footerLink">About Us</a></li>
            <li><a href="/contact" className="footerLink">Contact</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h3 className="footerTitle">Contact Us</h3>
          <p className="footerText">Email: support@eatnow.com</p>
          <p className="footerText">Phone: +123 456 7890</p>
        </div>
        <div className="footerSection">
          <h3 className="footerTitle">Follow Us</h3>
          <ul className="footerSocialList">
            <li><a href="https://www.facebook.com" className="footerSocialLink">Facebook</a></li>
            <li><a href="https://www.twitter.com" className="footerSocialLink">Twitter</a></li>
            <li><a href="https://www.instagram.com" className="footerSocialLink">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p className="footerText">© 2025 Eat-Now. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
