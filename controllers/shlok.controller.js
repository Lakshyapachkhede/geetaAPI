const Shlok = require('../models/shlok.model');

async function getAllShloks(req, res) {
    const allShloks = await Shlok.find();
    return res.json(allShloks)
}


async function getShlokByNumber(req, res) {
    const number = parseInt(req.params.number, 10);
    const chapter = parseInt(req.params.chapter, 10);
    try {
        const shlok = await Shlok.findOne({ number: number, chapter:chapter });
        if (!shlok){
            return res.status(404).json({ message: 'shlok not found' });
        }
        return res.json(shlok)
    } catch (err){
        return res.status(404).json({message: "error retrieving shlok"})
    }
}

async function getShlokByChapter(req, res){
    const chapter = parseInt(req.params.chapter, 10);
    try{
        const shloks = await Shlok.find({chapter: chapter});
        if (!shloks){
            return res.status(404).json({ message: 'shloks for chapter not found' });
        }
        return res.json(shloks);
    }
    catch (err){
        return res.status(404).json({message: "error retrieving shloks"})
    }
}

module.exports = {
    getAllShloks,
    getShlokByNumber,
    getShlokByChapter,
}