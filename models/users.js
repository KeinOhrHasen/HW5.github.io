const mongoose = require('mongoose');
const userSchema = mongoose.Schema({

    login: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: false,
        max:50
    }
})


const User = mongoose.model("User", userSchema);
module.exports = User;