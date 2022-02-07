const Product = require('../models/productModel')

const addProduct = async(req,res)=>{
    const {product} = req.body
    console.log(product);
    const productModel = new Product({
        name : product.name , 
        price : product.price,
        description : product.description,
        countInStock : product.countInStock ,
        image : product.image ,
        category : product.category,
        isAvailable:product.isAvailable

    })

    productModel.save(err=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' });
        }else{
            res.send('Product Added Successfully')
        }
    })
  
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

const deleteProduct = async(req, res)=>{
    Product.findByIdAndDelete(req.body.productid , (err)=>{
        if(err){
            return res.status(400).send(err);
        }else{
            res.send('Product deleted successfully')
            
        }
    })
}
const updateProduct = async(req,res)=>{
    Product.findByIdAndUpdate(req.body.productid , {
        name : req.body.updatedproduct.name,
        price : req.body.updatedproduct.price,
        category : req.body.updatedproduct.category,
        description : req.body.updatedproduct.description,
        countInStock : req.body.updatedproduct.countInStock,
        image : req.body.updatedproduct.image

    } , (err)=>{

        if(err){
            return res.status(400).json({ message: 'Something went wrong'+err });
        }
        else{
            res.send('Product Updated Successfully')
        }

    })
  
}

const getProductById = async(req, res)=>{
    Product.find({_id : req.body.productid} , (err , docs)=>{

        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({ message: 'something went wrong' });
        }

    })
}
module.exports = {
    addProduct,
    getProducts,
    getProduct, 
    deleteProduct, 
    updateProduct,
    getProductById
}