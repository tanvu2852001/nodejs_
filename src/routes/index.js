const petRouter = require('./pet');
const siteRouter = require('./site');

function routes(app) {
    app.use('/pet', petRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
