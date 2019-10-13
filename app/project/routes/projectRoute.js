const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post('/create', projectController.create)

router.get("/", projectController.getProjectByEmployee);

// router.post("/search", projectController.Searchproject);

router.put("/", projectController.updateEmployee);

module.exports = router;
