import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const Contact = ({ data }) => {
  const siteTitle = `Contact - ${config.siteTitle}`;
  const postNode = { title: siteTitle };

  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <div className="container">
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
