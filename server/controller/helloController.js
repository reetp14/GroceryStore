// const adminRoles = require("../models").adminRoles;
const admin_users = require("../models").admin_users;
const logger = require("tracer").colorConsole();

module.exports = {
  sendHello(req, res) {
    res.status(200).send("hello reet");
  },

  sendName(req, res) {
    var name = req.params.name;

    res.status(200).send(`${name} is chodu`);
  },

  async sendDB(req, res) {
    admin_users.findAll().then(function(admin_users) {
      res.status(200).json(admin_users);
    });
  }
};
