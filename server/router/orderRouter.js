const express = require("express");
const router = express.Router();
const orderController = require('../controller/orderController')


router.post('/order/placeorder',   (req, res)=>{
  orderController.addPayment(req, res)
})

router.post('/order/getordersbyuserid', (req, res)=>{
  orderController.addOrderByUserID(req, res)
})

router.post('/order/getorderbyid', (req, res)=>{
  orderController.getOrderById(req, res)
})
router.get('/order/getallorders', (req, res)=>{
  orderController.getAllOrders(req, res)
})
module.exports=router