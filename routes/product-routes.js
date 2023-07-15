import express from 'express';
import { addProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/product-controllers.js';


const router=express.Router();

router.get('/getallproducts',getAllProducts);
router.post('/addproduct',addProduct);
router.put('/updateproduct/:_id',updateProduct);
router.delete('/deleteproduct/:_id',deleteProduct);


export default router;