import handleResponse from '../../utils/handleResponse';
import { findAll, showError, showErrorTryCatch, userLogin } from './user.service';

export const getAll = async (req, res) => {
  try {
    const users = await findAll();
    handleResponse(res, 200, 'Success', 'Get All', users);
  } catch (error) {
    handleResponse(res, error.code, 'Fail', error.message, null);
  }
};

export const login = (req, res) => {
  try {
    const data = userLogin();
    handleResponse(res, 200, 'Success', 'Login Success', data);
  } catch (error) {
    handleResponse(res, error.code, 'Fail', error.message, null);
  }
};

export const getError = (req, res) => {
  try {
    const users = showError();
    handleResponse(res, 200, 'Success', 'Get All', users);
  } catch (error) {
    handleResponse(res, error.code, 'Fail', error.message, null);
  }
};

export const getErrorTryCatch = (req, res) => {
  try {
    const users = showErrorTryCatch();
    handleResponse(res, 200, 'Success', 'Get All', users);
  } catch (error) {
    handleResponse(res, error.code, 'Fail', error.message, null);
  }
};
