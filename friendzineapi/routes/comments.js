const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const commentController = require('../controllers/commentController')


    // Create a new Comment
  //  router.post('/comments', commentController.create);

// Retrieve all Comments
router.get('/', commentController.findAll);

    // // Retrieve a single Comment with CommentId
router.get('/:commentId', commentController.findOne);
    //
    // // Update a Note with CommentId
    // router.put('/comments/:commentId', commentController.update);
    //
    // // Delete a Note with CommentId
    // router.delete('/comment/:commentId', commentController.delete);

module.exports = router;
