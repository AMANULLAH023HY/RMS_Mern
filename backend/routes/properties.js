const express = require('express');
const router = express.Router();
router.post('/', require('../controllers/properties').createProperty);
router.get('/', require('../controllers/properties').getProperty);
router.get('/:id', require('../controllers/properties').getP);
router.delete('/:id', require('../controllers/properties').deleteP);
router.put('/:userID' , require('../controllers/properties').updateP);

module.exports = router;