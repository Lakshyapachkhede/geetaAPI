const Adhyay = require('../models/adhyay.model');

async function getAllAdhyay(req, res) {
    const allAdhyay = await Adhyay.find().sort({number: 1});
    return res.json(allAdhyay)
}


async function getAdhyayByNumber(req, res) {
    const number = parseInt(req.params.number, 10);

    try {
            const adhyay = await Adhyay.findOne({ number: number});
            if (!adhyay){
                return res.status(404).json({ message: 'adhyay not found' });
            }
            return res.json(adhyay)
    } catch (err) {
        return res.status(404).json({message: "error retrieving adhyay", error: err})
    }
}

module.exports = {
    getAllAdhyay,
    getAdhyayByNumber,
}