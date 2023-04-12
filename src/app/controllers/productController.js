const Product = require('../models/Product');

class productController {

    productdetail(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .lean()
            .then((products) => {
                res.render('products/detail', { products });
            })
            .catch(next);
    }

}

module.exports = new productController();
