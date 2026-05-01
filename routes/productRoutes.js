import express from 'express';
import { createProduct, getAllProduct, updateProduct } from '../controllers/productController.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.post('/create',isAuth,createProduct);
router.put('/update/:id',updateProduct)
router.get('/all',getAllProduct)

export default router;