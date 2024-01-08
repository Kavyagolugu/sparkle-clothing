import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

// helmet setup for the title
const HelmetSetup = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* title to be displayed on the browser */}
        <title>{title}</title>
        {/* <link rel="icon" href={href} /> */}
      </Helmet>
    </HelmetProvider>
  );
};

// prop type validation for helmet setup
HelmetSetup.propTypes = {
  title: PropTypes.string
};

export default HelmetSetup;
