const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/route.js");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://lata11phartyal:Hanu171994@cluster0.3on7m8e.mongodb.net/mern_batch")
    .then(() => console.log("Mongo is connected"))
    .catch(err => console.log(err))
app.use('/', route);
app.listen(process.env.PORT || 3333, function () {
    console.log(' Express app running on port ' + (process.env.PORT || 3333));
})