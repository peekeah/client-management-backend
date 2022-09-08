const { Schema, model } = require("mongoose");

const articleSchema = new Schema({
    link: String,
    comments: String,
});

module.exports = model("articles", articleSchema);
