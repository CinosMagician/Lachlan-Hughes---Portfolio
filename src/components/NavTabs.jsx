import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NavTabs.css'; // You can update the CSS later

const NavTabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get current location
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Define animation variants
  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // Spring animation for a more natural motion
        stiffness: 260, // Adjust for snappiness
        damping: 20, // Control the bounce
        duration: 0.3,
        ease: "easeOut", // Smoother easing curve
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2, // Quicker exit for responsiveness
        ease: "easeIn",
      },
    },
  };

  // Function to check if the current route matches the given path
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <h1 className="logo">Lachlan Hughes</h1>
      <button className="menu-button" onClick={handleMenuToggle}>
        &#9776;
      </button>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/"
              className={isActive('/') ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={isActive('/resume') ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
            >
              Hire Me!
            </Link>
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="dropdown-menu"
            variants={navVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="dropdown-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={isActive('/') ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resume"
                  className={isActive('/resume') ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire Me!
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavTabs;
