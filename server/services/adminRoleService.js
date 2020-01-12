const roles = require("../models").roles;
const admin_users = require("../models").admin_users;
const admin_roles = require("../models").admin_roles;
const logger = require("tracer").colorConsole();

module.exports = {
  async assignRole(adminRole) {
    try {
      logger.info(adminRole);
      const assignedRole = await admin_roles.create(adminRole);
      return {
        assignedRole
      };
    } catch (error) {
      return error;
    }
  },

  async deleteRole(userId) {
    try {
      await admin_roles.destroy({ where: { userId: userId.Id } });
    } catch (error) {
      return error;
    }
  }

  // async findAssingment(admin, role) {
  //   try {
  //     logger.info("query fired");
  //     var uid = await admin_users.findOne({
  //       where: { fname: admin }
  //     });
  //     logger.info("quert sucess");
  //     var rid = await roles.findOne({
  //       where: { role: role }
  //     });
  //     logger.info("ok");
  //     logger.info(rid.dataValues.id);
  //     return this.assignRole(uid.dataValues.id, rid.dataValues.id);
  //   } catch (error) {
  //     logger.info(error);
  //     return error;
  //   }
  // }
};
