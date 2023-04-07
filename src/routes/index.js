const petRouter = require('./pet');
const siteRouter = require('./site');
const productRouter = require('./products');
const adminRouter = require('./admin');

function routes(app) {
    app.use('/pet', petRouter);
    app.use('/products', productRouter);
    app.use('/admin', adminRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
