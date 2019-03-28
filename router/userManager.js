var express = require('express');
var userModel = require('../models').tbl_user;

var router = express.Router();

router.get('/', (req, res, next) => {
    try {
        const users = userModel.findAll();
        res.send( {users});
    } catch(e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;
