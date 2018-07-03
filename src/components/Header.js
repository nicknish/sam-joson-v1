import React from 'react';
import Link from 'gatsby-link';
import Logo from '../images/logo_v1.png';
import FaBars from 'react-icons/lib/fa/bars';

export default ({ handleToggleMenu }) => (
  <header className="siteHeader">
    <Link to="/" className="siteHeader-logoLink">
      <img src={Logo} alt="Sam Scratch logo" className="siteHeader-logo" />
    </Link>
    <button className="siteHeader-menuBtn" onClick={handleToggleMenu}>
      <FaBars />
    </button>
  </header>
);
