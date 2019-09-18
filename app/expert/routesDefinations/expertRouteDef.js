const expertRoute = require('../routes/expertRoute')



module.exports = function (app) {
    app.use('/api/expert', expertRoute);
}