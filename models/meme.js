var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Meme = new Schema({
  memeURL: {type: String, required: true}
})

module.exports = mongoose.model('Meme', Meme);
