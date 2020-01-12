"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("admin_roles", {
      id: {
        type: DataTypes.INTEGER(22),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
      },

      userId: {
        type: DataTypes.INTEGER(22),
        allowNull: false,
        references: {
          model: "admin_users",
          key: "id"
        },
        field: "userId"
      },
      roleId: {
        type: DataTypes.INTEGER(22),
        allowNull: false,
        references: {
          model: "roles",
          key: "id"
        },
        field: "roleId"
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("admin_roles");
  }
};
