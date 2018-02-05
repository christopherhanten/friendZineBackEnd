var Note = require('../models/comment.model.js');

exports.create   = function(req, res) {
    // Create and Save a new Note
    if(!req.body.content) {
        res.status(400).send({message: "Comment can not be empty"});
    }
     var comment = new Comment({content: req.body.content});

     note.comment(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Comment."});
        } else {
            res.send(data);
        }
    });

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Comment.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving comments."});
        } else {
            res.send(comments);
        }
    });
};
exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Comment.findById(req.params.commentId, function(err, data) {
       if(err) {
           res.status(500).send({message: "Could not retrieve comment with id " + req.params.commentId});
       } else {
           res.send(data);
       }
    });
};

exports.update  = function(req, res) {
    // Update a comment identified by the commentId in the request
    Comment.findById(req.params.commentId, function(err, comment) {
        if(err) {
            res.status(500).send({message: "Could not find a comment with id " + req.params.commentId});
        }

        comment.content = req.body.content;

        comment.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update comment with id " + req.params.commentId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete  = function(req, res) {
    // Delete a note with the specified noteId in the request
    Comment.remove({_id: req.params.commentId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete comment with id " + req.params.id});
        } else {
            res.send({message: "Comment deleted successfully!"})
        }
    });
};
