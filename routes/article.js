const express = require('express');
const article = require('../controllers/article');

const router = express.Router();

router.get('/', article.getArticles);

module.exports = router;   