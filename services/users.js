const User = require('../repositories/userRepository');
const Message = require('../repositories/messageRepository')

module.exports = {
    getUserById: callback => {
      UserRepository.getAll((err, data) => {
        callback(null, data);
      });
    },
  
    findOneUser: (id, callback) => {
      UserRepository.getById(id, (err, data) => {
        callback(err, data);
      });
    },

    createUser: (id, callback) => {
        UserRepository.create((err, data) => {
          callback(err, data);
        });
      },

    updateUser: (id, data, callback) => {
        UserRepository.update(id, (err, data) => {
          callback(err, data);
        });
      },

    deleteUser: (id, callback) => {
        UserRepository.delete(id, (err, data) => {
          callback(err, data);
        });
      },

    getFriendsByUserId: (id) => {
        return Message.getMessagesByUserId(id)
          .then((messages) => {
            let speakersIds = [];
            messages.forEach(message => {
            if (message.receiverId == id && !speakersIds.includes(message.senderId)){
              speakersIds.push(message.senderId);
            }else if (!speakersIds.includes(message.receiverId)){
                  speakersIds.push(message.receiverId);
            }
            });
            
            return User.getByIds(speakersIds);
      
          })
      }
  };

