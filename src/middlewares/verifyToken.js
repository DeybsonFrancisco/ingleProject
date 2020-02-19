const jwt = require("jsonwebtoken");

module.exports = async function verifyToken(req, res, next) {
    try {
        const { authorization } = req.headers;
        if (!authorization)
            return res
                .status("401")
                .json({ erro: "não autorizado, token não repassado" });
        const [, token] = authorization.split(" ");
        await jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err)
                return res
                    .status("401")
                    .json({ erro: "não autorizado: token invalido" });
            req.id = decoded.id;
            return next();
        });
    } catch (error) {
        return res.status("500").json(error);
    }
};
