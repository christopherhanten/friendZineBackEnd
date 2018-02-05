var mongoose  = require('mongoose');

var CommentSchema = mongoose.Schema({
    comment   : String,
    link      : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);
