const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registrationsController");
const loginController = require("../controllers/loginController");
const userController = require("../controllers/userControllers");
const authMiddleware = require("../../../middlewares/authMiddlewares");

/**
 * @apiGroup Expert
 * @api {post} /api/user/register Register Expert
 * @apiSuccess {String} name required
 * @apiSuccess {String} email required
 * @apiSuccess {String} password required
 * @apiSuccess {String} phone required
 * @apiSuccess {String} linkedInUrl required
 * @apiSuccess {String} projectNumber required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully registered!..."
 *     }
 */

router.post("/register", registerController.register);

/**
 * @apiGroup Expert
 * @api {get} /api/user/register/:projectNumber Verify Project Number For Expert
 * @apiParam {String} projectNumber required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "project": {
 *           "createdAt": "2019-10-16T12:57:09.433Z",
 *           "_id": "5da71776e6384a75ddf33785",
 *           "projectName": "qwwe",
 *           "projectCode": "nkscjcbv",
 *           "projectNumber": "1123sassdaD",
 *           "projectOwner": "zubair aif",
 *           "projectteam": "sdfsadf",
 *           "employeeId": "5da71695e6384a75ddf33784",
 *           "description": "bkbb",
 *           "clientContacts": [
 *               {
 *                   "_id": "5da71776e6384a75ddf33786",
 *                   "name": "zubair saif",
 *                   "email": "techstash@gmail.com"
 *               }
 *           ],
 *           "projectStatus": true,
 *           "__v": 0
 *       },
 *       "found": true
 *   }
 */
router.get("/register/:projectNumber", userController.verfiyProject);

/**
 * @apiGroup Admin
 * @api {post} /api/user/register/employee Register Employee
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {String} name required
 * @apiSuccess {String} email required
 * @apiSuccess {String} password required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully registered Employee!..."
 *     }
 */
router.post(
  "/register/employee",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  registerController.employeeRegister
);
router.post("/register/admin", registerController.adminRegister);

/**
 * @apiGroup Employee
 * @api {post} /api/user/login  Employee Login
 * @apiSuccess {String} email required
 * @apiSuccess {String} password required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGE5OTE5ODQ3ZDk2MjE0ZTA3MDg1NjAiLCJuYW1lIjoienViYWlyIiwiaWF0IjoxNTcxMzk0MDM1LCJleHAiOjE1NzE5OTg4MzV9.LHvtcr2FUC6pWAqg_uz5Yx31SQnNeFZiXcveqhH1vEM",
 *       "userData": {
 *           "_id": "5da9919847d96214e0708560",
 *           "name": "zubair",
 *           "email": "test@test.com"
 *           "__v": 0
 *       }
 *   }
 */
router.post("/login", loginController.Employeelogin);

/**
 * @apiGroup Admin
 * @api {post} /api/user/admin/login Admin Login
 * @apiSuccess {String} email required
 * @apiSuccess {String} password required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGE3MmQ5ZGE0ZTRjNDA2YzgzNjkwNmQiLCJuYW1lIjoiYWRtaW4iLCJsZXZlbCI6eyJyb2xlIjoiYWRtaW4iLCJfX3YiOjB9LCJpYXQiOjE1NzEzOTQxNzMsImV4cCI6MTU3MTk5ODk3M30.rEt974_1FxlnT8ZMiIv3WNc15cgLPAXbUjeJdOFmqqY",
 *     "userData": {
 *         "_id": "5da72d9da4e4c406c836906d",
 *         "name": "admin",
 *         "email": "admin@gmail.com",
 *         "lev": {
 *             "role": "admin",
 *             "__v": 0
 *         }
 *     }
 * }
 */
router.post("/admin/login", loginController.adminlogin);

// router.get("/:userId", authMiddleware.Auth, userController.getUser);

// router.delete(
//   "/:userId",
//   authMiddleware.Auth,
//   authMiddleware.AdminAuth,
//   userController.deleteUser
// );

/**
 * @apiGroup Admin
 * @api {get} /api/user/employee/all Get All Employee
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  [
 *     {
 *         "_id": "5da25efc79478c2144240913",
 *         "name": "test",
 *         "email": "testing@gmail.com"
 *         "__v": 0
 *     },
 *     {
 *         "_id": "5da9919847d96214e0708560",
 *         "name": "zubair",
 *         "email": "test@test.com"
 *         "__v": 0
 *     }
 * ]
 */
router.get(
  "/employee/all",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  userController.getAllEmployees
);

module.exports = router;
