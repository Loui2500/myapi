require("dotenv").config();
const express = require("express")
const formidable = require("express-formidable")
const animals = require("./routes/animals")
//set up express app
const app = express();

//import db-connection
require("./database")

//parse http form data
app.use(formidable());

//set up app routes
app.use("/api/v1", animals);

app.listen(4000, function(){
    console.log("now listening for requests on port 4000")
})