const fs = require('fs');
const utils = require("../utils");
function logReqRes(fileName) {
    return (req, res, next) => {
        fs.appendFile(fileName,
            `${utils.getCurrentDateTime()}: ${req.method}: ${req.path}\n`,
            (err, data) => {
                next();
            }
        );
    };
}

module.exports = {
    logReqRes,
}