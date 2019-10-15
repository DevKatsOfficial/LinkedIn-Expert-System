const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registrationsController");
const loginController = require("../controllers/loginController");
const userController = require("../controllers/userControllers");
const authMiddleware = require('../../../middlewares/authMiddlewares');

router.post("/register", registerController.register);
router.get("/register/:projectNumber", userController.verfiyProject);

router.post("/register/employee", registerController.employeeRegister);

router.post("/login", loginController.login);

router.get("/:userId", authMiddleware.Auth, userController.getUser);

router.delete("/:userId", authMiddleware.Auth, authMiddleware.AdminAuth, userController.deleteUser);
router.get("/employee/all", authMiddleware.Auth, authMiddleware.AdminAuth, userController.getAllEmployees);

module.exports = router;
