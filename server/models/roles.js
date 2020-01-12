"use strict";
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define("roles", {
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
    }
  });
  roles.associate = model => {
    roles.hasMany(
      model.admin_roles,
      {
        foreignKey: "roleId"
      },
      { onDelete: "cascade" },
      { hooks: "true" }
    );
  };
  return roles;
};
