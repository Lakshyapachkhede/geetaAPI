const express = require('express');
require('dotenv').config();

const {connectMongoDb} = require('./connection.js');
const shlokRouter = require("./routes/shlok.router.js");
const adhyayRouter = require("./routes/adhyay.router.js");
const guideRouter = require('./routes/guide.router.js');

const {logReqRes} = require("./middlewares/index.js");

const app = express();
// const IP_ADDRESS = utils.getIPAddress();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"))

app.use(express.static('public'))

app.use("/", guideRouter);
app.use("/shlok", shlokRouter);
app.use("/adhyay", adhyayRouter);

connectMongoDb(process.env.DB_CONNECTION_STRING).then(()=>console.log("mongodb connected"));


app.listen(PORT, () => {
    console.log(`Listning at ${PORT}`)
})
