const express = require("express");
const router = express.Router();
const orderController = require('../controller/orderController')
const auth =  require('../middlewares/auth')

router.post('/order/placeorder',  (req, res)=>{
  orderController.addPayment(req, res)
})
module.exports=router