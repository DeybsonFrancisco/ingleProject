const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Mongoose = require("../../config/db");

const UserSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});
UserSchema.static("TokenGenerate", async function(id) {
    const token = await jwt.sign(id, process.env.SECRET);
    return token;
});
UserSchema.static("Login", async function(userName, password) {
    try {
        let msg = "";
        let token = "";
        const user = await this.findOne({ userName });
        if (!user) {
            msg = "userName não existe";
        } else if (!(await bcrypt.compare(password, user.password))) {
            msg = "password incorreta";
        } else {
            msg = "Logado";
            token = await this.TokenGenerate(user.id);
        }
        return { msg, token };
    } catch (error) {
        return error;
    }
});
module.exports = Mongoose.model("User", UserSchema);
