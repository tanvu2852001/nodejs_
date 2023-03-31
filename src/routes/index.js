const petRouter = require('./pet');
const siteRouter = require('./site');
const productRouter = require('./products');

function routes(app) {
    app.use('/pet', petRouter);
    app.use('/products', productRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
