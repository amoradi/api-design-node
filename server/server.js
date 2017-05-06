// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

app.use(morgan());

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions

// var routeSchema = {
//  "Get /lions": {
//   "desc": "return all lions",
//   "repsonse": "200 app/json",
//   "data": [{}, {}, {}]
//  },
//  "Get /lions/:id": {
//   "desc": "return a lion",
//   "repsonse": "200 app/json",
//   "data": {}
//  },
//  "Post /lions": {
//   "desc": "create & return a lion",
//   "repsonse": "201 app/json",
//   "data": {}
//  },
//  "Put /lions/:id": {
//   "desc": "update & return a lion",
//   "repsonse": "200 app/json",
//   "data": {}
//  },
//  "Delete /lions/:id": {
//   "desc": "destroy & return a lion",
//   "repsonse": "200 app/json",
//   "data": {}
//  }
// };

// read all lions
app.get("/lions", function(req, res) {
  res.json(lions);
});

// read a lion
app.get("/lions/:id", function(req, res) {
  var lion = _.find(lions, {id: req.params.id});

  res.json(lion || {});
});

// create & read a lion
app.post("/lions", function(req, res) {
  // create/add lion
  var lion = req.body;
  id++;
  lion.id = id + "";

  lions.push(lion);

  // return created lion
  res.json(lion);
});

// update & read a lion
app.put("/lions/:id", function(req, res) {
  var updateLion = req.body;

  if (updateLion.id) {
    delete updateLion.id;
  }

  var lionIndex = _.findIndex(lions, {id: req.params.id});

  if (!lions[lionIndex]) {
    res.send();
  } else {
    var updatedLion = _.assign(lions[lionIndex], updateLion);
    res.json(updatedLion);
  }
});

// destroy & read a lion
app.delete("/lions/:id", function(req, res) {
  // find obj with params.id
  // delete from lions []
  // return deleted {}
  var lion = _.find(lions, {id: req.params.id});

  lions = _.remove(lions, {id: lion.id});

  res.json(lion);
});

app.get
app.listen(3000);
console.log('on port 3000');
