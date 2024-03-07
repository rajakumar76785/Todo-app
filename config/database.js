const mongoose = require('mongoose');

    require("dotenv").config();

const dbconnect = () => {
      mongoose.connect(process.env.DATABASE_URL,{
      })
      .then(()=>{
        console.log("database connection successfull")
      })
      .catch((error) => {
        console.log("issue in database connection");
        console.error(error.message);
        process.exit(1);
      });
}

module.exports = dbconnect;