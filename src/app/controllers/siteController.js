const Product = require('../models/Product');

class siteController {
    home(req, res, next) {
        Product.find({})
            .lean()
            .then((products) => res.render('home', { products }))
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
