var mongoose  = require('mongoose');

var NoteSchema = mongoose.Schema({
    content   : String,
    link      : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
