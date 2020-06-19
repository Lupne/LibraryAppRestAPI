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

module.exports = bookrouter;
