/* eslint-disable no-underscore-dangle */
const Word = require("../models/wordsModel");
const Category = require("../models/categoryModel");
const Context = require("../models/contextModel");

module.exports = class WordController {
    static async addWord(req, res) {
        try {
            const word = await Word.create(req.body);

            const category = await Category.findById(word.category);
            category.words.push(word._id);
            await Category.findByIdAndUpdate(word.category, {
                words: category.words
            });

            await word.contexts.forEach(async (element, key) => {
                const context = await Context.findById(element);
                context.words.push(word._id);
                await Context.findByIdAndUpdate(element, {
                    words: context.words
                });
            });

            return res.status("201").json({ word });
        } catch (e) {
            return res.status("500").json({ e });
        }
    }

    static async listOfWords(req, res) {
        const { page, limit } = req.query;
        const options = {
            page,
            limit
        };
        try {
            const words = await Word.paginate({}, options);
            return res.status(200).json(words);
        } catch (e) {
            return res.status("500").json({ e });
        }
    }
};
