import { ThunkDispatch } from 'redux-thunk';

import {
  AUTHENTICATE,
  UNAUTHENTICATE,
  IAUTHENTICATE,
  IUNAUTHENTICATE
} from 'constants/index';

export interface IAuthenticate {
  type: IAUTHENTICATE;
}

function authenticate(): IAuthenticate {
  return {
    type: AUTHENTICATE
  };
}

export interface IUnauthenticate {
  type: IUNAUTHENTICATE;
}

function unauthenticate(): IUnauthenticate {
  return {
    type: UNAUTHENTICATE
  };
}

export type AuthenticationAction = IAuthenticate | IUnauthenticate;

export function logIn() {
  return async (dispatch: ThunkDispatch<AuthenticationAction, {}, any>) => {
    await window.localStorage.setItem('authenticated', 'true');
    dispatch(authenticate());
  };
}

export function logOut() {
  return async (dispatch: ThunkDispatch<AuthenticationAction, {}, any>) => {
    await window.localStorage.setItem('authenticated', 'false');
    dispatch(unauthenticate());
  };
}

export function checkAuthentication() {
  return async (dispatch: ThunkDispatch<AuthenticationAction, {}, any>) => {
    const auth = await window.localStorage.getItem('authenticated');
    const formattedAuth = typeof auth === 'string' ? JSON.parse(auth) : null;

    // eslint-disable-next-line no-unused-expressions
    formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticate());
  };
}
