var express   = require('express');
var router    = express.Router();

/* GET Conversation. */
router.get('/', function(req, res, next) {
  res.json({comment: [{name: 'Timmy'}]});
});

module.exports = router;
