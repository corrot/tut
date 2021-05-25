/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import history from '../helpers/history';
import { ICurrent } from '../types';

interface IProps {
  exact: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedOutRoute = ({
  component: Component,
  isAuthenticated,
  ...otherProps
}: IProps) => {
  if (isAuthenticated === true) {
    history.push('/home');
    alert('redirected to home page');
  }

  return (
    <>
      {/* <header>
        Logged Out Header
      </header> */}
      <Route
        render={(rest) => (
          <>
            <Component {...rest} />
          </>
        )}
      />
      {/* <footer>
        Logged Out Footer
      </footer> */}
    </>
  );
};

const mapStateToProps = (state: ICurrent) => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(LoggedOutRoute);
