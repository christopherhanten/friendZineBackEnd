var mongoose  = require('mongoose');
let Schema = mongoose.Schema;

var CommentSchema = new Schema({
    comment   : String,
    link      : String
    // timestamps: true
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
