const path = require('path');

async function guideHome(req, res) {
    res.sendFile(path.join(__dirname, '../public/guideHome.html'));
}

module.exports = {
    guideHome,
}