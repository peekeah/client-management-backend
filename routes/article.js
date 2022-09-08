const express = require('express');
const article = require('../controllers/article');

const router = express.Router();

router.get('/', article.getArticles);
router.post('/user-articles', article.getArticlesByName);
router.patch('/update', article.updateArticle);

module.exports = router;   