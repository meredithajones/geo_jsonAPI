const express = require ('express');
const router = express.Router();

// sample route
router.get('/api/v1/stores', (req, res) => {
    res.send('hello');
});

module.exports = router;