const mongoose =  require('./../../config/db')

const CategorySchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    words:{
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Word"
        }]
    }
 })
var category = mongoose.model('Category', CategorySchema)
    module.exports = category
