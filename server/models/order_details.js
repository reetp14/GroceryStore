"use strict";
export default (sequelize, DataTypes) => {
  const order_details = sequelize.define(
    "order_details",
    {
      id: DataTypes.INTEGER
    },
    {}
  );
  order_details.associate = function(models) {
    // associations can be defined here
  };
  return order_details;
};
