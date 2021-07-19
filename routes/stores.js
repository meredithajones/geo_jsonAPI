const express = require ('express');
const router = express.Router();
const { getStores } = require('../controllers/stores');

// sample route
router.route('/').get(getStores);

module.exports = router;