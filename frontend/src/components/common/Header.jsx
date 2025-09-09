import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">CRUD Manager</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
