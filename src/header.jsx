import React from 'react';
import NavTabs from './components/NavTabs';

const Header = ({ currentPage }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-purp text-white">
      <h1 className="m-0">Lachlan Hughes</h1>
      <NavTabs currentPage={currentPage} />
    </header>
  );
};

export default Header;
