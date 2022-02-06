const express = require('express')
const router = express.Router()
const pointRouter = require('../controller/pointController')

router.get('/points',  (req, res)=>{
    pointRouter.getAllPoint(req, res)
 })

 router.post('/points',  (req, res)=>{
    pointRouter.addPoint(req, res)
 })

 
 module.exports = router