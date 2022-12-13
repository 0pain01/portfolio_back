const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name : String,
	para:String

});

module.exports = mongoose.model.Feeds || mongoose.model('Feeds',userSchema);
