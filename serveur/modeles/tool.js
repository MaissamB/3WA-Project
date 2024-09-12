const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    isChecked: { type: Boolean }
});

module.exports = mongoose.model('Tool', toolSchema, 'tools');