import React from 'react';
import Link from 'gatsby-link';

const Menu = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/" exact activeClass="navItem">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClass="navItem">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio/" activeClass="navItem">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClass="navItem">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
