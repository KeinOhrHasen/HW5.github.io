const Message = require('../repositories/messageRepository');

module.exports = {
    getAll: callback => {
        Message.getAll((err, data) => {
        callback(null, data);
        });
    },
      
    getMessageById: (id, callback) => {
        Message.getById(id, (err, data) => {
        callback(err, data);
        });
    },

    createMessage: (id, callback) => {
        Message.create((err, data) => {
          callback(err, data);
        });
      },

      updateMessage: (id, data, callback) => {
        Message.update(id, (err, data) => {
          callback(err, data);
        });
      },

      deleteMessage: (id, callback) => {
        Message.delete(id, (err, data) => {
          callback(err, data);
        });
      },

}



