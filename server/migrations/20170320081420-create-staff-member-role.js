module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('StaffMemberRoles', {
      staffMemberId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'StaffMembers',
          key: 'id',
        },
      },
      roleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id',
        },
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down(queryInterface /* , Sequelize */) {
    return queryInterface.dropTable('StaffMemberRoles');
  },
};
