var db = require(".");

module.exports = (sequelize, DataTypes) => {
  {
    var admin_users = sequelize.define("admin_users", {
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
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
        field: "emailId"
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "1",
        field: "isActive"
      },
      password: {
        type: DataTypes.STRING(128),
        allownull: false,
        field: "password"
      }
    });
    admin_users.associate = models => {
      admin_users.hasMany(
        models.admin_roles,
        {
          foreignKey: "roleId"
        },
        { onDelete: "cascade" },
        { hooks: "true" }
      );
    };

    return admin_users;
  }
};
