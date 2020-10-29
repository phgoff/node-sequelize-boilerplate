import CustomError from '@src/utils/CustomError';

export const findAll = () => [
  { id: 1, name: 'user01' },
  { id: 2, name: 'user02' },
];

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
