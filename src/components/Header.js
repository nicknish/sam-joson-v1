import React from 'react';
import Link from 'gatsby-link';
import FaBars from 'react-icons/lib/fa/bars';

export default ({ handleToggleMenu }) => (
  <header className="siteHeader">
    <span className="siteHeader-title">
      <Link to="/" className="siteHeader-titleCopy">
        Sam Joson
      </Link>
    </span>
    <button className="siteHeader-menuBtn" onClick={handleToggleMenu}>
      <FaBars />
    </button>
  </header>
);
