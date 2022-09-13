const express = require('express');
const { authenticateToken, authorizeUser } = require('../auth/auth');
const article = require('../controllers/article');

const router = express.Router();

router.get('/', authenticateToken, authorizeUser, article.getArticles);
router.post('/user-articles', article.userArticles);
router.patch('/update', authenticateToken, authorizeUser, article.updateArticle);

module.exports = router;   