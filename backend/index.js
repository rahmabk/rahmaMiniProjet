const express=require("express")
const app=express()
const bodyParser=require('body-parser')
const mongoose=require("mongoose")
const { routerArticle } = require("./route/articleRoute")
const cors=require('cors')
mongoose.connect("mongodb://localhost/shopBD",{ useUnifiedTopology: true,useNewUrlParser: true })
.then(console.log("connected to mongodb"))
.catch(err=>console.log(err))

app.use(express.json())

app.use(cors())
app.use('/article',routerArticle)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('uploads'));
app.use('/uploads', express.static(__dirname + '/uploads/'));




app.listen(3000,()=>{
    console.log("server conected to port 3000")
})