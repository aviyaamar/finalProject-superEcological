const mongoose = require('mongoose')

const PointSchema = mongoose.Schema({
    
        name: { type: String, required: true , unique: true,  },
        english_name:{type:String,  unique: true, }, 
        latt: { type: Number,  unique: true, },
        long: { type: Number,  unique: true, },
        isComing: {type:Boolean, required: true, default: true}
        
    
        
      },
      { timestamps: true }
) 

const pointModel = mongoose.model('point' , PointSchema)

module.exports = pointModel