import React from 'react';

const Footer = ({ handlePageChange }) => {
  return (
    <footer className="footer">
        <div className='footer-buttons'>
            <a href='https://github.com/CinosMagician' className='footer-button'>
                <img src='src/assets/GitHub.svg' alt='GitHub Button'/>
            </a>
            <button onClick={() => handlePageChange('Contact')} className="footer-button">
                <img src="src/assets/Email.svg" alt="Email Button" />
            </button>
            <a href='https://www.google.com/' className='footer-button'>
                <img src='src/assets/QMark.svg' alt='3 Button'/>
            </a>
        </div>
      <p>&copy; 2024 CinosMagician.</p>
    </footer>
  );
};

export default Footer;
