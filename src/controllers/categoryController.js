const Category = require('./../models/categoryModel')
class CategoryController {

    async addNewCategory (req, res) {
        try{
            var category = await Category.create(req.body)
            return res.status('201').json({category})        
        }catch(e){
            return  res.status(500).json({e})
        }
    }
    async listOfCategorys(req, res){
        try{
            var category =  await Category.find().populate('words')
            return res.status(200).json(category)
        }catch(e){
            return res.status('500').json({e})
        }
    }
}
module.exports = new CategoryController();