const Context = require('./../models/contextModel')
class ContextController {

    async addNewContext (req, res) {
        try{
            var context = await Context.create(req.body)
            return res.status('201').json({context})        
        }catch(e){
            return  res.status(500).json({e})
        }
    }
    async listOfContexts(req, res){
        try{
            var context =  await Context.find().populate('words')
            return res.status(200).json(context)
        }catch(e){
            return res.status('500').json({e})
        }
    }
}
module.exports = new ContextController();