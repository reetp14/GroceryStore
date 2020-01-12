const express = require("express");
const router = express.Router();
const helloController = require("./controller/helloController");
const userController = require("./controller/userController");
const roleController = require("./controller/roleController");
router.get("/hello", helloController.sendHello);
router.get("/hello/:name", helloController.sendName);
router.get("/adminUser", helloController.sendDB);
router.get("/");
router.post("/auth", userController.userAuthapi);
router.post("/users", userController.createUserapi);
router.post("/role", roleController.createRoleapi);
router.post("/assign", roleController.createAssignmentapi);
router.put("/update", userController.updateadminInfoapi);
router.delete("/delete", userController.deleteAdminapi);

module.exports = router;
