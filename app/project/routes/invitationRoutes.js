const express = require("express");
const router = express.Router();
const invitationController = require("../controllers/invitationController");
const authMiddleware = require("../../../middlewares/authMiddlewares");

router.post(
  "/",
  // authMiddleware.Auth,
  invitationController.create
);

// router.get("/", projectController.resendInvitation);

// router.post("/search", projectController.Searchproject);

// router.put("/", projectController.update);

module.exports = router;
