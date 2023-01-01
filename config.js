require("dotenv").config()
const mongoose = require('mongoose');
const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connection = mongoose.connect('mongodb://127.0.0.1:27017/techs',connectionparams);

module.exports=connection;