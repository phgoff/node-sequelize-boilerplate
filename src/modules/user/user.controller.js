import { handleSuccess, handleError } from '../../utils/handleResponse';

const { findOne, findAll } = require('./user.service');

export const getOne = async (req, res) => {
  try {
    const user = await findOne(req.params.id);
    handleSuccess(res, 200, user, 'Get A User');
  } catch (error) {
    console.error(error);
    handleError(res, 500, 'Something went wrong!');
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await findAll();
    handleSuccess(res, 200, users, 'Get All Users');
  } catch (error) {
    console.error(error);
    handleError(res, 500, 'Something went wrong!');
  }
};
