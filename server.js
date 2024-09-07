const express = require("express");
const app = express();
const bodyParser= require('body-parser');

//middleware
app.use(bodyParser.json());

//routes
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
app.use(cors());

app.use("/users",userRoutes);

//start the server
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is running 2");
});