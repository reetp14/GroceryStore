"use strict";
module.exports = (sequelize, DataTypes) => {
  const admin_roles = sequelize.define(
    "admin_roles",
    {
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
      }
    },
    {}
  );
  admin_roles.associate = function(models) {
    // associations can be defined here
  };
  return admin_roles;
};
