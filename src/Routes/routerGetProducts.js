const { Router } = require('express');

const { configs } = require('../configs');
const { controllerGetProducts } = require('../Controllers/controllerGetProducts');
const { controllerGetProduct } = require('../Controllers/controllerGetProduct');
const {  getProduct,getProducts } = configs;

const router = Router();

router.get(`/${getProducts}/`, controllerGetProducts);
router.get(`/${getProduct}/:id`, controllerGetProduct);

module.exports = router;
