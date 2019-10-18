const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authMiddleware = require("../../../middlewares/authMiddlewares");

/**
 * @apiGroup Project
 * @api {post} /api/project/create Create Project
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {String} projectName required
 * @apiSuccess {String} projectCode required
 * @apiSuccess {String} projectNumber required
 * @apiSuccess {String} projectOwner required
 * @apiSuccess {String} projectteam required
 * @apiSuccess {ObjectId} clientId required
 * @apiSuccess {String} description required
 * @apiSuccess {Boolean} projectStatus required
 * @apiSuccess {ObjectId} employeeId required
 * @apiSuccess {Array} clientContacts required
 * @apiSuccess {String} clientContacts.email required
 * @apiSuccess {String} clientContacts.name required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully Created Project!..."
 *     }
 */
router.post(
  "/create",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  projectController.create
);

/**
 * @apiGroup Project
 * @api {get} /api/project/all Get All Project
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [
 *      {
 *          "createdAt": "2019-10-18T11:59:41.668Z",
 *          "_id": "5da9acf852c7b4197077943d",
 *          "projectName": "hnb",
 *          "projectCode": "123Abc",
 *          "projectNumber": "147sa",
 *          "projectOwner": "zubair",
 *          "projectteam": "east",
 *          "clientId": {
 *              "_id": "5da1a17a0334311b24a44832",
 *              "clientCompany": "netsole",
 *              "prepaid": true,
 *              "creditRemaining": 100,
 *              "billingCurrency": "USD",
 *              "pricingRules": "This is pricing Rules for the company",
 *              "pricePerhourCall": 10,
 *              "entityToInvoice": "This is invoice from the company",
 *              "InvoiceContacts": [
 *                  {
 *                      "_id": "5da1a17a0334311b24a44835",
 *                      "name": "sahib"
 *                  },
 *                  {
 *                      "_id": "5da1a17a0334311b24a44834",
 *                      "name": "hanzala"
 *                  },
 *                  {
 *                      "_id": "5da1a17a0334311b24a44833",
 *                      "name": "zubair"
 *                  }
 *              ],
 *              "vat": "1",
 *              "__v": 0
 *          },
 *          "employeeId": {
 *              "_id": "5da9919847d96214e0708560",
 *              "name": "zubair",
 *              "email": "test@test.com",
 *              "adminId": "5da72d9da4e4c406c836906d",
 *              "__v": 0
 *          },
 *          "description": "This is description",
 *          "clientContacts": [
 *              {
 *                  "_id": "5da9acf852c7b4197077943e",
 *                  "email": "zubair@gmail.com",
 *                  "name": "zubair"
 *              }
 *          ],
 *          "projectStatus": true,
 *          "__v": 0
 *      },
 *      {
 *          "createdAt": "2019-10-18T12:16:11.249Z",
 *          "_id": "5da9ad744650fc39c458c888",
 *          "projectName": "hnb000",
 *          "projectCode": "123Abc00",
 *          "projectNumber": "147sa00",
 *          "projectOwner": "zubair00",
 *          "projectteam": "east00",
 *          "clientId": {
 *              "_id": "5da1a17a0334311b24a44832",
 *              "clientCompany": "netsole",
 *              "prepaid": true,
 *              "creditRemaining": 100,
 *              "billingCurrency": "USD",
 *              "pricingRules": "This is pricing Rules for the company",
 *              "pricePerhourCall": 10,
 *              "entityToInvoice": "This is invoice from the company",
 *              "InvoiceContacts": [
 *                  {
 *                      "_id": "5da1a17a0334311b24a44835",
 *                      "name": "sahib"
 *                  },
 *                  {
 *                      "_id": "5da1a17a0334311b24a44834",
 *                      "name": "hanzala"
 *                  },
 *                 {
 *                      "_id": "5da1a17a0334311b24a44833",
 *                      "name": "zubair"
 *                  }
 *              ],
 *              "vat": "1",
 *              "__v": 0
 *          },
 *          "employeeId": {
 *              "_id": "5da9919847d96214e0708560",
 *              "name": "zubair",
 *              "email": "test@test.com",
 *              "adminId": "5da72d9da4e4c406c836906d",
 *              "__v": 0
 *          },
 *          "description": "This is description",
 *          "clientContacts": [
 *              {
 *                  "_id": "5da9ad744650fc39c458c889",
 *                  "email": "zubair@gmail.com",
 *                  "name": "zubair"
 *              }
 *          ],
 *          "projectStatus": true,
 *          "__v": 0
 *      }
 *  ]
 */
router.get(
  "/all",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  projectController.getAllProjects
);

