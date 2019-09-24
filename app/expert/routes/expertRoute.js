const express = require('express');
const router = express.Router();
const expertController = require('../controllers/expertController')



// router.post('/create',
//     expertController.create)

router.get('/:expertId',
    expertController.getExpert)

router.post('/get/bySkills',
    expertController.SearchExpert)

router.put('/',
    expertController.update)



module.exports = router;
