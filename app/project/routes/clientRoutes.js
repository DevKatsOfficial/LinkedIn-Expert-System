const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const authMiddleware = require('../../../middlewares/authMiddlewares');

router.post('/create',
    authMiddleware.Auth,
    authMiddleware.AdminAuth,
    clientController.create)


router.put('/update',
    authMiddleware.Auth,
    authMiddleware.AdminAuth,
    clientController.update)

router.post('/check/remainingBalance',
    authMiddleware.Auth,
    clientController.checkRemainingBalance)

router.post('/charge',
    authMiddleware.Auth,
    clientController.chargeCreditForCall)

router.post('/add/credit',
    authMiddleware.Auth,
    clientController.addToRemainingBalance)

router.get('/all',
    authMiddleware.Auth,
    authMiddleware.AdminAuth,
    clientController.getAllClients)




module.exports = router;
