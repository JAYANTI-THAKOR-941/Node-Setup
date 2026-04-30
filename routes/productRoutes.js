import express from 'express';
import { createProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/create',createProduct);
router.put('/update/:id',updateProduct)

export default router;