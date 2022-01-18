const JWT = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
    const token = req.headers.authorization.split(" ")[1]
    const decode = JWT.verify(token, "codex")
    req.userData = decode;
    next();
    }catch(e) {
        res.json({success: false, message: "Auth failed"})
    }
}