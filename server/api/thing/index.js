'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/main/:page', controller.index);

router.get('/appid', controller.getTopAppid);
router.get('/lang/:lang/:page', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


module.exports = router;