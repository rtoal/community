module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(1023),
  }, {
    classMethods: {
      associate(models) {
        Role.belongsToMany(models.StaffMember, {
          through: 'StaffMemberRoles',
          foreignKey: 'userId',
          otherKey: 'roleId',
        });
      },
    },
  });
  return Role;
};
