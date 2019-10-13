const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/create", projectController.create);

router.get("/all", projectController.getAllProject);

// router.post("/search", projectController.Searchproject);

router.put("/", projectController.update);

module.exports = router;
