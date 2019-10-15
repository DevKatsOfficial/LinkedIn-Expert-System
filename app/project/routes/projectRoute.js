const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authMiddleware = require('../../../middlewares/authMiddlewares');

router.post("/create", authMiddleware.Auth, authMiddleware.AdminAuth, projectController.create);

router.get("/all", authMiddleware.Auth, authMiddleware.AdminAuth, projectController.getAllProjects);
router.get("/employee", authMiddleware.Auth, projectController.getProjectByEmployee);

// router.post("/search", projectController.Searchproject);
router.post("/get/expert", authMiddleware.Auth, projectController.getExpertByProject);
router.get("/:projectId", authMiddleware.Auth, projectController.getProject);
router.put("/", authMiddleware.Auth, authMiddleware.AdminAuth, projectController.updateEmployee);

module.exports = router;
