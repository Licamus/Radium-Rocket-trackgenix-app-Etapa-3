import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
  //SIGNUP_PENDING,
  //SIGNUP_SUCCESS,
  //SIGNUP_ERROR
} from './constants';

export const loginPending = () => {
  return {
    type: LOGIN_PENDING
  };
};

export const setLoggedIn = (role, email) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      role,
      email
    }
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error
  };
};

export const logoutPending = () => {
  return {
    type: LOGOUT_PENDING
  };
};

export const setLoggedOut = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const logoutError = (error) => {
  return {
    type: LOGOUT_ERROR,
    payload: error
  };
};
