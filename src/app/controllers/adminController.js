const Product = require('../models/Product');

class adminController {
    storedProducts(req, res, next) {
        Product.find({})
            .lean()
            .then((products) => res.render('admin/stored-products', { products }))
            .catch(next)
    }       
}

module.exports = new adminController();
