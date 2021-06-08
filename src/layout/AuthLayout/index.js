import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../components/AppHeader';

const AuthLayout = ({ children }) => (
  <div className="auth-layout">
    <AppHeader />
    <main>{children}</main>
  </div>
);

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
