const express = require('express');
const router = express.Router();

// Require the controllers
const geoObject_controller = require('../controllers/geoObject');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', geoObject_controller.test);

router.post('/create', geoObject_controller.create_geoObjects);

router.get('/', geoObject_controller.geoObjects_list);

router.get('/:id', geoObject_controller.geoObject_details);

module.exports = router;
