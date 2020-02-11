const Joi = require("joi");

module.exports = {
    body: {
        word: Joi.string().required(),
        traduction: Joi.string().required()
    }
};
