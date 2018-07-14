const mongoose = require('mongoose');
const messageSchema = mongoose.Schema({

    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    body: {
        type: String,
        required: true,
        max:1000,
        read : Boolean,
        delivered : Boolean
    }
})

const Messages = mongoose.model("messages", messageSchema);
module.exports = Messages;