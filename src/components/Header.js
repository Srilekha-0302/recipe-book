import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">Tasty Bites</Link>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/recipes">MY RECIPES</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;