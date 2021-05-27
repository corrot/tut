/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import history from 'helpers/history';
import { ICurrent } from 'types';

interface IProps {
  exact: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedInRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: IProps) => {
  if (isAuthenticated === false) {
    history.push('/log-in');
    alert(
      'this is a logged in route, you are logged out, redirected to log in'
    );
  }

  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <>
            <Component {...props} />
          </>
        )}
      />
    </>
  );
};

const mapStateToProps = (state: ICurrent) => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(LoggedInRoute);
