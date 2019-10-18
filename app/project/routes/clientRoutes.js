const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const authMiddleware = require("../../../middlewares/authMiddlewares");

/**
 * @apiGroup Client
 * @api {post} /api/client/create Create Client
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {String} clientCompany
 * @apiSuccess {Boolean} prepaid
 * @apiSuccess {Boolean} payAsYouGo
 * @apiSuccess {Number} creditRemaining
 * @apiSuccess {String} billingCurrency
 * @apiSuccess {String} pricingRules
 * @apiSuccess {Number} pricePerhourCall
 * @apiSuccess {String} entityToInvoice
 * @apiSuccess {Array} InvoiceContacts
 * @apiSuccess {String} InvoiceContacts.name
 * @apiSuccess {String} vat
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *           "message": "Client created Successfully!..."
 *     }
 */

router.post(
  "/create",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  clientController.create
);

/**
 * @apiGroup Client
 * @api {put} /api/client/update Update Client
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {String} clientCompany
 * @apiSuccess {Boolean} prepaid
 * @apiSuccess {Boolean} payAsYouGo
 * @apiSuccess {String} billingCurrency
 * @apiSuccess {String} pricingRules
 * @apiSuccess {Number} pricePerhourCall
 * @apiSuccess {String} entityToInvoice
 * @apiSuccess {Array} InvoiceContacts
 * @apiSuccess {String} InvoiceContacts.name
 * @apiSuccess {String} vat
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *           "message": "Successfully updated Client!..."
 *     }
 */

router.put(
  "/update",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  clientController.update
);

/**
 * @apiGroup Client
 * @api {post} /api/client/check/remainingBalance Check Remaining Balance Of  Client
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {ObjectId} clientId
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *         "_id": "5da9b8bc80036017f0148b80",
 *         "creditRemaining": 2000
 *     }
 */

router.post(
  "/check/remainingBalance",
  authMiddleware.Auth,
  clientController.checkRemainingBalance
);

/**
 * @apiGroup Client
 * @api {post} /api/client/charge Charge Client
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {ObjectId} clientId
 * @apiSuccess {Number} credit
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "message": "Charge Credit Successfull!"
 *    }
 */

router.post(
  "/charge",
  authMiddleware.Auth,
  clientController.chargeCreditForCall
);

/**
 * @apiGroup Client
 * @api {post} /api/client/add/credit Add Credit(Client)
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccess {ObjectId} clientId
 * @apiSuccess {Number} credit
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "message": "Credit Updated!"
 *    }
 */
router.post(
  "/add/credit",
  authMiddleware.Auth,
  clientController.addToRemainingBalance
);

/**
 * @apiGroup Client
 * @api {get} /api/client/all Get All Clients
 * @apiHeader auth-token JWT Token need to be assigned against this
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [
 *      {
 *           "_id": "5da1a40ddbb55725981fd32d",
 *           "clientCompany": "LLC update ",
 *           "payAsYouGo": null,
 *           "creditRemaining": 15000,
 *           "billingCurrency": "USD",
 *           "pricingRules": "This is new pricing Rules for the company",
 *           "pricePerhourCall": 1000,
 *           "entityToInvoice": "This is new  invoice from the company",
 *           "InvoiceContacts": [
 *               {
 *                   "_id": "5da1a487dbb55725981fd333",
 *                   "name": "sahib one"
 *               },
 *               {
 *                   "_id": "5da1a487dbb55725981fd332",
 *                   "name": "hanzala"
 *               },
 *               {
 *                   "_id": "5da1a487dbb55725981fd331",
 *                   "name": "zubair"
 *               }
 *           ],
 *           "vat": "1",
 *           "__v": 0,
 *           "prepaid": true
 *       },
 *       {
 *           "_id": "5da9b8bc80036017f0148b80",
 *           "clientCompany": "hM Production",
 *           "prepaid": true,
 *           "creditRemaining": 2400,
 *           "billingCurrency": "USD",
 *           "pricingRules": "This is Pricing Rules",
 *           "pricePerhourCall": 50,
 *           "entityToInvoice": "This is invoice",
 *           "InvoiceContacts": [
 *               {
 *                   "_id": "5da9b8bc80036017f0148b81",
 *                   "name": "Hanzala"
 *               }
 *           ],
 *           "vat": "this is vat",
 *           "__v": 0
 *       }
 *   ]
 */

router.get(
  "/all",
  authMiddleware.Auth,
  authMiddleware.AdminAuth,
  clientController.getAllClients
);

module.exports = router;
