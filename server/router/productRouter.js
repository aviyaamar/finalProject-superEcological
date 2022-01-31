const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.get('/products',  (req, res)=>{
    productController.getProducts(req, res)
 })

 router.get("/products/:id", (req, res) => {
    productController.getProduct(req, res);
})

router.post("/products",  (req, res) => {
    productController.addProduct(req, res);
      
   })

   module.exports = router