const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    projects: [{type: mongoose.Schema.Types.ObjectId}]
});

module.exports = mongoose.model('user', userSchema, 'user');