const {Article,validateArticle} =require('../model/aritcleModel')
const express=require('express')
const router=express.Router()

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })

  var upload = multer({ storage: storage })
  router.post('/upload',upload.array('myFiles'),async(req,res)=>{
    const files = req.files
    let arr=[];
 files.forEach(element => {
    
      arr.push("http://localhost:3000/"+element.path)
 
   })
   console.log(arr)
  return res.send(arr)
})







router.post('/newArticle',async(req,res)=>{

    const {error}=validateArticle(req.body)
    if(error) return res.status(400).send({status:false,message:error.details[0].message})

    const article=new Article({
        nom:req.body.nom,
        prix:req.body.prix,
        image:req.body.image,
        categorie:req.body.categorie

    })

    const result=await article.save()
    return res.send({status:true,resultat:result})
})


router.get('/listArticle',async(req,res)=>{


    const result=await Article.find()
    return res.send({status:true,resultat:result})
})


module.exports.routerArticle=router