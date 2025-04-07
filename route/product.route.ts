import express from 'express';
import {
  createProductController,
  updateProductController,
  retrieveProductController,
  retrieveProductByIdController,
  deleteProductController
} from '../controller/product.controller';

const router = express.Router();

router.post('/product', createProductController);
router.get('/products', retrieveProductController);
router.get('/product/:id', retrieveProductByIdController);
router.put('/product/:id', updateProductController);
router.delete('/product/:id', deleteProductController);

export default router;
