const express = require('express');
const router = express.Router();
const { create, categoryById, read, update, remove, list } = require('../controller/categoryController');

router.get('/category/:categoryId', read);
router.post('/category/create', create);
router.get('/categories', list);
router.param('categoryId', categoryById);

module.exports = router;