import CustomError from '@src/utils/CustomError';
import models from '../../models';

const { User, Post } = models;

export const findAll = async () => {
  const users = await User.findAll();
  return users;
};

export const showError = () => {
  throw new CustomError(500, 'Something went wrong!');
};

export const showErrorTryCatch = () => {
  try {
    throw new CustomError(400, 'userId must be integer!');
  } catch (error) {
    throw error;
  }
};
