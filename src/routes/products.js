const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/productController');

productController.index;

router.get('/create', productController.createproduct);
router.post('/store', productController.storeproduct);
router.get('/:slug', productController.productdetail);

module.exports = router;
