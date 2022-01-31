const Product = require('../models/productModel')

const addProduct = async(req,res)=>{
    const product = new Product(req.body)
    try{
        
        await product.save()
        return res.status(201).send(product)
    }
    catch(e){
        return res.status(400).send(e)
    }
}

const getProducts = async(req, res)=>{
    try{
        const products = await Product.find({})
        return res.status(201).send(products)
    }
    catch(e)
    {
        return res.status(500).send(e)
    }
}

const getProduct = async(req, res)=>{
    const _id = req.params.id;
    
      try {
        const product = await Product.findById(_id);
        if (!product) {
          return res.status(400).send();
        }
        res.send(product);
      } catch (e) {
        res.status(500).send(e.message);
      }
    
}

module.exports = {
    addProduct,
    getProducts,
    getProduct
}