const mongoose = require('mongoose');

const shlokSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },

    meaning: {
        type: String,
        required: true,

    },
    chapter:{
        type: Number,
        required: true,
    },
    shlokNo: {
        type: String,
        required: true,

    },
    number:{
        type: Number,
        required: true,
    }



},
    {timestamps: true}
);

const Shlok = mongoose.model('shlok', shlokSchema);



module.exports = Shlok;