/**
 * @apiGroup Project
 * @api {get} /api/project/employee Get Project By Employee
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *         {
 *             "createdAt": "2019-10-18T11:59:41.668Z",
 *             "_id": "5da9acf852c7b4197077943d",
 *             "projectName": "hnb",
 *             "projectCode": "123Abc",
 *             "projectNumber": "147sa",
 *             "projectOwner": "zubair",
 *             "projectteam": "east",
 *             "clientId": "5da1a17a0334311b24a44832",
 *             "employeeId": "5da9919847d96214e0708560",
 *             "description": "This is description",
 *             "clientContacts": [
 *                 {
 *                     "_id": "5da9acf852c7b4197077943e",
 *                     "email": "zubair@gmail.com",
 *                     "name": "zubair"
 *                 }
 *             ],
 *             "projectStatus": true,
 *             "__v": 0
 *         },
 *         {
 *             "createdAt": "2019-10-18T12:16:11.249Z",
 *             "_id": "5da9ad744650fc39c458c888",
 *             "projectName": "hnb000",
 *             "projectCode": "123Abc00",
 *             "projectNumber": "147sa00",
 *             "projectOwner": "zubair00",
 *             "projectteam": "east00",
 *             "clientId": "5da1a17a0334311b24a44832",
 *             "employeeId": "5da9919847d96214e0708560",
 *             "description": "This is description",
 *             "clientContacts": [
 *                 {
 *                     "_id": "5da9ad744650fc39c458c889",
 *                     "email": "zubair@gmail.com",
 *                     "name": "zubair"
 *                 }
 *             ],
 *             "projectStatus": true,
 *             "__v": 0
 *         }
 *     ]
 */
router.get(
  "/employee",
  authMiddleware.Auth,
  projectController.getProjectByEmployee
);

// router.post("/search", projectController.Searchproject);

/**
 * @apiGroup Project
 * @api {post} /api/project/get/expert Get Expert By Project
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {ObjectId} projectId required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *         "_id": "5da393e8f6b725278c5571db",
 *         "employeeId": "5da9919847d96214e0708560",
 *         "experts": [
 *             {
 *                 "_id": "5da393e8f6b725278c5571dc",
 *                 "expertId": {
 *                     "introduction": {
 *                         "last_name": "Peters",
 *                         "public_identifier": "michaelpeters13",
 *                         "picture": "https://user-profile-images.s3.us-east-2.amazonaws.com/15684587440cd376a6-71c4-467d-a196-6e047ab25367",
 *                         "headline": "Senior Healthcare Strategy Consultant at HDR",
 *                         "location_name": "Clearwater, Florida",
 *                         "first_name": "Michael"
 *                     },
 *                     "_id": "5d8a91949e470a24404d2d9e"
 *                 }
 *             }
 *         ],
 *         "projectId": "5da9ad744650fc39c458c888",
 *         "__v": 0
 *       }
 */
router.post(
  "/get/expert",
  authMiddleware.Auth,
  projectController.getExpertByProject
);

/**
 * @apiGroup Project
 * @api {get} /api/project/:projectId Get Project
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiParam {ObjectId} projectId required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "createdAt": "2019-10-18T12:16:11.249Z",
 *       "_id": "5da9ad744650fc39c458c888",
 *       "projectName": "hnb000",
 *       "projectCode": "123Abc00",
 *       "projectNumber": "147sa00",
 *       "projectOwner": "zubair00",
 *       "projectteam": "east00",
 *       "clientId": {
 *           "_id": "5da1a17a0334311b24a44832",
 *           "clientCompany": "netsole",
 *           "prepaid": true,
 *           "creditRemaining": 100,
 *           "billingCurrency": "USD",
 *           "pricingRules": "This is pricing Rules for the company",
 *           "pricePerhourCall": 10,
 *           "entityToInvoice": "This is invoice from the company",
 *           "InvoiceContacts": [
 *               {
 *                   "_id": "5da1a17a0334311b24a44835",
 *                   "name": "sahib"
 *               },
 *               {
 *                   "_id": "5da1a17a0334311b24a44834",
 *                   "name": "hanzala"
 *               },
 *               {
 *                   "_id": "5da1a17a0334311b24a44833",
 *                   "name": "zubair"
 *               }
 *           ],
 *           "vat": "1",
 *           "__v": 0
 *       },
 *       "employeeId": "5da9919847d96214e0708560",
 *       "description": "This is description",
 *       "clientContacts": [
 *           {
 *               "_id": "5da9ad744650fc39c458c889",
 *               "email": "zubair@gmail.com",
 *               "name": "zubair"
 *           }
 *       ],
 *       "projectStatus": true,
 *       "__v": 0
 *   }
 */
router.get("/:projectId", authMiddleware.Auth, projectController.getProject);

/**
 * @apiGroup Project
 * @api {put} /api/project Update Project Employee
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {ObjectId} projectId required
 * @apiSuccess {ObjectId} employeeId required
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *         "message": "Successfully Changed Employee!..."
 *     }
 */
router.put(
  "/",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  projectController.updateProjectEmployee
);

module.exports = router;
