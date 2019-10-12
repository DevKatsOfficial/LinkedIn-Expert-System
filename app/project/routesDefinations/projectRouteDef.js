const projectRoute = require('../routes/projectRoute')
const InvitationRoute = require('../routes/invitationRoutes');
const clientRoute = require('../routes/clientRoutes')

module.exports = function (app) {
    app.use('/api/project', projectRoute);
    app.use('/api/invitation', InvitationRoute);
    app.use('/api/client', clientRoute);
}