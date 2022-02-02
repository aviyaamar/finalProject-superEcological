const mongoose = require('mongoose')
const uri = 'mongodb+srv://aviyahazan:aviya2804@finalproject.oeixo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(uri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})