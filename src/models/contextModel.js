const mongoose = require("../../config/db");

const contextSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    words: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Word"
            }
        ]
    }
});
const context = mongoose.model("Context", contextSchema);
module.exports = context;
