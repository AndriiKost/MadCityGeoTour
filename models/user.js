const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// userGeoObject Schema
const userGeoObjectSchema = new Schema({
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

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    geoObjects: [userGeoObjectSchema]
});

const User = module.exports = mongoose.model('User', UserSchema);

// Allow to call the find function from the outside of the file
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
};

// Encrypt password
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

// Compare password function
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}
