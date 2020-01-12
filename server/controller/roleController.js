const roleService = require("../services/roleService");
const AdminRoleService = require("../services/adminRoleService");
const logger = require("tracer").colorConsole();

module.exports = {
  async createRoleapi(req, res) {
    try {
      logger.info(req.body);
      const role = await roleService.createRole(req.body); //calling roleService
      return res.status(201).json({
        role
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  createAssignmentapi(req, res) {
    try {
      logger.info(req.body);

      const assignedRole = AdminRoleService.assignRole(req.body);

      return res.status(201).json({
        assignedRole
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
