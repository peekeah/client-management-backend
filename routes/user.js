const express = require("express");
const users = require("../controllers/users");
const auth = require("../auth/auth");
const router = express.Router();


router.post("/login", users.login);
router.get('/all-users', auth.authenticateToken, auth.authorizeUser ,users.getUsers);

module.exports = router;

