import React from 'react';
import Helmet from 'react-helmet';
import Modal from 'react-modal';
import config from '../utils/siteConfig';
import favicon from '../images/favicon.ico';
import favicon16x16 from '../images/favicon-16x16.png';
import favicon32x32 from '../images/favicon-32x32.png';

import '../sass/app.scss';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

Modal.setAppElement('#___gatsby');

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
    const { children, data } = this.props;
    const { menuOpen } = this.state;

    return (
      <div className="site">
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
          <link rel="shortcut icon" href={favicon} />
          <meta name="description" content={config.siteDescription} />
          <meta property="og:title" content={config.siteTitle} />
          <meta property="og:url" content={config.siteUrl} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={config.siteTitle} />

          {/* Embedly for YouTube videos */}
          <script>{`
            (function(w, d){
            var id='embedly-platform', n = 'script';
            if (!d.getElementById(id)){
              w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
              var e = d.createElement(n); e.id = id; e.async=1;
              e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
              var s = d.getElementsByTagName(n)[0];
              s.parentNode.insertBefore(e, s);
            }
            })(window, document);
          `}</script>
        </Helmet>

        <Header handleToggleMenu={this.handleToggleMenu} />

        <div className="siteContainer">
          <Sidebar
            menuOpen={menuOpen}
            handleCloseMenu={this.handleCloseMenu}
            resume={data.resume}
          />
          <main className="siteContent">{children()}</main>
        </div>

        {menuOpen && (
          <div className="sidebar-bg" onClick={this.handleCloseMenu} />
        )}
      </div>
    );
  }
}

export const query = graphql`
  query layoutQuery {
    resume: contentfulResume {
      file {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`;

export default Layout;
