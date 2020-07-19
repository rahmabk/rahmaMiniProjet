const mongoose=require('mongoose')
const Joi=require('joi')

const schemaArticle=mongoose.Schema({
    nom:{type:String,required:true},
    prix:{type:Number,required:true},
    image:{type:String,required:true},
    categorie:{type:String,required:true},

})

const Article=mongoose.model('Article',schemaArticle)

function validateArticle(article){

    const schema={
        nom:Joi.string().required(),
        prix:Joi.number().required(),
        image:Joi.string().required(),
        categorie:Joi.string().required()

    }

    return Joi.validate(article,schema)
}

module.exports.Article=Article
module.exports.validateArticle=validateArticle