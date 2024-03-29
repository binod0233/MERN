const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.connect('mongodb://localhost:27017/mernpms', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })


    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));
var conn = mongoose.Collection;
var userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        index: {
            unique: true,
        }
    },

    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var userModel = mongoose.model('users', userSchema);
module.exports = userModel;