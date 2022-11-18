import {
  GET_ADMINS_PENDING,
  GET_ADMINS_SUCCESS,
  GET_ADMINS_ERROR,
  DELETE_ADMIN_PENDING,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_ERROR,
  PUT_ADMIN_PENDING,
  PUT_ADMIN_SUCCESS,
  PUT_ADMIN_ERROR,
  POST_ADMIN_PENDING,
  POST_ADMIN_SUCCESS,
  POST_ADMIN_ERROR
} from './constants';

export const getAdminsPending = () => {
  return {
    type: GET_ADMINS_PENDING
  };
};

export const getAdminsSuccess = (data) => {
  return {
    type: GET_ADMINS_SUCCESS,
    payload: data
  };
};

export const getAdminsError = (error) => {
  return {
    type: GET_ADMINS_ERROR,
    payload: error
  };
};

export const deleteAdminPending = () => {
  return {
    type: DELETE_ADMIN_PENDING
  };
};

export const deleteAdminSuccess = (data) => {
  return {
    type: DELETE_ADMIN_SUCCESS,
    payload: data
  };
};

export const deleteAdminError = (error) => {
  return {
    type: DELETE_ADMIN_ERROR,
    payload: error
  };
};

export const putAdminPending = () => {
  return {
    type: PUT_ADMIN_PENDING
  };
};

export const putAdminSuccess = (data) => {
  return {
    type: PUT_ADMIN_SUCCESS,
    payload: data
  };
};

export const putAdminError = (error) => {
  return {
    type: PUT_ADMIN_ERROR,
    payload: error
  };
};

export const postAdminPending = () => {
  return {
    type: POST_ADMIN_PENDING
  };
};

export const postAdminSuccess = (data) => {
  return {
    type: POST_ADMIN_SUCCESS,
    payload: data
  };
};

export const postAdminError = (error) => {
  return {
    type: POST_ADMIN_ERROR,
    payload: error
  };
};
