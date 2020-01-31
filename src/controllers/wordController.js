const Word = require('../models/wordsModel')
const Category = require('../models/categoryModel')
const Context = require('../models/contextModel')
const Queue = require('../services/queue')


class WordController {

    async addNewWord(req, res){
        try{
            var word = await Word.create(req.body)
            
            var category = await Category.findById(word.category)
            category.words.push(word._id)
            await Category.findByIdAndUpdate(word.category, 
                {words: category.words})

            await word.contexts.forEach(async (element, key) => {
                
                var context = await Context.findById(element)
                context.words.push(word._id)
                await Context.findByIdAndUpdate(element,
                     {words: context.words})
            });
                
            return res.status('201').json({word})
        }catch(e){
            return res.status('500').json({e})
        }
    }
    async listOfWords(req, res){
        try{
            var words =  await Word.find()
            return res.status(200).json(words)
        }catch(e){
            return res.status('500').json({e})
        }
    }

    async findTraduction(req, res){
        try{
            Queue.create('traductionCrawler', {
                words: req.body.words
            })
            return res.status('200').json({'msg': "solicitation sucessfull, only espere"})
        }catch(e){
            return res.status('500').json({erro: e})
        }
    }
}
module.exports = new WordController();