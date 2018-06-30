import React from 'react';
import Helmet from 'react-helmet';
import Button from '../components/Button';

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <div className="container">
      <h1>Oops! That page can't be found.</h1>
      <Button to="/" type="primary" size="sm">
        Go Home
      </Button>
    </div>
  </div>
);

export default NotFoundPage;
