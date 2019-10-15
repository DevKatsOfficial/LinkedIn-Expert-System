const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registrationsController");
const loginController = require("../controllers/loginController");
const userController = require("../controllers/userControllers");

router.post("/register", registerController.register);
router.get("/register/:projectNumber", userController.verfiyProject);

router.post("/register/employee", registerController.employeeRegister);

router.post("/login", loginController.login);

router.get("/:userId", userController.getUser);

router.delete("/:userId", userController.getUser);
router.get("/employee/all", userController.getAllEmployees);

module.exports = router;
