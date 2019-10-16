const express = require("express");
const router = express.Router();
const claimController = require("../controllers/claimController");
const authMiddleware = require("../../../middlewares/authMiddlewares");

router.post(
  "/",
  // authMiddleware.Auth,
  claimController.create
);

module.exports = router;
