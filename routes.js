const controller = require('./src/controllers')
const validate= require('./src/validatiors')
const Validation =  require('express-validation')
module.exports = function(app){

    app.route('/categorys')
        .get(controller.categoryController.listOfCategorys)
        .post(Validation(validate.categoryValidations), controller.categoryController.addNewCategory)
    
//routes of word
    app.route('/words')
        .get(controller.wordController.listOfWords)
        .post(Validation(validate.wordsValidations), controller.wordController.addNewWord)

    app.route('/words/findTraductions')
        .post(controller.wordController.findTraduction)

    app.route('/contexts')
        .get(controller.contextController.listOfContexts)
        .post(Validation(validate.contextValidations), controller.contextController.addNewContext)


}