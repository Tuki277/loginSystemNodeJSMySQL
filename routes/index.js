var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index')

/* GET home page. */
// router.get('/', indexController.getLogin)
router.route('/')
  .get(indexController.getLogin)
  .post(indexController.authenticationLogin)

router.route('/register')
  .get(indexController.getRegister)
  .post(indexController.registerAccount)

module.exports = router;
