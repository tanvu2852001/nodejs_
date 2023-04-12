const petRouter = require('./pet');
const siteRouter = require('./site');
const productRouter = require('./products');
const adRouter = require('./ad');

function routes(app) {
    app.use('/pet', petRouter);
    app.use('/products', productRouter);
    app.use('/ad', adRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
