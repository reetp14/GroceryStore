const roles = require("../models").roles;
const logger = require("tracer").colorConsole();

module.exports = {
  async createRole(roleDetails) {
    try {
      logger.info(roleDetails);
      const role = await roles.create(roleDetails); //db entry
      return {
        role
      };
    } catch (error) {
      return error;
    }
  }
};
