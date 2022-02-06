const mongoose = require('mongoose')

const PointSchema = mongoose.Schema({
    
        username: { type: String, required: true },
        title: { type: String, required: true, min: 3 },
        desc: { type: String, required: true, min: 10 },
        rating: { type: Number, required: true, min: 0, max: 5 },
        lat: { type: Number, required: true},
        long: { type: Number, required: true},
      },
      { timestamps: true }
) 

const pointModel = mongoose.model('point' , PointSchema)

module.exports = pointModel