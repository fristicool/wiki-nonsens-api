const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { artikel } = require('../artikel')

router.get('/', (req, res) => {
    artikel.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving artikels :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var art = new artikel({
        titel: req.body.titel,
        samenvatting: req.body.samenvatting,
        content: req.body.content,
        date: req.body.date
    });
    art.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in artikel Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var art = new artikel({
        titel: req.body.titel,
        samenvatting: req.body.samenvatting,
        content: req.body.content,
        date: req.body.date
    });
    artikel.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in artikel Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/name/:name', (req, res) => {
    artikel.findOne({titel: req.params.name}, function(err, doc) {
        if (!err) { res.send(doc); }
        else { console.log('Error in artikel Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;