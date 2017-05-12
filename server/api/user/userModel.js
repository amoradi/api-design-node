var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  posts [
    {
      ref: 'posts',
      type: Schema.Types.ObjectId
    }
  ]
});

module.exports = mongoose.model('user', UserSchema);
