const mongoose = require('mongoose');
require('dotenv').config();
const connection = mongoose.connect(process.env.MONGOURL)

module.export = { connection }






















// const mongoose = require('mongoose');

// const connection=mongoose.connect("mongodb://127.0.0.1:27017")

// module.export={connection}