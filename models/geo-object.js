const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// GeoObject Schema
const GeoObjectSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  coords: {
    latitude: {type: Number},
    longitude: {type: Number}
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  visited: {
    type: Boolean,
    required: false
  }
});

module.exports = mongoose.model('GeoObject', GeoObjectSchema);

// // Allow to call the find function from the outside of the file
// module.exports.getUserById = function(id, callback){
//   User.findById(id, callback);
// };

// module.exports.getUserByUsername = function(username, callback){
//   const query = {username: username};
//   User.findOne(query, callback);
// };

// // Encrypt password
// module.exports.addUser = function(newUser, callback) {
//   bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if(err) throw err;
//           newUser.password = hash;
//           newUser.save(callback);
//       });
//   });
// }
