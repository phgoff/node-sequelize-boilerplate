import handleResponse from '../../utils/handler';

const { findOne, findAll } = require('./user.service');

export const getOne = (req, res) => {
  try {
    const user = findOne();
    handleResponse(res, false, 200, user, 'Get A User');
  } catch (error) {
    console.error(error);
    handleResponse(res, true, 500, null, 'Something went wrong!');
  }
};

export const getAll = (req, res) => {
  try {
    const users = findAll();
    handleResponse(res, false, 200, users, 'Get All Users');
  } catch (error) {
    console.error(error);
    handleResponse(res, true, 500, null, 'Something went wrong!');
  }
};
