const Point = require('../models/PointModel')

const addPoint = async(req, res)=>{
    const newPoint = new Point(req.body)
    try{
        const response = await newPoint.save()
        return res.status(200).send(response);
    }
    catch(err){
        return res.status(500.)
    }

}
const getAllPoint = async(req, res)=>{
    try{
        const point = await Point.find()
        return res.status(200).send(point)
    }
    catch(e){
        return  res.status(500).send(err);
    }

}

const getPoint = async(req, res)=>{
    const name = req.body;
    
    try {
      const point = await Point.findOne(name);
      if (!point) {
        return res.status(400).send();
      }
      res.send(point);
    } catch (e) {
      res.status(500).send(e.message);
    }
}

module.exports = {
    addPoint, 
    getAllPoint, 
    getPoint
}