var express = require('express');
var router = express.Router();

var Character = require('../models/character');

router.get('/', function (req, res, next) {
    Character.findOne()
        .exec(function(err,character){
           if(err){
               return res.status(500).json({
                   title: 'Error: couldn\'t find character',
                   error: err
               })
           }
           res.status(200).json({
               message: 'Success: found character',
               obj: character
           })
        });
    //res.render('index',{character: this.char});
});

module.exports = router;