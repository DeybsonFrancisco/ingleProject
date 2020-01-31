const {Options, RequestTraduction} = require('../services/wordCrawler')
class TraductionCrawler{

    get key(){
        return 'traductionCrwaler'
    }

    async findTraduction(job, done){
       var {words} = job.data

       var traduction = await RequestTraduction(Options(words))
       console.log(traduction)
       return done()
    }
    
}
module.exports = new TraductionCrawler()