var express = require('express');
var Comment = require('../models/Comment');
const commentController = {};

commentController.findAll = (req, res) => {
  Comment.find ({}, (err, comments) => {
    res.json(comments);
  });

}
module.exports = commentController;
