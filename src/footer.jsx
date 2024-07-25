import React from 'react';

import githubIcon from './assets/GitHub.svg';
import linkedinIcon from './assets/lin.svg';
import emailIcon from './assets/Email.svg';

const Footer = ({ handlePageChange }) => {
  return (
    <footer className="footer bg-purp">
        <div className='footer-buttons'>
            <a href='https://github.com/CinosMagician' className='footer-button'>
                <img src={githubIcon} alt='GitHub Button'/>
            </a>
            <button onClick={() => handlePageChange('Contact')} className="footer-button">
                <img src={emailIcon} alt="Email Button" />
            </button>
            <a href='https://au.linkedin.com/' className='footer-button'>
                <img src={linkedinIcon} alt='Linkedin Button'/>
            </a>
        </div>
      <p>&copy; 2024 CinosMagician.</p>
    </footer>
  );
};

export default Footer;
