const Repository = require('./generalRepository');
const Message = require('../models/messages');

function MessageRepository(){
    Repository.prototype.constructor.call(this);
    this.model = Message;
    Repository.prototype.MessageRepositoryId = MessageRepositoryId
    }

function MessageRepositoryId(id, callback) {
    let model = this.model;
    let query = model.find({ '$or': [
            { "senderId": id },
            { "receiverId": id }
        ]
    });
    query.exec(callback);
}

MessageRepository.prototype = new MessageRepository();

module.exports = new MessageRepository();