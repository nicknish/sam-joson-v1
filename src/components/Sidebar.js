import React from 'react';
import Link from 'gatsby-link';
import Paw from './svg/Paw';

const SidebarLink = props => (
  <Link className="sidebar-link" activeClassName="is-active" {...props}>
    <Paw className="sidebar-linkPaw" />
    {props.children}
  </Link>
);

export default ({ menuOpen, handleCloseMenu }) => (
  <aside className={`sidebar ${menuOpen ? 'is-active' : ''}`}>
    <nav>
      <ul>
        <li>
          <SidebarLink to="/" onClick={handleCloseMenu} exact={true}>
            Home
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/about" onClick={handleCloseMenu}>
            About
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/portfolio" onClick={handleCloseMenu}>
            Portfolio
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/contact" onClick={handleCloseMenu}>
            Contact
          </SidebarLink>
        </li>
      </ul>
    </nav>
  </aside>
);
