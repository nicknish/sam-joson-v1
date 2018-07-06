import React from 'react';
import Link from 'gatsby-link';
import IoSocialLinkedin from 'react-icons/lib/io/social-linkedin';

import config from '../utils/siteConfig';
import Paw from './svg/Paw';

const SidebarItem = props => (
  <li className="sidebar-navItem">
    <Link className="sidebar-link" activeClassName="is-active" {...props}>
      <Paw className="sidebar-linkPaw" />
      {props.children}
    </Link>
  </li>
);

const SidebarSocialItem = props => (
  <li className="social-item">
    <a href={props.to}>{props.children}</a>
  </li>
);

export default ({ menuOpen, handleCloseMenu }) => (
  <aside className={`sidebar ${menuOpen ? 'is-active' : ''}`}>
    <nav>
      <ul className="sidebar-nav">
        <SidebarItem to="/" onClick={handleCloseMenu} exact={true}>
          Home
        </SidebarItem>
        <SidebarItem to="/about" onClick={handleCloseMenu}>
          About
        </SidebarItem>
        <SidebarItem to="/portfolio" onClick={handleCloseMenu}>
          Portfolio
        </SidebarItem>
        <SidebarItem to="/contact" onClick={handleCloseMenu}>
          Contact
        </SidebarItem>
      </ul>

      <ul className="sidebar-social social">
        <SidebarSocialItem to={config.socialLinkedIn}>
          <IoSocialLinkedin className="social-icon social-icon--linkedin" />
        </SidebarSocialItem>
      </ul>
    </nav>
  </aside>
);
