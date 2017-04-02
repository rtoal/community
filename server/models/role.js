module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(1023),
  }, {
    freezeTableName: true,
    classMethods: {
      associate(models) {
        Role.belongsToMany(models.StaffMember, {
          through: 'StaffMemberRole',
          foreignKey: 'roleId',
          otherKey: 'staffMemberId',
        });
      },
    },
  });
  return Role;
};
