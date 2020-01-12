const admin_users = require("../models").admin_users;
const adminRoleService = require("../services/adminRoleService");

const logger = require("tracer").colorConsole();
module.exports = {
  async createUser(userDetails) {
    try {
      logger.info(userDetails);
      const user = await admin_users.create(userDetails); //db entry
      return {
        user
      };
    } catch (error) {
      return error;
    }
  },
  async updateInfo(userDetails) {
    try {
      logger.info(userDetails);
      const updatedInfo = await admin_users.update(
        {
          fname: userDetails.fname,
          lname: userDetails.lname,
          phoneNo: userDetails.phoneNo,
          emailId: userDetails.emailId,
          isActive: userDetails.isActive,
          password: userDetails.password
        },
        { where: { id: userDetails.Id } }
      );
      return updatedInfo;
    } catch (error) {
      logger.info(error);
      return error;
    }
  },

  async deleteAdmin(userDetails) {
    try {
      adminRoleService.deleteRole(userDetails);
      const deletedUser = await admin_users.destroy({
        where: { id: userDetails.Id }
      });
      return deletedUser;
    } catch (error) {
      logger.info(error);
      return error;
    }
  },

  async userAuth(loginDetails) {
    try {
      logger.info(loginDetails);
      const uid = await admin_users.findOne({
        where: { emailId: loginDetails.emailId }
      });
      if (uid === null) {
        console.log("auth failed/no user");
        return {
          auth: false,
          errmsg: "User does not exist"
        };
      }
      if (uid !== null && loginDetails.password === uid.password) {
        console.log("auth success");
        console.log(uid);
        return {
          auth: true
        };
      } else {
        console.log(uid);
        console.log("auth failed/wrong password");
        return {
          auth: false,
          errmsg: "Wrong Password!"
        };
      }
    } catch (error) {
      logger.info(error);
      return error;
    }
  }
};
