const mongoose = require('mongoose');

const adhyaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    nameMeaning: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,

    },
    number:{
        type: Number,
        required: true,
    },
    hindiNumber: {
        type: String,
        required: true,
    }


},
    {timestamps: true}
);

const Adhyay = mongoose.model('adhyay', adhyaySchema);



module.exports = Adhyay;