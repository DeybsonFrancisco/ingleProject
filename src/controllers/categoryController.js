const Category = require("./../models/categoryModel");

module.exports = class CategoryController {
    static async addNewCategory(req, res) {
        try {
            const category = await Category.create(req.body);
            return res.status("201").json({ category });
        } catch (e) {
            return res.status(500).json({ e });
        }
    }

    static async listOfCategorys(req, res) {
        try {
            const category = await Category.find().populate("words");
            return res.status(200).json(category);
        } catch (e) {
            return res.status("500").json({ e });
        }
    }
};
