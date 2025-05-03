const express = require('express');
const router = express.Router();
const menuController = require('../controllers/indexController');

router.get('/', indexController.renderIndex);
module.exports = router;
