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

  //     updatedAt: {
  //       allowNull: false,
  //       type: Sequelize.DATE
  //     }
  //   }).then(() => {
  //     // Create Unique CompoundIndex
  //     let sql = `CREATE UNIQUE INDEX "PlayerTeamCompoundIndex"
  //             ON public."PlayerTeam"
  //             USING btree
  //             ("playerId", "teamId");
  //           `;
  //     return queryInterface.sequelize.query(sql, {raw: true});
  //     });
  // },
