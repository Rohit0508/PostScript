const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

//cookie-parser - what is this and why we need this ?

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

const post = require("./routes/post");
app.use("/api/v1", post);

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//actuivate

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})