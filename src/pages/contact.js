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

      <div className="page container">
        <PageTitle>Contact</PageTitle>
        <p>
          Contact me through here or email me at{' '}
          <a href={`mailto:${config.socialEmail}`}>{config.socialEmail}</a>.
          I'll try to get back to you within 24 hours.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
