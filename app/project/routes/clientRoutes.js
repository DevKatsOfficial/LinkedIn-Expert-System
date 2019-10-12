const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.post('/create', clientController.create)
router.put('/update', clientController.update)
router.post('/check/remainingBalance', clientController.checkRemainingBalance)
router.post('/charge', clientController.chargeCreditForCall)
router.post('/add/credit', clientController.addToRemainingBalance)
router.get('/all', clientController.getAllClients)




module.exports = router;
