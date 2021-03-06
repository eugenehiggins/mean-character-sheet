var express = require('express');
var router = express.Router();
var Character = require('../models/character');

router.get('/', function (req, res, next) {

    res.render('index');
});

router.get('/:name', function (req, res, next) {

	Character.findOne({'name': req.param.name}, 'name', function (err,char){
		if (err) return 'Error! ' + err;
	})
    res.render('index');
    //res.render('index',{character: char});
});

router.post('/', function(req, res, next) {
	var email = req.body.email;
	var char = new Character({
		name: 'mordor'
	});

	char.save();

    res.redirect('/');
});

module.exports = router;
