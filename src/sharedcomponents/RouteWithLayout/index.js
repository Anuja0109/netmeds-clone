import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(matchProps) => (
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.node.isRequired,
  layout: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default RouteWithLayout;
