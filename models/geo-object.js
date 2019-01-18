const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// GeoObject Schema
const GeoObject = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  coords: {
    latitude: [Number],
    longitude: [Number]
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const GeoObject = module.exports = mongoose.model('GeoObject', GeoObject);
