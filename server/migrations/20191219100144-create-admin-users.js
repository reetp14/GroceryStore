"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("admin_users", {
      id: {
        type: DataTypes.INTEGER(22),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
      },
      fname: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "fname"
      },
      lname: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: "lname"
      },
      phoneNo: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "phoneNo"
      },
      emailId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        field: "emailId"
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "0",
        field: "isActive"
      },
      password: {
        type: DataTypes.STRING(128),
        allownull: false,
        field: "password"
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
    return queryInterface.dropTable("admin_users");
  }
};
