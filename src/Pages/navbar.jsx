import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [navBackgroundImage, setNavBackgroundImage] = useState(''); // State to manage background image
  const [navBackgroundColor, setNavBackgroundColor] = useState(''); // State to manage background color

  // Toggle the navbar visibility
  const toggleNav = () => {
    var navRightElement = document.getElementById("navRight");
    var burgerElement = document.getElementById("burger");
    burgerElement.classList.toggle("toggle");

    if (navRightElement.style.display === 'none' || navRightElement.style.display === '') {
      navRightElement.style.display = 'flex'; // Show the nav
      setNavBackgroundColor('black'); // Set the background color of nav to black when the menu is open
    } else {
      navRightElement.style.display = 'none'; // Hide the nav
      setNavBackgroundColor('transparent'); // Set the background color of nav to transparent when the menu is closed
    }
  }

  // Close the navbar when a link is clicked, only for screen widths less than 700px
  const handleLinkClick = () => {
    if (window.innerWidth < 700) {
      var navRightElement = document.getElementById("navRight");
      var burgerElement = document.getElementById("burger");
      navRightElement.style.display = 'none'; // Hide the nav
      setNavBackgroundColor('transparent'); // Reset background color
      burgerElement.classList.remove("toggle"); // Remove the toggle class to reset burger icon
    }
    window.scrollTo(0, 0); // Scroll to the top of the page when a NavLink is clicked
  }

  // Check the scroll position to change the background image of the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavBackgroundImage('linear-gradient(to bottom, #000000ba 70%, transparent)'); // Set gradient when scrolled down
      } else {
        setNavBackgroundImage(''); // Remove background image when at the top of the page
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ backgroundColor: navBackgroundColor, backgroundImage: navBackgroundImage }}>
      <div className="mobile">
        <a id="burger" onClick={toggleNav} className="toggle-button burger burgerinitial">
          <span className="bar line1"></span>
          <span className="bar line2"></span>
          <span className="bar line3"></span>
        </a>
      </div>

      <div id="navRight" className="navRight">
        <ul>
          <li><NavLink to="/" className="menuItem" end onClick={handleLinkClick}>Home</NavLink></li>
          <li><NavLink to="/problem" className="menuItem" onClick={handleLinkClick}>The Problem</NavLink></li>
          <li><NavLink to="/solution" className="menuItem" onClick={handleLinkClick}>Our Solution</NavLink></li>
          <li><NavLink to="/about" className="menuItem" onClick={handleLinkClick}>About Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
