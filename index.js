const express = require('express')
const cors = require("cors")
//const mongoose=require('mongoose')
require('./db/config');
const users = require('./db/users')
const app = express();





app.use(cors());



app.get('/', async (req, res) => {
    let products = await users.find();
    if (products.length > 0) {
        res.send(products)
        console.log(products)
    }
    else {
        res.send({ result: "NO Products found" })
    }

})
app.listen(5000);