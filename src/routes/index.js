const express = require("express");
const router = express.Router();
const link = require("../config/link");
const indexController = require('../controllers/indexController');

router.get('/', indexController.renderIndex);

module.exports = router;