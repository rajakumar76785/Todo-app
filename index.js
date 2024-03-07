const express = require('express');
const app = express();
//const bodyParser = require('body-parser')
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//app.use(bodyParser.json());
app.use(express.json());

const todosRoutes = require("./routes/todos");

app.use(todosRoutes);

app.listen(PORT,()=>{
    console.log(`server started at port node ${PORT}`);
});

const dbconnect = require("./config/database");
dbconnect();

app.get("/",(req,res)=>{
    res.send(`<h1>This is Home Page </h1>`)
});