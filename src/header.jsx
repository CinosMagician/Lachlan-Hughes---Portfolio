import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavTabs from './components/NavTabs';

const Header = ({ currentPage }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-purp text-white">
      <h1 className="m-0">
        <Link to="/about" className="text-white text-decoration-none">
          Lachlan Hughes
        </Link>
      </h1>
      <NavTabs currentPage={currentPage} />
    </header>
  );
};

export default Header;
