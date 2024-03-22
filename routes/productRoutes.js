// const express = require('express');
// const router = express.Router();
// const { getAllProducts, createProduct, updateProduct, deleteProduct, getProduct, addProduct } = require('../controllers/productController');
// const productController = require('../controllers/productController');

// router.get('/products', productController.getAllProducts);  // ตรวจสอบว่า getAllProducts ถูกกำหนดและนำเข้าถูกต้อง

// router.get('/', getAllProducts);
// router.post('/', createProduct);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);
// // ตรวจสอบว่าทุก route มี callback function ที่ถูกต้อง
// router.get('/product', getProduct);  // ตรวจสอบว่า getProduct ถูกนำเข้าและกำหนดไว้ถูกต้อง
// router.post('/product', addProduct); // ตรวจสอบว่า addProduct ถูกนำเข้าและกำหนดไว้ถูกต้อง


// module.exports = router;

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// ตรวจสอบว่า productController.addProduct มีอยู่จริง
router.post('/add', productController.addProduct);

module.exports = router;
