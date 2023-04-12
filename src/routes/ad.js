const express = require('express');
const router = express.Router();

const adController = require('../app/controllers/adController');

router.get('/stored-products', adController.storedProducts);
router.get('/create', adController.createproduct);
router.post('/store', adController.storeproduct);
router.get('/:id/edit', adController.editproduct);
router.put('/:id', adController.updateproduct);
router.delete('/:id', adController.destroyproduct);

module.exports = router;
