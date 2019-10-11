const express = require("express");
const router = express.Router();
const expertController = require("../controllers/expertController");

router.post('/create',
    expertController.create)

router.get("/:expertId", expertController.getExpert);

router.post("/search", expertController.SearchExpert);

router.put("/", expertController.update);

router.post("/create/region", expertController.createRegion);

router.post("/create/countries", expertController.createCountries);

router.post("/create/states", expertController.createStates);

router.post("/create/cities", expertController.createCities);

module.exports = router;
