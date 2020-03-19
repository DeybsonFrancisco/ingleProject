const Validation = require("express-validation");

const controller = require("./controllers");
const validate = require("./validatiors");
const verifyToken = require("./middlewares/verifyToken");

module.exports = function(app) {
    app.route("/users").post(controller.userController.createUser);

    app.route("/authorization").post(controller.authController.login);

    app.use(verifyToken);

    app.route("/users/:id").delete(controller.userController.deleteUser);

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
