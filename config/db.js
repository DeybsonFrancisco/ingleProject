const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0-wmbu5.mongodb.net/ingleProject
", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
