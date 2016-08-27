var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tag = new Schema({
  tagName: {type: String, required: true},
  memeId: {type: String, required: true}
})

module.exports = mongoose.model('Tag', Tag);
