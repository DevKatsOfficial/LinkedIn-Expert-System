const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/create", projectController.create);

router.get("/all", projectController.getAllProjects);
router.get("/employee", projectController.getProjectByEmployee);

// router.post("/search", projectController.Searchproject);
router.post("/get/expert", projectController.getExpertByProject);
router.get("/:projectId", projectController.getProject);
router.put("/", projectController.updateEmployee);

module.exports = router;
