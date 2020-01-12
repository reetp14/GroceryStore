"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("roles", {
      id: {
        type: DataTypes.INTEGER(22),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
      },
      role: {
        type: DataTypes.STRING(20),
        allownull: false,
        field: "role"
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
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable("roles");
  }
};
