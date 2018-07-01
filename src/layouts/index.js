import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import config from '../utils/siteConfig';
import favicon from '../images/favicon.ico';
import '../sass/app.scss';
import FaBars from 'react-icons/lib/fa/bars';

export class Layout extends React.Component {
  state = {
    menuOpen: false
  };

  handleToggleMenu = () => {
    this.setState(prevState => ({
      ...prevState,
      menuOpen: !prevState.menuOpen
    }));
  };

  handleCloseMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { children } = this.props;
    const { menuOpen } = this.state;

    return (
      <div className="site">
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={favicon} />
          <meta name="description" content={config.siteDescription} />
          <meta property="og:title" content={config.siteTitle} />
          <meta property="og:url" content={config.siteUrl} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={config.siteTitle} />
        </Helmet>

        <header className="siteHeader">
          <span className="siteHeader-title">
            <Link to="/" className="siteHeader-titleCopy">
              Sam Joson
            </Link>
          </span>
          <button
            className="siteHeader-menuBtn"
            onClick={this.handleToggleMenu}
          >
            <FaBars />
          </button>
        </header>

        <div className="siteContainer">
          <aside className={`sidebar ${menuOpen ? 'is-active' : ''}`}>
            <nav>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="sidebar-link"
                    activeClassName="is-active"
                    onClick={this.handleCloseMenu}
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
                    onClick={this.handleCloseMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="sidebar-link"
                    activeClassName="is-active"
                    onClick={this.handleCloseMenu}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="sidebar-link"
                    activeClassName="is-active"
                    onClick={this.handleCloseMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="siteContent">{children()}</main>
        </div>

        {menuOpen && (
          <div className="sidebar-bg" onClick={this.handleCloseMenu} />
        )}
      </div>
    );
  }
}

export default Layout;
