var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	level: { type: String, required: true }
});

module.exports = mongoose.model('Character', schema);