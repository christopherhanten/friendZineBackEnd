const express = require('express');
const router = express.Router();
const models = require('../models');

module.exports = function(app) {

    var comment = require('../controllers/comment.controller.js');

    // Create a new Comment
    app.post('/comments', comment.create);

    // Retrieve all Comments
    app.get('/comments', comment.findAll);

    // Retrieve a single Note with CommentId
    app.get('/comments/:commentId', comment.findOne);

    // Update a Note with CommentId
    app.put('/comments/:commentId', comment.update);

    // Delete a Note with CommentId
    app.delete('/comment/:commentId', comment.delete);

    // Add a comment from addMusic
    app.get('/addMusic' (req,res) {
      res.render('/addMusic')
    });
    app.post('/addMusic', comment.create);

    // Add a comment from addLink
    app.get('/addLink' (req,res) {
      res.render('/addLink')
    });
    app.post('/addLink', comment.create);   
}
