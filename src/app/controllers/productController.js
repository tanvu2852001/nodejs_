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

    createproduct(req, res, next) {
        res.render('products/create')
    }

    storeproduct(req, res, next) {
        const product = new Product(req.body)
        product.save();
    }
}

module.exports = new productController();
