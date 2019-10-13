const expertRoute = require('../routes/expertRoute')
const claimRoute = require('../routes/claimRoutes')


module.exports = function (app) {
    app.use('/api/expert', expertRoute);
    app.use('/api/expert/claim', claimRoute);
}