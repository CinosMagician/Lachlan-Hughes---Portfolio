import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NavTabs.css';

const NavTabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const currentPage = localStorage.getItem('currentPage');

  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="nav-container">
      <button className="menu-button" onClick={handleMenuToggle}>
        &#9776;
      </button>
      <ul className={`nav ${isMenuOpen ? 'hide' : 'show'}`}>
        <li className="nav-item">
          <Link
            to="/about"
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
      </ul>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="dropdown-menu"
            variants={navVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="nav">
              <li className="nav-item">
                <Link
                  to="/about"
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resume"
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavTabs;