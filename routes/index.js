var express = require('express');
var router = express.Router();

var webController = require('../controllers/web_controller');
router.get("/", webController.index);

module.exports = router;