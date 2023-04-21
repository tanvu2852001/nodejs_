const express = require('express');
const router = express.Router();

const adController = require('../app/controllers/adController');

router.get('/stored-products', adController.storedProduct);
router.get('/trash/products', adController.trashproduct);
router.get('/create', adController.createproduct);
router.post('/store', adController.storeproduct);
router.get('/:id/edit', adController.editproduct);
router.put('/:id', adController.updateproduct);
router.patch('/:id/restore', adController.restoreproduct);
router.delete('/:id', adController.destroyproduct);
router.delete('/:id/force', adController.forceDestroyproduct);

module.exports = router;
