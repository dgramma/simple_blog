const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    likes: {type: Number, required: true, default: 0},
}, {timestamps: true});

module.exports = mongoose.model('posts', Post);