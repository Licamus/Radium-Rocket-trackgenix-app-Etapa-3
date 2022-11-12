import {
  getSuperAdminsPending,
  getSuperAdminsSuccess,
  getSuperAdminsError,
  deleteSuperAdminsPending,
  deleteSuperAdminsSuccess,
  deleteSuperAdminsError
} from './actions';

export const getSuperAdmins = () => {
  return (dispatch) => {
    dispatch(getSuperAdminsPending());
    fetch(`${process.env.REACT_APP_API_URL}/super-admins`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw new Error(response.message);
        } else {
          dispatch(getSuperAdminsSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(getSuperAdminsError(error.toString()));
      });
  };
};

export const deleteSuperAdmins = (superAdminId) => {
  return (dispatch) => {
    dispatch(deleteSuperAdminsPending());
    fetch(`${process.env.REACT_APP_API_URL}/super-admins/${superAdminId}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw new Error(response.message);
        } else {
          dispatch(deleteSuperAdminsSuccess(superAdminId));
        }
      })
      .catch((error) => {
        dispatch(deleteSuperAdminsError(error.toString()));
      });
  };
};
