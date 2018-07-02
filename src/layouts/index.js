import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import favicon from '../images/favicon.ico';
import '../sass/app.scss';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

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

        <Header handleToggleMenu={this.handleToggleMenu} />

        <div className="siteContainer">
          <Sidebar menuOpen={menuOpen} handleCloseMenu={this.handleCloseMenu} />
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
