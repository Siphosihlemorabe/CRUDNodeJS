import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controller/product.controller.js'

const router = express.Router()
router.get("/",getAllProducts)
router.post("/",createProduct)
router.delete("/:id",deleteProduct)
router.patch("/:id",updateProduct)
router.get("/:id",getProduct)


export default router