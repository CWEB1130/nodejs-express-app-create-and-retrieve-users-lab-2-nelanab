var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let userData = fs.readFileSync('./users.json');
  var siteUsers = JSON.parse(userData);

  //Assigning the parsed array of objects read-in from users.json to a variable called createdUsers
  var createdUsers = siteUsers;
  res.render('users', {createdUsers});
});

module.exports = router;

