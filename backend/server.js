const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(console.log("mongodb connected"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });



const exerciseRouter = require('./routes/excercise')
const userRouter = require('./routes/users')

app.use('/excercise',exerciseRouter)
app.use('/users',userRouter)

app.listen(port, () => {
  console.log(`Server is running on prot: ${port}`);
});
