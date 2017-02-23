var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
  letter:String,
  frequency:Number
});

// the schema is useless so far
// we need to create a model using it
var Data = mongoose.model('Data', dataSchema);

// make this available to our users in our Node applications
module.exports = Data;
