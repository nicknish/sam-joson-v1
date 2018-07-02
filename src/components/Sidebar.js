import React from 'react';
import Link from 'gatsby-link';

export default ({ menuOpen, handleCloseMenu }) => (
  <aside className={`sidebar ${menuOpen ? 'is-active' : ''}`}>
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className="sidebar-link"
            activeClassName="is-active"
            onClick={handleCloseMenu}
            exact={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="sidebar-link"
            activeClassName="is-active"
            onClick={handleCloseMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="sidebar-link"
            activeClassName="is-active"
            onClick={handleCloseMenu}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="sidebar-link"
            activeClassName="is-active"
            onClick={handleCloseMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
);
