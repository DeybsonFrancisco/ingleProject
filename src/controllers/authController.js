const User = require("../models/userModel");

module.exports = class AuthController {
    static async login(req, res) {
        try {
            const { userName, password } = req.body;
            const result = await User.Login(userName, password);
            console.log(result);

            if (
                result.msg === "userName não existe" ||
                result.msg === "password incorreta"
            ) {
                return res.status("401").json({ msg: result.msg });
            }
            return res.status("200").json({ token: result.token });
        } catch (error) {
            return res.status("500").json(error);
        }
    }
};
