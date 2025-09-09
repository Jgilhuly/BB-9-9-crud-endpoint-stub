import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-links">
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/users" className="nav-link">
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
