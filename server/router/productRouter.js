const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
// const auth = require('../middlewares/auth')

router.get('/products',  (req, res)=>{
    productController.getProducts(req, res)
 })

 router.get("/products/:id", (req, res) => {
    productController.getProduct(req, res);
})

router.post("/products/addproduct", (req, res) => {
    productController.addProduct(req, res);
      
   })
router.post('/products/deleteproduct', (req, res)=>{
    productController.deleteProduct(req, res)
})
router.post('/products/updateproduct', (req, res)=>{
    productController.updateProduct(req, res)
})

router.post("/products/getproductbyid", (req, res) => {
    productController.getProductById(req,res)

})



   module.exports = router