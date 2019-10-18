const express = require("express");
const router = express.Router();
const claimController = require("../controllers/claimController");
const authMiddleware = require("../../../middlewares/authMiddlewares");

/**
 * @apiGroup Claim
 * @api {post} /api/expert/claim Claim Expert For Project
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {ObjectId} projectId required
 * @apiSuccess {Array} experts required
 * @apiSuccess {ObjectId} experts.expertId required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Expert Claimed!..."
 *     }
 */
router.post("/", authMiddleware.Auth, claimController.create);

module.exports = router;
