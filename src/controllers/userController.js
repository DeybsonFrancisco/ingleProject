const User = require("../models/userModel");

module.exports = class UserController {
    static async createUser(req, res) {
        try {
            const { userName } = req.body;
            let user = await User.findOne({ userName });
            console.log(user);
            if (user) {
                return res.status("400").json({
                    info: "userName ja existe"
                });
            }
            user = await User.create(req.body);
            const token = await User.TokenGenerate(user.id);
            return res.status("201").json({ user, token });
        } catch (error) {
            return res.status("500").json(error);
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
            User.findByIdAndDelete(id);
            return res.status("200");
        } catch (error) {
            return res.status("500").json(error);
        }
    }
};
