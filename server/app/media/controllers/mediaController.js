const { Media } = require('../models/mediaM');
const fs = require('fs');


module.exports.uploadContract = async (req, res) => {

    const contractMedia = await Media.create({
        destination: [req.file.path],
        type: req.body.type
    })
    const result = await contractMedia.save()
    res.send(result);

}

module.exports.getContract = async (req, res) => {

    const contractMedia = await Media.findById(req.params.contractMediaId);

    fs.readFile(contractMedia.destination[0], function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });

}

module.exports.uploadProfilePic = async (req, res) => {

    const profilePic = await Media.create({
        destination: [req.file.path],
        type: req.body.type
    })
    const result = await profilePic.save();
    res.send(result);

}

module.exports.uploadJobImages = async (req, res) => {

    let imagesPath = [];
    for (i = 0; i < req.files.length; i++) {
        imagesPath.push(req.files[i].path);
    }
    const jobImages = await Media.create({
        destination: imagesPath,
        type: req.body.type
    })
    const result = await jobImages.save()
    res.send(result);

}

module.exports.uploadtemplateAttachments = async (req, res) => {

    let imagesPath = [];
    for (i = 0; i < req.files.length; i++) {
        imagesPath.push(req.files[i].path);
    }
    const attachments = await Media.create({
        destination: imagesPath,
        type: req.body.type
    })
    const result = await attachments.save()
    res.send(result);

}
