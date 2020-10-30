module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'user',
    },
  );
  User.associate = function associate(models) {
    User.hasMany(models.Post, {
      foreignKey: 'userID',
    });
  };
  return User;
};
