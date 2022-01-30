const express = require('express')
require('./server/db/mongoose')
const cors = require('cors');

const userRouter = require('./server/router/userRouter')

const app = express()
const PORT = process.env.PORT || 5000

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
  });
  app.use(cors());
app.use(express.json());
app.use(userRouter);



app.listen(PORT, ()=>{
    console.log(`app is live at ${PORT}`);
})