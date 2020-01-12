const userService = require("../services/userService");
const logger = require("tracer").colorConsole();

module.exports = {
  async createUserapi(req, res) {
    try {
      console.log(req.body);
      const user = await userService.createUser(req.body);
      //calling service
      return res.status(201).json({
        user
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateadminInfoapi(req, res) {
    try {
      const updatedInfo = await userService.updateInfo(req.body);
      return res.status(204).json("password updated");
    } catch (error) {
      return res.status(400).json("update error");
    }
  },

  async deleteAdminapi(req, res) {
    try {
      const deleteAdmin = await userService.deleteAdmin(req.body);
      return res.satus(200).json(deleteAdmin);
    } catch (error) {
      return res.status(400).json("delete error");
    }
  },

  async userAuthapi(req, res) {
    try {
      const auth = await userService.userAuth(req.body);
      return res.status(200).json(auth);
    } catch (error) {
      return res.status(400).json("auth failed");
    }
  }
};
