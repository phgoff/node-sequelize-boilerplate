import models from '../../models';

const { User, Post } = models;
export const findOne = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
    include: [Post],
  });
  return user;
};

export const findAll = async () => {
  const users = await User.findAll();
  return users;
};
