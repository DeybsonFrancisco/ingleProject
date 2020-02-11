const Validation = require("express-validation");

const controller = require("./controllers");
const validate = require("./validatiors");

module.exports = function(app) {
    app.route("/categorys")
        .get(controller.categoryController.listOfCategorys)
        .post(
            Validation(validate.categoryValidations),
            controller.categoryController.addNewCategory
        );

    // routes of word
    app.route("/words")
        .get(controller.wordController.listOfWords)
        .post(
            Validation(validate.wordsValidations),
            controller.wordController.addWord
        );

    app.route("/contexts")
        .get(controller.contextController.listOfContexts)
        .post(
            Validation(validate.contextValidations),
            controller.contextController.addNewContext
        );
};
