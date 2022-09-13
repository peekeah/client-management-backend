const article = require("../models/article");

//Getting all Articles
exports.getArticles = async (req, res) => {
    try {
        const data = await article.find({});
        res.send(data);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

//Filtering Articles by user
exports.userArticles = async (req, res) => {
    try {
        const data = await article.find({ name: req.body.name });
        res.send(data);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

//Updating articles by ID
exports.updateArticle = async (req, res) => {
    try {
        const user = await article.findByIdAndUpdate(req.body._id, req.body);
        res.send(user);    
    } catch (err) {
        res.status(404).send(err.message);
    }
};
