const GeoObject = require('../models/geo-object');

// Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// Post objects
exports.create_geoObjects = function (req, res, next) {
  let geoObject = new GeoObject(
    {
      id: req.body.id,
      coords: {
        latitude: req.body.coords.latitude,
        longitude: req.body.coords.longitude
      },
      name: req.body.name,
      address: req.body.address
    }
  );

  // console.log('Geoobject ----**********>',geoObject);

  geoObject.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Geo Objects created successfully')
  })
};

// Get One object by ID
exports.geoObject_details = (req, res, next) => {
  const id = req.params.id;
  GeoObject.findById(id, 'description', (err, GeoObject) => {
    if (err) return next(err);
    res.send(GeoObject)
  })
};

// Read existing objects
exports.geoObjects_list = function (req, res, next) {
  GeoObject.find(function (err, GeoObjects) {
      if (err) return next(err);
      res.send(GeoObjects);
  })
};
