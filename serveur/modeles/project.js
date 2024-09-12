const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    tools: [{ type: mongoose.Schema.Types.ObjectId }],
    materials: [{type: mongoose.Schema.Types.ObjectId}]
});

module.exports = mongoose.model('Project', projectSchema, 'project');