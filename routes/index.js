var express = require('express');
const { messages } = require('./message');
var router = express.Router();
const moment=require("moment");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , data:[...messages],moment:moment});
});

module.exports = router;
