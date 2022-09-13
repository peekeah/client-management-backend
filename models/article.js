const { Schema, model } = require("mongoose");

const articleSchema = new Schema({
    name: { type: "string", required: true },
    link: String,
    comment: String,
});

module.exports = model("articles", articleSchema);
