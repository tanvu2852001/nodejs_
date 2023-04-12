const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/productController');

productController.index;

router.get('/create', productController.createproduct);
router.post('/store', productController.storeproduct);
router.get('/:id/edit', productController.editproduct);
router.put('/:id', productController.updateproduct);
router.delete('/:id', productController.destroyproduct);
router.get('/:slug', productController.productdetail);

module.exports = router;
