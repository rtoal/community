module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Client', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING },
      nickname: { type: Sequelize.STRING },
      birthdate: { type: Sequelize.DATEONLY },
      email: { type: Sequelize.STRING },
      phoneNumber: { type: Sequelize.STRING },
      casePlan: { type: Sequelize.STRING(2000) },
      caseManagerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'StaffMember',
          key: 'id',
        },
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down(queryInterface /* , Sequelize */) {
    return queryInterface.dropTable('Client');
  },
};
