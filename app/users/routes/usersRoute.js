const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registrationsController')
const loginController = require('../controllers/loginController')
const userController = require('../controllers/userControllers')



router.post('/register',
    registerController.register)


router.post('/login',
    loginController.login)


router.get('/:userId',
    userController.getUser)

router.delete('/:userId',
    userController.getUser)


module.exports = router;
