const MongoosePaginate = require("mongoose-paginate-v2");
const mongoose = require("../../config/db");

const wordSchema = mongoose.Schema({
    word: {
        type: String,
        required: true,
        unique: true
    },
    traduction: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    contexts: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Context"
            }
        ]
    }
});

wordSchema.plugin(MongoosePaginate);
const word = mongoose.model("Word", wordSchema);
module.exports = word;
