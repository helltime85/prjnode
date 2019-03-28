var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('wiki home page');
});

router.get('/about', (req, res) => {
    res.send('about this wiki');
});

module.exports = router
