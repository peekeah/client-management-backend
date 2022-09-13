const user = require("../models/user");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const userExist = await user.findOne({ email: req.body.email });
    if (!userExist) {
        res.status(500).send("User does not exist");
    } else {
        if (req.body.password !== userExist.password) {
        res.status(500).send("Incorrect Password");
        } else {
            const response = jwt.sign(userExist.toJSON(), process.env.JWT_SECRET_KEY);
            res.send(response);
        }
    }
};

exports.getUsers = async (req, res) => {
    res.send({ user: "getUsers" });
};
