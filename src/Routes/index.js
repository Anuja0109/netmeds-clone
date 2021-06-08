import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from '../sharedcomponents/RouteWithLayout';
import { MainLayout, AuthLayout } from '../layout';
import {
  HOME,
  SIGNIN,
  CART,
  PRESCRIPTIONS,
  PRODUCT_DETAILS,
} from './RouteEndpoints';
import { Landing, SignIn, Cart, Medicines, ProductPage } from '../views';

function Routes() {
  return (
    <Switch>
      <RouteWithLayout
        component={Landing}
        exact
        layout={MainLayout}
        path={HOME}
      />
      <RouteWithLayout
        component={SignIn}
        exact
        layout={AuthLayout}
        path={SIGNIN}
      />
      <RouteWithLayout component={Cart} exact layout={AuthLayout} path={CART} />
      <RouteWithLayout
        component={Medicines}
        exact
        layout={MainLayout}
        path={PRESCRIPTIONS}
      />
      <RouteWithLayout
        component={ProductPage}
        exact
        layout={MainLayout}
        path={PRODUCT_DETAILS}
      />
    </Switch>
  );
}

export default Routes;
