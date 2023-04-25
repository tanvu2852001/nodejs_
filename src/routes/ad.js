const express = require('express');
const router = express.Router();

const adController = require('../app/controllers/adController');


//Router category
router.get('/createcategory', adController.createcategory);
router.post('/storecategory', adController.storecategory);
router.get('/stored-category', adController.storedcategory);
router.get('/:id/editcategory', adController.editcategory);
router.put('/:id', adController.updatecategory);
router.delete('/:id', adController.destroycategory);
router.patch('/:id/restorecategory', adController.restorecategory);
router.delete('/:id/forcecategory', adController.forceDestroycategory);
router.get('/trash/category', adController.trashcategory);

//Router products
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
