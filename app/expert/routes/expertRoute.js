const express = require("express");
const router = express.Router();
const expertController = require("../controllers/expertController");
const authMiddleware = require("../../../middlewares/authMiddlewares");

router.post(
  "/create",
  // authMiddleware.Auth,
  expertController.create
);

router.get(
  "/:expertId",
  // authMiddleware.Auth,
  expertController.getExpert
);
router.post(
  "/get/project",
  // authMiddleware.Auth,
  expertController.getProjectByExpert
);

router.post(
  "/search",
  // authMiddleware.Auth,
  expertController.SearchExpert
);

router.put("/", expertController.update);

router.post(
  "/create/region",
  //   authMiddleware.Auth,
  //   authMiddleware.AdminAuth,
  expertController.createRegion
);

router.post(
  "/create/countries",
  //   authMiddleware.Auth,
  //   authMiddleware.AdminAuth,
  expertController.createCountries
);

router.post(
  "/create/states",
  //   authMiddleware.Auth,
  //   authMiddleware.AdminAuth,
  expertController.createStates
);

router.post(
  "/create/cities",
  //   authMiddleware.Auth,
  //   authMiddleware.AdminAuth,
  expertController.createCities
);

module.exports = router;
