const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController')
const multer = require('multer');

let storage = multer.diskStorage({
    destination: 'public/contracts/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
let upload = multer({ storage: storage }).single('contract')

let picStorage = multer.diskStorage({
    destination: 'public/profilepics/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
let uploadPic = multer({ storage: picStorage }).single('profilePic')

let jobImages = multer.diskStorage({
    destination: 'public/jobimages/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
let uploadJobImages = multer({ storage: jobImages }).array('jobImages')

let templateAttachments = multer.diskStorage({
    destination: 'public/templateAttachments/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
let uploadtemplateAttachments = multer({ storage: templateAttachments }).array('attachments')

/**
* @apiGroup Media
* @api {post} /api/media/contract Upload Contract
* @apiSuccess {file} contract required
* @apiSuccess {String} type optional
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*            "destination": [
*                    "public\\contracts\\1560242264913-contract.jpg"
*                ],
*                "_id": "5cff6859abf05c26d08cfb5b",
*                "type": "type",
*                "__v": 0
*     } 
*/

router.post('/contract',
    upload,
    mediaController.uploadContract);

/**
* @apiGroup Media
* @api {get} /api/media/contract/:contractMediaId  Get Parsed Contract Pdf Content 
* @apiParam {ObjectId} contractMediaId You can get from /api/media/contract  
*/

router.get('/contract/:contractMediaId',
    mediaController.getContract);

/**
* @apiGroup Media
* @api {post} /api/media/user/profilePic Upload Profile Pic 
* @apiSuccess {file} profilePic required
* @apiSuccess {String} type optional 
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*         "destination": [
*                    "public\\profilepics\\1560241710669-belief.jpg"
*                ],
*                "_id": "5cff662e702dfb2714a5c127",
*                 "type": "type",   
*                "__v": 0
*     }
*/

router.post('/user/profilePic',
    uploadPic,
    mediaController.uploadProfilePic);

/**
* @apiGroup Media
* @api {post} /api/media/homeOwner/jobimages Upload Job Images 
* @apiSuccess {file} jobImages required
* @apiSuccess {String} type optional
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*      "destination": [
*                "public\\jobimages\\1560242037342-Capture1.PNG",
*                "public\\jobimages\\1560242037343-Capture3.PNG",
*                "public\\jobimages\\1560242037352-Capture4.PNG",
*                "public\\jobimages\\1560242037358-culture.PNG"
*            ],
*            "_id": "5cff677576b4d213505d5c2b",
*            "type": "type",
*            "__v": 0
*/

router.post('/homeOwner/jobimages',
    uploadJobImages,
    mediaController.uploadJobImages);

/**
* @apiGroup Media
* @api {post} /api/media/template/attachments Upload Template attachments 
* @apiSuccess {file} attachments required
* @apiSuccess {String} type optional
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*      "destination": [
*                "public\\templateAttachments\\1565209900613-v2.png",
*                "public\\templateAttachments\\1565209900617-v3.png",
*                "public\\templateAttachments\\1565209900620-v4.png",
*                "public\\templateAttachments\\1565209900625-v5.png",
*                "public\\templateAttachments\\1565209900713-v31.jpg"
*            ],
*            "_id": "5cff677576b4d213505d5c2b",
*            "type": "type",
*            "__v": 0
*/

router.post('/template/attachments',
    uploadtemplateAttachments,
    mediaController.uploadtemplateAttachments);

module.exports = router;