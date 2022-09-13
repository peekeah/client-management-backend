const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: String,
    password: String,
    role: String,
});

const user = model('users', userSchema);
module.exports = user;