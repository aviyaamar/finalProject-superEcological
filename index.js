const express = require('express')
require('./server/db/mongoose')
const cors = require('cors');
const dotenv = require("dotenv");

const userRouter = require('./server/router/userRouter')
const productRouter = require('./server/router/productRouter')
const categoriesRouter = require('./server/router/catgoeyRouter')
const orderRouter = require('./server/router/orderRouter')
const pointRouter = require('./server/router/pointRouter')

dotenv.config();
console.log(process.env.REACT_APP_MAPBOX);



const app = express()
const PORT = process.env.PORT || 5000

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
  });
  app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(productRouter);
app.use(categoriesRouter)
app.use(orderRouter)
app.use(pointRouter)


app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})
app.listen(PORT, ()=>{
    console.log(`app is live at ${PORT}`);
})