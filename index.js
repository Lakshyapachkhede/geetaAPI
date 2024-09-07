const express = require('express');
const utils = require('./utils.js')

const {connectMongoDb} = require('./connection.js')
const shlokRouter = require("./routes/shlok.router.js")
const adhyayRouter = require("./routes/adhyay.router.js")

const {logReqRes} = require("./middlewares/index.js");

const app = express();
const IP_ADDRESS = utils.getIPAddress();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"))

app.use("/shlok", shlokRouter);
app.use("/adhyay", adhyayRouter);

connectMongoDb("mongodb://127.0.0.1:27017/geetaAPI").then(()=>console.log("mongodb connected"));


app.listen(PORT, IP_ADDRESS, () => {
    console.log(`Listning at https://${IP_ADDRESS}:${PORT}`)
})
