const Product = require('../models/Product');
const Category = require('../models/Category');

class adController {

    //Product function
    storedProduct(req, res, next) {
        Product.find({})
            .lean()
            .then((products) => res.render('ad/stored-products', { products }))
            .catch(next);
    }

    createproduct(req, res, next) {
        Category.find({})
            .lean()
            .then((category) => res.render('ad/create', { category }))
            .catch(next);
    }

    storeproduct(req, res, next) {
        const product = new Product(req.body);
        product
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    editproduct(req, res, next) {
        Product.findById(req.params.id)
            .lean()
            .then((products) => {
                res.render('ad/edit', { products });
            })
            .catch(next);
    }

    updateproduct(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/ad/stored-products'))
            .catch(next);
    }

    destroyproduct(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    trashproduct(req, res, next) {
        Product.findDeleted({})
            .lean()
            .then((products) => res.render('ad/trash-products', { products }))
            .catch(next);
    }

    restoreproduct(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    forceDestroyproduct(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //Category function
    createcategory(req, res, next){
        res.render('ad/createcategory');
    }

    storecategory(req, res, next){
        const category = new Category(req.body);
        category
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    storedcategory(req, res, next){
        Category.find({})
            .lean()
            .then((category) => res.render('ad/stored-category', { category }))
            .catch(next);
    }

    editcategory(req, res, next){
        Category.findById(req.params.id)
            .lean()
            .then((category) => {
                res.render('ad/editcategory', { category });
            })
            .catch(next);
    }

    updatecategory(req, res, next) {
        Category.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/ad/stored-category'))
            .catch(next);
    }

    destroycategory(req, res, next) {
        Category.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    trashcategory(req, res, next) {
        Category.findDeleted({})
            .lean()
            .then((category) => res.render('ad/trash-category', { category }))
            .catch(next);
    }

    restorecategory(req, res, next) {
        Category.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    forceDestroycategory(req, res, next) {
        Category.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new adController();
