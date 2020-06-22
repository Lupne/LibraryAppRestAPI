const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const bookrouter = express.Router();
const library = require('../schema/books')

bookrouter.post('/addbook',function(req,res,next){
  library.create(req.body).then(function(newbook){
    res.send(newbook);
  })
})

bookrouter.post('/findbook',function(req,res,next){
  library.find({name:req.body.name},function(err,obj){
    const result = obj;
    const sending = []
    result.map((ele)=>{
      let temp = {};
      temp.name=ele.name;
      temp.author = ele.author,
      temp.rating = parseFloat(ele.rating),
      temp.available = ele.available.toString().toUpperCase(),
      temp.rev = ele.rev
      temp.key = ele._id.toString()
      temp._id = ele._id
      temp.image = ele.image
      sending.push(temp);
    })
    console.log(sending);
    res.send(sending)
  })
})

bookrouter.post('/getbook',function(req,res,next){
  console.log(req.body)
  library.find({_id:req.body._id},function(err,obj){
    res.send(obj);
  })
})

bookrouter.put('/addrating',function(req,res,next){
  let id=req.body.id;
  let rating=req.body.rating
  library.findOne({_id:req.body.id},function(err,obj){
    library.findOneAndUpdate({_id:id},{rating:Number(obj.rating)+Number(rating),rev:Number(obj.rev)+1}).then(function(){
      library.findOne({_id:id},function(error,object){
        console.log(object)
      })
    })
  })


})

module.exports = bookrouter;
