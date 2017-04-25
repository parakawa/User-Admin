var express = require('express');
var router = express.Router();

var webController = require('../controllers/web_controller');
var loginController = require('../controllers/login_controller');

router.get("/", webController.index);
router.get("/admin", webController.admin);
router.post('/signUp', loginController.signUp);
router.post('/login', loginController.login);

module.exports = router;