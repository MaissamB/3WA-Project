const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    needed: { type: Number },
    current: { type: Number },
});

module.exports = mongoose.model('Material', materialSchema, 'materials');