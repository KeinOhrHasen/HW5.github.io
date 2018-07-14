function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;

function getAll(callback) {
  var model = this.model;
  var query = model.find();
  query.exec(callback);
}

function getById(id, callback) {
  var model = this.model;
  var query = model.findOne({
    _id: id
  });
  query.exec(callback);
}

module.exports = Repository;









const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const User = require("../models/user");

function UserRepository() {
  Repository.prototype.constructor.call(this);
  this.model = User;
}

UserRepository.prototype = new Repository();

module.exports = new UserRepository();









const user = require("./user");

module.exports = function(app) {
  app.use("/api/user", user);
};








const router = require("express").Router();
const userService = require("../../services/user");

router.get("/", (req, res, next) => {
  userService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.get("/:id", (req, res, next) => {
  userService.findOne(Number(req.params.id), (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

module.exports = router;







const UserRepository = require("../repositories/UserRepository");

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    UserRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  }
};







const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongooseConnection = require("./db/dbconnect").connection;
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(
  session({
    secret: "sessionsecretsessionsecret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongooseConnection
    })
  })
);

const staticPath = path.normalize(__dirname + "/public");
app.use(express.static(staticPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/api/routes")(app);

const server = app.listen(1428);