module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('StaffMemberRole', {
      staffMemberId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'StaffMember',
          key: 'id',
        },
      },
      roleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Role',
          key: 'id',
        },
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down(queryInterface /* , Sequelize */) {
    return queryInterface.dropTable('StaffMemberRole');
  },
};
