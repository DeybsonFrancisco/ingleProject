const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/inglesproject', {
    useNewUrlParser: true ,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise;

module.exports = mongoose;