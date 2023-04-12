const Product = require('../models/Product');

class adController {
    storedProducts(req, res, next) {
        Product.find({})
            .lean()
            .then((products) => res.render('ad/stored-products', { products }))
            .catch(next)
    }

    createproduct(req, res, next) {
        res.render('ad/create');
    }

    storeproduct(req, res, next) {
        const product = new Product(req.body);
        product.save();
    }

    editproduct(req, res, next){
        Product.findById(req.params.id)
        .lean()
        .then((products) => {
            res.render('ad/edit', { products })
        })
        .catch(next)
    }

    updateproduct(req, res, next){
        Product.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('ad/stored-products'))
            .catch(next)
    }

    destroyproduct(req, res, next){
        Product.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new adController();
