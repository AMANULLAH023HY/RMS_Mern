const express = require('express');
const router = express.Router();
router.post('/', require('../controllers/properties').createProperty);
router.get('/', require('../controllers/properties').getProperty);
router.get('/:id', require('../controllers/properties').getP);
router.delete('/:id', require('../controllers/properties').deleteP);
router.put('/:userID' , require('../controllers/properties').updateP);

// router.put('/:userID' , propertyController.updateP);
// router.get('/location/:locationName',propertyController.getPropertyByLocation);

module.exports = router;