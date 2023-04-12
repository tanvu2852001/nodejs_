const Product = require('../models/Product');

class productController {

    storedProducts(req, res, next) {
        Product.find({})
            .lean()
            .then((products) => res.render('products/stored-products', { products }))
            .catch(next)
    }       

    productdetail(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .lean()
            .then((products) => {
                res.render('products/detail', { products });
            })
            .catch(next);
    }

    createproduct(req, res, next) {
        res.render('products/create');
    }

    storeproduct(req, res, next) {
        const product = new Product(req.body);
        product.save();
    }

    editproduct(req, res, next){
        Product.findById(req.params.id)
        .lean()
        .then((products) => {
            res.render('products/edit', { products })
        })
        .catch(next)
    }

    updateproduct(req, res, next){
        Product.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('stored-products'))
            .catch(next)
    }

    destroyproduct(req, res, next){
        Product.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

}

module.exports = new productController();
