const messages = require('./messages');
const user = require('./users');

module.exports = function(router) {
    router.use('/messages', messages);
    router.use("/users", user);
  };