require('../db');
const Repository = require('./generalRepository');
const User = require('../models/users');

function UserRepository(){
    Repository.prototype.constructor.call(this);
    this.model = User;
    Repository.prototype.getById = getByIds;
}

function getByIds(ids, callback) {
    let model = this.model;
    let query = model.find({'_id': {$in: ids}});
    query.exec(callback);
    }

UserRepository.prototype = new Repository();

module.exports = new UserRepository();