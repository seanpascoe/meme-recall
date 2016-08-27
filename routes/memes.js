var express = require('express');
var router = express.Router();
var Meme = require('../models/meme');

router.get('/', function(req, res) {
  Meme.find(function(err, memes) {
    res.json(memes);
  });
});

// router.get('/:id', function(req, res) {
//   res.render('bucket');
// });

router.post('/', function(req, res) {
  new Meme({
    memeURL: req.body.memeURL,
  }).save(function(err, meme) {
    res.json(meme);
  });
});

module.exports = router;
