module.exports = (sequelize, DataTypes) => {
  const StaffMember = sequelize.define('StaffMember', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        StaffMember.hasMany(models.Client, {
          foreignKey: 'caseManagerId',
          as: 'clients',
        });
        StaffMember.belongsToMany(models.Role, {
          through: 'StaffMemberRoles',
          foreignKey: 'staffMemberId',
          otherKey: 'roleId',
        });
      },
    },
  });
  return StaffMember;
};
