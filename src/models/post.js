module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      name: {
        type: DataTypes.STRING,
      },
      userID: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'post',
    },
  );
  return Post;
};
