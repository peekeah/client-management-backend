const jwt = require("jsonwebtoken");

exports.authenticateToken = async (req, res, next) => {
    if (!req.headers["access-token"])
        return res.status(400).send({ msg: "Unauthorized: Token not found" });
    try {
        const tokenData = await jwt.verify(
        req.headers["access-token"],
        process.env.JWT_SECRET_KEY
        );
        req.body.tokenData = tokenData;
        next();
    } catch (err) {
        res.status(401).send({ msg: "Token is invalid" });
    }
};

exports.authorizeUser = async (req, res, next) => {
    if(req.body.tokenData.role != "admin") return res.status(401).send({ msg: "You are not an admin"});
    next();
};
