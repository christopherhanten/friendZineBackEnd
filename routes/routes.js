const express = require('express');
const router = express.Router();
const models = require('../models');

module.exports = function(app) {

    var comment = require('../controllers/comment.controller.js');

    // Create a new Note
    app.post('/comments', comment.create);

    // Retrieve all Notes
    app.get('/comments', comment.findAll);

    // Retrieve a single Note with noteId
    app.get('/comments/:commentId', comment.findOne);

    // Update a Note with noteId
    app.put('/comments/:commentId', comment.update);

    // Delete a Note with noteId
    app.delete('/comment/:commentId', comment.delete);
}
