const express = require("express");
const router = express.Router();
const invitationController = require("../controllers/invitationController");
const authMiddleware = require("../../../middlewares/authMiddlewares");

/**
 * @apiGroup Invitation
 * @api {put} /api/invitation Send Invitaion to Experts
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {String} name required
 * @apiSuccess {String} email required
 * @apiSuccess {String} projectNumber required
 * @apiSuccess {String} description
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *         "message": "Successfully Send Invitation!..."
 *     }
 */
router.post("/", authMiddleware.Auth, invitationController.create);

// router.get("/", projectController.resendInvitation);

// router.post("/search", projectController.Searchproject);

// router.put("/", projectController.update);

module.exports = router;
