var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataDateSchema = new Schema({
  date:String,
  frequency:Number
});

// the schema is useless so far
// we need to create a model using it
var DataDate = mongoose.model('DataDate', dataDateSchema);

// make this available to our users in our Node applications
module.exports = dataDateSchema;
