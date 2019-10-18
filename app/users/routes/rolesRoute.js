const express = require("express");
const router = express.Router();
const rolesController = require("../controllers/rolesController");

/**
 * @apiGroup Roles
 * @api {post} /api/roles Create Role
 * @apiSuccess {String} role required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           "message": "succeed",
 *           "id": "5da995c348871e2900bcf37b"
 *       }
 */
router.post("/", rolesController.createRole);

module.exports = router;
