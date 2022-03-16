const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cors = require ('cors');


const app = express();

app.use(helmet());

app.use(cors())

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use("/user", require("./routes/userRoutes"));
app.use("/post", require("./routes/postRoutes"));
app.use("/comment", require("./routes/commentRoutes"));


module.exports = app;