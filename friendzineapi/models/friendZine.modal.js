var mongoose  = require('mongoose');

var CommentSchema = mongoose.Schema({
    comment   : String,
    link      : String
}, {
    timestamps: true
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
