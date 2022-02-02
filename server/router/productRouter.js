const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const auth = require('../middlewares/auth')

router.get('/products',  (req, res)=>{
    productController.getProducts(req, res)
 })

 router.get("/products/:id", (req, res) => {
    productController.getProduct(req, res);
})

router.post("/products",  auth,(req, res) => {
    productController.addProduct(req, res);
      
   })

   module.exports = router