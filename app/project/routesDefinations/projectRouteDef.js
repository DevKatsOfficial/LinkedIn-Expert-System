const projectRoute = require('../routes/projectRoute')
const InvitationRoute = require('../routes/invitationRoutes');


module.exports = function (app) {
    app.use('/api/project', projectRoute);
    app.use('/api/invitation', InvitationRoute);
}