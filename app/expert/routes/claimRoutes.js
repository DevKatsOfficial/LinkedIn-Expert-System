const express = require("express");
const router = express.Router();
const claimController = require("../controllers/claimController");

router.post('/', claimController.create)



module.exports = router;
