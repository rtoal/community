module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nickname: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    casePlan: DataTypes.STRING(2000),
  }, {
    classMethods: {
      associate: (models) => {
        Client.belongsTo(models.StaffMember, {
          foreignKey: 'caseManagerId',
          as: 'caseManager',
        });
      },
    },
  });
  return Client;
};
