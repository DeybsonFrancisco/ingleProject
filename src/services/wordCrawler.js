const request = require('request-promise')
const cheerio = require('cheerio')

exports.options = function Options(words){
    let paramer = '';
    palavras.forEach((elemento)=>{
        if(parametros === '')
            paramer =`${element}`
        else
            paramer = `${paramer}%20${element}`
    })
    return {
        url: `https://translate.google.com.br/?hl=pt-BR#view=home&op=translate&sl=auto&tl=pt&text=${parametros}`,
        transform: (body)=>{
            return cheerio.load(body)
        }
    }
}

exports.requestTraduction = async function requestTraduction(options, words){
    try{
        var traduction = await request(options(words))
        return traduction
    }catch(err){
        console.log(err)
    }
    
}