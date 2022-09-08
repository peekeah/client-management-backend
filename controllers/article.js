const article = require("../models/article");

exports.getArticles = async (req, res, next) => {
    const data = await article.find({});
    res.send(data);
}