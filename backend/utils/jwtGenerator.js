const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(id) {
    const payload = {
        id: id
    };

    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1h" });
}

module.exports = jwtGenerator;