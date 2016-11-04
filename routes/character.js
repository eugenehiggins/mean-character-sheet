var express = require('express');
var router = express.Router();
var Character = require('../models/character');


router.get('/', function (req, res, next) {

    res.render('index',{character: this.char});
});

module.exports = router;