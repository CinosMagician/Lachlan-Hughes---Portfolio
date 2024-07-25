import React from 'react';

const Footer = ({ handlePageChange }) => {
  return (
    <footer className="footer bg-purp">
        <div className='footer-buttons'>
            <a href='https://github.com/CinosMagician' className='footer-button'>
                <img src='./assets/GitHub.svg' alt='GitHub Button'/>
            </a>
            <button onClick={() => handlePageChange('Contact')} className="footer-button">
                <img src="./assets/Email.svg" alt="Email Button" />
            </button>
            <a href='https://au.linkedin.com/' className='footer-button'>
                <img src='./assets/lin.svg' alt='Linkedin Button'/>
            </a>
        </div>
      <p>&copy; 2024 CinosMagician.</p>
    </footer>
  );
};

export default Footer;
