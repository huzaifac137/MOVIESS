require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const movieRoute = require("./ROUTES/movieRoute");



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/*app.use((req, res , next)=>{

    res.setHeader("Access-Control-Allow-Origin" , "*");
    res.setHeader("Access-Control-Allow-Methods" , "GET,POST,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers" , "X-Requested-With,Content-Type,Authorization,Origin,Accept ");
}); */

app.use("/api" , movieRoute );

try
{
     mongoose.connect(process.env.DB_URI ,{
         useNewUrlParser : true
     });

    console.log("mongodb connected successfully");
    app.listen(port);
}

catch(err)
{
    console.log(err);
}


console.log("started");